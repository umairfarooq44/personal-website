import Wrap from "@/components/Wrap";
import { profile } from "@/content/profile";

export default function Contact() {
  const year = new Date().getFullYear();

  return (
    <footer id="contact" aria-labelledby="contact-title" className="scroll-mt-20 border-t border-rule">
      <Wrap className="pt-12 pb-10 sm:pt-20">
        <h2
          id="contact-title"
          className="font-semiwide mb-6 text-[clamp(1.5rem,3vw,2.1rem)] leading-tight font-bold tracking-tight text-ink"
        >
          Contact
        </h2>
        <p className="max-w-[64ch]">
          I’m looking for a senior frontend or full-stack role. The fastest way to reach me is email.
        </p>
        <a
          href={`mailto:${profile.email}`}
          className="font-semiwide mt-3 inline-block text-[clamp(1.4rem,4.6vw,2.75rem)] leading-tight font-bold tracking-[-0.025em] break-words"
        >
          {profile.email}
        </a>
        <ul className="mt-5 flex flex-wrap gap-x-6 gap-y-2">
          {profile.links.map((link) => (
            <li key={link.label}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
          <li>
            <a href={profile.cvPath} target="_blank" rel="noopener noreferrer">
              CV (PDF)
            </a>
          </li>
        </ul>
        <p className="mt-12 text-sm text-muted">© {year} Umair Farooq. Built with Next.js, Tailwind and uPlot.</p>
      </Wrap>
    </footer>
  );
}
