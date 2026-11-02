import Stack from "@/components/Stack";
import type { Job } from "@/content/profile";

export default function ExperienceItem({ job }: { job: Job }) {
  return (
    <li className="grid gap-1 sm:grid-cols-[11rem_minmax(0,1fr)] sm:gap-x-8">
      <p className="pt-0.5 text-muted">
        {job.start} to {job.end}
      </p>
      <div>
        <h3 className="font-semiwide text-[1.2rem] leading-snug font-semibold tracking-tight text-ink">
          {job.role}, {job.company}
        </h3>
        <p className="text-muted">{job.location}</p>
        {job.summary && <p className="mt-2.5 max-w-[64ch]">{job.summary}</p>}
        <ul className="mt-2.5 max-w-[64ch] list-disc space-y-1.5 pl-5 marker:text-muted">
          {job.points.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
        <Stack items={job.stack} />
      </div>
    </li>
  );
}
