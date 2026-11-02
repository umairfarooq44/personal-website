import Wrap from "@/components/Wrap";
import { profile } from "@/content/profile";

export default function Hero() {
  return (
    <Wrap className="pt-8 pb-8 sm:pt-14 sm:pb-11 lg:pt-16">
      <h1 className="font-wide text-[clamp(2.9rem,10.5vw,8rem)] leading-[0.92] font-extrabold tracking-[-0.035em] text-ink">
        {profile.name}
      </h1>
      {/* The photo sits beside the role, small, so the name stays the main element. */}
      <div className="mt-5 flex items-center gap-4">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={profile.photo}
          alt={`Photo of ${profile.name}`}
          width={80}
          height={80}
          className="size-16 flex-none rounded-full border-2 border-surface object-cover shadow-[0_0_0_1px_var(--color-rule)] sm:size-20"
        />
        <p className="font-semiwide text-[clamp(1.25rem,2.6vw,1.75rem)] font-semibold tracking-tight text-ink">
          {profile.role}
        </p>
      </div>
      <p className="mt-4 max-w-[66ch] text-lg">{profile.intro}</p>
      <p className="mt-2 text-muted">{profile.availability}</p>
      <div className="mt-7 flex flex-wrap gap-3">
        <a
          href={profile.cvPath}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-[3px] border-[1.5px] border-ink bg-ink px-5 py-3 font-semibold text-page no-underline hover:border-signal hover:bg-signal hover:text-white"
        >
          View CV
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
