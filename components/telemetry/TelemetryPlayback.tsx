import { useMemo } from "react";
import { generateDrive, indexAt } from "@/lib/drive";
import PlaybackControls from "./PlaybackControls";
import Readouts from "./Readouts";
import RouteMap from "./RouteMap";
import TelemetryChart from "./TelemetryChart";
import { usePlayback } from "./usePlayback";

const SAMPLE_HZ = 5;

export default function TelemetryPlayback() {
  const drive = useMemo(() => generateDrive(SAMPLE_HZ), []);
  const { rootRef, time, playing, rate, seek, setRate, togglePlaying } = usePlayback(drive.duration);
  const index = indexAt(drive.t, time);

  return (
    <div
      ref={rootRef}
      role="group"
      aria-label="Sample telemetry playback"
      className="rounded-md border border-rule bg-surface p-3 sm:p-5"
    >
      <div className="grid gap-4 md:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)] md:gap-6">
        <RouteMap drive={drive} index={index} />
        <Readouts drive={drive} index={index} time={time} />
      </div>
      <TelemetryChart drive={drive} time={time} onSeek={seek} />
      <PlaybackControls
        duration={drive.duration}
        time={time}
        playing={playing}
        rate={rate}
        onTogglePlaying={togglePlaying}
        onRateChange={setRate}
        onSeek={seek}
      />
    </div>
  );
}
