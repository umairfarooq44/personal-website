import Wrap from "@/components/Wrap";
import { profile } from "@/content/profile";

export default function Hero() {
  return (
    <Wrap className="pt-8 pb-8 sm:pt-14 sm:pb-11 lg:pt-16">
      <h1 className="font-wide text-[clamp(2.9rem,10.5vw,8rem)] leading-[0.92] font-extrabold tracking-[-0.035em] text-ink">
        {profile.name}
      </h1>
      <p className="font-semiwide mt-5 text-[clamp(1.25rem,2.6vw,1.75rem)] font-semibold tracking-tight text-ink">
        {profile.role}
      </p>
      <p className="mt-4 max-w-[66ch] text-lg">{profile.intro}</p>
      <p className="mt-2 text-muted">{profile.availability}</p>
      <div className="mt-7 flex flex-wrap gap-3">
        <a
          href={profile.cvPath}
          download
          className="rounded-[3px] border-[1.5px] border-ink bg-ink px-5 py-3 font-semibold text-page no-underline hover:border-signal hover:bg-signal hover:text-white"
        >
          Download CV
        </a>
        <a
          href={`mailto:${profile.email}`}
          className="rounded-[3px] border-[1.5px] border-ink px-5 py-3 font-semibold text-ink no-underline hover:bg-surface"
        >
          Email me
        </a>
      </div>
    </Wrap>
  );
}
