import { useEffect, useRef, type RefObject } from "react";
import uPlot from "uplot";
import "uplot/dist/uPlot.min.css";
import type { Drive } from "@/lib/drive";
import { formatTime } from "./format";

type Props = { drive: Drive; time: number; onSeek: (time: number) => void };

const HEIGHT = 190;

function cssVar(name: string) {
  return getComputedStyle(document.documentElement).getPropertyValue(name).trim();
}

function drawPlayhead(u: uPlot, time: number, line: string, fill: string) {
  const x = u.valToPos(time, "x", true);
  const { top, height } = u.bbox;
  const { ctx } = u;
  const dpr = window.devicePixelRatio || 1;
  ctx.save();
  ctx.strokeStyle = line;
  ctx.lineWidth = 2 * dpr;
  ctx.beginPath();
  ctx.moveTo(x, top);
  ctx.lineTo(x, top + height);
  ctx.stroke();
  ctx.fillStyle = fill;
  ctx.lineWidth = 1.5 * dpr;
  ctx.beginPath();
  ctx.arc(x, top + 1, 5 * dpr, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();
  ctx.restore();
}

function chartOptions(width: number, timeRef: RefObject<number>): uPlot.Options {
  const signal = cssVar("--color-signal");
  const muted = cssVar("--color-muted");
  const ink = cssVar("--color-ink");
  const rule = cssVar("--color-rule");
  const mark = cssVar("--color-mark");
  const font = `12px ${cssVar("--font-archivo")}, system-ui, sans-serif`;
  const axis = { stroke: muted, font, labelFont: font, labelSize: 16, size: 40, ticks: { stroke: rule } };

  return {
    width,
    height: HEIGHT,
    legend: { show: false },
    cursor: { y: false, drag: { x: false, y: false }, points: { show: false } },
    scales: {
      x: { time: false },
      speed: { range: [0, 100] },
      g: { range: [-0.4, 0.4] },
    },
    axes: [
      { ...axis, labelSize: 0, grid: { stroke: rule, width: 1 }, values: (_u, vals) => vals.map(formatTime) },
      { ...axis, scale: "speed", label: "km/h", grid: { stroke: rule, width: 1 } },
      {
        ...axis,
        scale: "g",
        side: 1,
        label: "lateral g",
        grid: { show: false },
        values: (_u, vals) => vals.map((v) => v.toFixed(1)),
      },
    ],
    series: [
      {},
      { label: "Speed", scale: "speed", stroke: signal, width: 2 },
      { label: "Lateral g", scale: "g", stroke: muted, width: 1.25, dash: [4, 3] },
    ],
    hooks: {
      draw: [(u) => drawPlayhead(u, timeRef.current, ink, mark)],
    },
  };
}

// pan-y keeps the page scrollable when swiping over the chart.
function enableScrubbing(u: uPlot, onSeek: (time: number) => void) {
  const { over } = u;
  const seek = (e: PointerEvent) => onSeek(u.posToVal(e.offsetX, "x"));
  over.style.cursor = "ew-resize";
  over.style.touchAction = "pan-y";
  over.addEventListener("pointerdown", (e) => {
    over.setPointerCapture(e.pointerId);
    seek(e);
  });
  over.addEventListener("pointermove", (e) => {
    if (over.hasPointerCapture(e.pointerId)) seek(e);
  });
}

export default function TelemetryChart({ drive, time, onSeek }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const plotRef = useRef<uPlot | null>(null);
  const timeRef = useRef(time);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const data: uPlot.AlignedData = [Array.from(drive.t), Array.from(drive.speed), Array.from(drive.latG)];
    const plot = new uPlot(chartOptions(el.clientWidth, timeRef), data, el);
    plotRef.current = plot;
    enableScrubbing(plot, onSeek);

    const resize = new ResizeObserver(() => plot.setSize({ width: el.clientWidth, height: HEIGHT }));
    resize.observe(el);

    return () => {
      resize.disconnect();
      plot.destroy();
      plotRef.current = null;
    };
  }, [drive, onSeek]);

  useEffect(() => {
    timeRef.current = time;
    plotRef.current?.redraw(false);
  }, [time]);

  return <div ref={containerRef} className="mt-3 min-h-[190px]" />;
}
