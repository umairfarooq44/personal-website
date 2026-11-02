import { formatTime } from "./format";
import { RATES, type Rate } from "./usePlayback";

type Props = {
  duration: number;
  time: number;
  playing: boolean;
  rate: Rate;
  onTogglePlaying: () => void;
  onRateChange: (rate: Rate) => void;
  onSeek: (time: number) => void;
};

export default function PlaybackControls({ duration, time, playing, rate, onTogglePlaying, onRateChange, onSeek }: Props) {
  return (
    <div className="mt-2 flex items-center gap-3">
      <button
        type="button"
        onClick={onTogglePlaying}
        aria-label={playing ? "Pause playback" : "Play playback"}
        className="grid size-10 flex-none place-items-center rounded-full bg-ink text-surface hover:bg-signal"
      >
        <svg viewBox="0 0 16 16" className="size-3.5 fill-current" aria-hidden="true">
          <path d={playing ? "M3 2h3.5v12H3zM9.5 2H13v12H9.5z" : "M4 2 14 8 4 14Z"} />
        </svg>
      </button>

      <div role="group" aria-label="Playback speed" className="flex flex-none divide-x divide-rule rounded border border-rule">
        {RATES.map((r) => (
          <button
            key={r}
            type="button"
            aria-pressed={rate === r}
            onClick={() => onRateChange(r)}
            className={`px-2.5 py-1 text-sm ${rate === r ? "bg-ink text-surface" : "text-muted hover:text-ink"}`}
          >
            {r}×
          </button>
        ))}
      </div>

      <input
        type="range"
        min={0}
        max={duration}
        step={0.2}
        value={time}
        onChange={(e) => onSeek(Number(e.target.value))}
        aria-label="Playback position"
        aria-valuetext={`${formatTime(time)} of ${formatTime(duration)}`}
        className="min-w-0 flex-1 accent-signal"
      />
    </div>
  );
}
