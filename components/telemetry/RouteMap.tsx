import { useMemo } from "react";
import type { Drive } from "@/lib/drive";

type Props = { drive: Drive; index: number };

const PADDING = 140;
const GRID_STEP = 250;
const SCALE_LENGTH = 500;

function multiples(from: number, to: number, step: number) {
  const out: number[] = [];
  for (let v = Math.ceil(from / step) * step; v < to; v += step) out.push(v);
  return out;
}

// North up, metres to SVG units 1:1. SVG's y axis points down, so y is negated.
function routeGeometry({ x, y }: Drive) {
  const minX = Math.min(...x);
  const maxX = Math.max(...x);
  const minY = Math.min(...y);
  const maxY = Math.max(...y);
  const view = {
    x: minX - PADDING,
    y: -maxY - PADDING,
    w: maxX - minX + PADDING * 2,
    h: maxY - minY + PADDING * 2,
  };

  let path = "";
  for (let k = 0; k < x.length; k += 2) {
    path += `${k === 0 ? "M" : "L"}${x[k].toFixed(1)},${(-y[k]).toFixed(1)}`;
  }
  path += "Z";

  return {
    view,
    path,
    gridX: multiples(view.x, view.x + view.w, GRID_STEP),
    gridY: multiples(view.y, view.y + view.h, GRID_STEP),
  };
}

export default function RouteMap({ drive, index }: Props) {
  const { view, path, gridX, gridY } = useMemo(() => routeGeometry(drive), [drive]);

  const fraction = drive.dist[index] / drive.length;
  const headingDeg = (-drive.heading[index] * 180) / Math.PI;
  const startX = drive.x[0];
  const startY = -drive.y[0];

  return (
    <svg
      viewBox={`${view.x} ${view.y} ${view.w} ${view.h}`}
      role="img"
      aria-label="Map of the sample lap with the vehicle's current position"
      className="block max-h-80 w-full"
    >
      <g className="stroke-rule" strokeWidth={2}>
        {gridX.map((gx) => (
          <line key={`x${gx}`} x1={gx} x2={gx} y1={view.y} y2={view.y + view.h} />
        ))}
        {gridY.map((gy) => (
          <line key={`y${gy}`} x1={view.x} x2={view.x + view.w} y1={gy} y2={gy} />
        ))}
      </g>

      <path d={path} fill="none" strokeWidth={26} strokeLinejoin="round" className="stroke-rule" />
      <path
        d={path}
        fill="none"
        strokeWidth={10}
        strokeLinecap="round"
        strokeLinejoin="round"
        pathLength={1000}
        strokeDasharray="1000"
        strokeDashoffset={1000 - fraction * 1000}
        className="stroke-signal"
      />

      <line x1={startX} y1={startY - 46} x2={startX} y2={startY + 46} strokeWidth={8} className="stroke-ink" />

      <g transform={`translate(${drive.x[index]} ${-drive.y[index]}) rotate(${headingDeg})`}>
        <path
          d="M 40 0 L -26 -26 L -14 0 L -26 26 Z"
          strokeWidth={7}
          strokeLinejoin="round"
          className="fill-mark stroke-ink"
        />
      </g>

      <g transform={`translate(${view.x + 60} ${view.y + view.h - 60})`} strokeWidth={5} className="stroke-muted">
        <line x1={0} x2={SCALE_LENGTH} y1={0} y2={0} />
        <line x1={0} x2={0} y1={-14} y2={14} />
        <line x1={SCALE_LENGTH} x2={SCALE_LENGTH} y1={-14} y2={14} />
        <text x={SCALE_LENGTH / 2} y={-26} textAnchor="middle" fontSize={38} stroke="none" className="fill-muted">
          {SCALE_LENGTH} m
        </text>
      </g>
    </svg>
  );
}
