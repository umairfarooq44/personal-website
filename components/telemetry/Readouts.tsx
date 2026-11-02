import type { Drive } from "@/lib/drive";
import { formatTime } from "./format";

type Props = { drive: Drive; index: number; time: number };

function Readout({ label, value, unit }: { label: string; value: string; unit: string }) {
  return (
    <div>
      <dt className="text-sm text-muted">{label}</dt>
      <dd className="font-semiwide text-[clamp(1.6rem,3.2vw,2.4rem)] leading-tight font-semibold tracking-tight text-ink">
        {value}
        <span className="ml-1 text-sm font-normal tracking-normal text-muted [font-stretch:100%]">{unit}</span>
      </dd>
    </div>
  );
}

export default function Readouts({ drive, index, time }: Props) {
  const latG = drive.latG[index];

  return (
    <dl className="grid grid-cols-2 content-center gap-x-4 gap-y-5">
      <Readout label="Speed" value={drive.speed[index].toFixed(0)} unit="km/h" />
      <Readout label="Lateral" value={`${latG >= 0 ? "+" : "−"}${Math.abs(latG).toFixed(2)}`} unit="g" />
      <Readout
        label="Distance"
        value={(drive.dist[index] / 1000).toFixed(2)}
        unit={`of ${(drive.length / 1000).toFixed(2)} km`}
      />
      <Readout label="Time" value={formatTime(time)} unit={`of ${formatTime(drive.duration)}`} />
    </dl>
  );
}
