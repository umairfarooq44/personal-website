// Generates a deterministic sample drive: one lap of a closed circuit,
// with speed limited by curvature, acceleration and braking, the way a
// real vehicle log would look.

export type Drive = {
  t: Float64Array; // seconds from start
  x: Float64Array; // metres, east
  y: Float64Array; // metres, north
  speed: Float64Array; // km/h
  latG: Float64Array; // lateral acceleration in g, signed (+ = left turn)
  dist: Float64Array; // metres travelled
  heading: Float64Array; // radians, 0 = east, counter-clockwise
  duration: number;
  length: number;
};

const G = 9.81;

export function generateDrive(sampleHz = 5): Drive {
  const n = 3000;
  const R = 620;
  const px = new Float64Array(n);
  const py = new Float64Array(n);
  for (let i = 0; i < n; i++) {
    const th = (i / n) * Math.PI * 2;
    const r = R * (1 + 0.28 * Math.sin(3 * th + 0.4) + 0.12 * Math.cos(5 * th) + 0.06 * Math.sin(9 * th + 1.1));
    px[i] = r * Math.cos(th) * 1.15;
    py[i] = r * Math.sin(th) * 0.85;
  }

  // Signed curvature from the circle through each point and its neighbours.
  const ds = new Float64Array(n);
  const kappa = new Float64Array(n);
  for (let i = 0; i < n; i++) {
    const a = (i - 1 + n) % n;
    const b = (i + 1) % n;
    const dx1 = px[i] - px[a];
    const dy1 = py[i] - py[a];
    const dx2 = px[b] - px[i];
    const dy2 = py[b] - py[i];
    ds[i] = Math.hypot(dx2, dy2);
    const cross = dx1 * dy2 - dy1 * dx2;
    const d1 = Math.hypot(dx1, dy1);
    const d2 = Math.hypot(dx2, dy2);
    const d3 = Math.hypot(px[b] - px[a], py[b] - py[a]);
    kappa[i] = (2 * cross) / (d1 * d2 * d3 || 1);
  }

  // Speed profile: curvature limit, then acceleration and braking limits.
  const vMax = 24; // m/s, about 86 km/h
  const aLat = 2.4; // m/s²
  const aAcc = 1.8;
  const aBrake = 3.5;
  const v = new Float64Array(n);
  for (let i = 0; i < n; i++) {
    const k = Math.abs(kappa[i]);
    v[i] = Math.min(vMax, k > 1e-6 ? Math.sqrt(aLat / k) : vMax);
  }
  for (let pass = 0; pass < 2; pass++) {
    for (let j = 1; j <= n; j++) {
      const i = j % n;
      const p = (j - 1) % n;
      v[i] = Math.min(v[i], Math.sqrt(v[p] * v[p] + 2 * aAcc * ds[p]));
    }
    for (let j = n - 2; j >= -1; j--) {
      const i = (j + n) % n;
      const q = (j + 1 + n) % n;
      v[i] = Math.min(v[i], Math.sqrt(v[q] * v[q] + 2 * aBrake * ds[i]));
    }
  }

  const tRaw = new Float64Array(n + 1);
  const sRaw = new Float64Array(n + 1);
  for (let i = 0; i < n; i++) {
    const vNext = v[(i + 1) % n];
    const vAvg = Math.max(0.5, (v[i] + vNext) / 2);
    tRaw[i + 1] = tRaw[i] + ds[i] / vAvg;
    sRaw[i + 1] = sRaw[i] + ds[i];
  }
  const duration = tRaw[n];
  const length = sRaw[n];

  const m = Math.floor(duration * sampleHz) + 1;
  const out: Drive = {
    t: new Float64Array(m),
    x: new Float64Array(m),
    y: new Float64Array(m),
    speed: new Float64Array(m),
    latG: new Float64Array(m),
    dist: new Float64Array(m),
    heading: new Float64Array(m),
    duration,
    length,
  };
  let j = 0;
  for (let k = 0; k < m; k++) {
    const tk = Math.min(duration, k / sampleHz);
    while (j < n - 1 && tRaw[j + 1] < tk) j++;
    const span = tRaw[j + 1] - tRaw[j] || 1;
    const f = (tk - tRaw[j]) / span;
    const a = j % n;
    const b = (j + 1) % n;
    const vi = v[a] + (v[b] - v[a]) * f;
    const ki = kappa[a] + (kappa[b] - kappa[a]) * f;
    out.t[k] = tk;
    out.x[k] = px[a] + (px[b] - px[a]) * f;
    out.y[k] = py[a] + (py[b] - py[a]) * f;
    out.speed[k] = vi * 3.6;
    out.latG[k] = (vi * vi * ki) / G;
    out.dist[k] = sRaw[j] + (sRaw[j + 1] - sRaw[j]) * f;
    out.heading[k] = Math.atan2(py[b] - py[a], px[b] - px[a]);
  }

  // Small, deterministic sensor noise so the traces look recorded, not drawn.
  let seed = 7;
  const rand = () => {
    seed = (seed * 16807) % 2147483647;
    return seed / 2147483647 - 0.5;
  };
  for (let k = 0; k < m; k++) {
    out.speed[k] = Math.max(0, out.speed[k] + rand() * 0.8);
    out.latG[k] = out.latG[k] + rand() * 0.02;
  }

  return out;
}

/** Index of the last sample at or before time t (binary search). */
export function indexAt(t: Float64Array, time: number): number {
  let lo = 0;
  let hi = t.length - 1;
  if (time <= t[0]) return 0;
  if (time >= t[hi]) return hi;
  while (hi - lo > 1) {
    const mid = (lo + hi) >> 1;
    if (t[mid] <= time) lo = mid;
    else hi = mid;
  }
  return lo;
}
