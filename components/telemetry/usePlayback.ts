import { useCallback, useEffect, useRef, useState } from "react";

export const RATES = [1, 4, 16] as const;
export type Rate = (typeof RATES)[number];

// Longest step of one frame, so returning to a hidden tab doesn't skip ahead.
const MAX_FRAME_SECONDS = 0.1;

export function usePlayback(duration: number) {
  const [time, setTime] = useState(0);
  const [playing, setPlaying] = useState(() => !window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  const [rate, setRate] = useState<Rate>(4);
  const [onScreen, setOnScreen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => setOnScreen(entry.isIntersecting));
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!playing || !onScreen) return;
    let raf = 0;
    let last = performance.now();
    const tick = (now: number) => {
      const dt = Math.min(MAX_FRAME_SECONDS, (now - last) / 1000);
      last = now;
      setTime((t) => {
        const next = t + dt * rate;
        return next >= duration ? 0 : next;
      });
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [playing, onScreen, rate, duration]);

  const seek = useCallback((t: number) => setTime(Math.min(duration, Math.max(0, t))), [duration]);
  const togglePlaying = useCallback(() => setPlaying((p) => !p), []);

  return { rootRef, time, playing, rate, seek, setRate, togglePlaying };
}
