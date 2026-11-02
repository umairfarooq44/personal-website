import Wrap from "@/components/Wrap";
import { profile, sections } from "@/content/profile";

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-rule bg-page/90 backdrop-blur-md">
      <Wrap className="flex items-baseline justify-end gap-4 py-5 sm:justify-between">
        <a href="/" className="font-semiwide hidden font-bold tracking-tight whitespace-nowrap text-ink no-underline sm:inline">
          {profile.name}
        </a>
        <nav aria-label="Sections">
          <ul className="flex gap-4 sm:gap-7">
            {sections.map(({ id, title }) => (
              <li key={id} className={["about", "skills", "recommendations"].includes(id) ? "hidden md:block" : undefined}>
                <a href={`#${id}`} className="text-ink no-underline hover:text-signal">
                  {title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </Wrap>
    </header>
  );
}
