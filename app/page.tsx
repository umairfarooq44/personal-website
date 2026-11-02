import Contact from "@/components/Contact";
import ExternalIcon from "@/components/ExternalIcon";
import ExperienceItem from "@/components/ExperienceItem";
import Hero from "@/components/Hero";
import ProjectItem from "@/components/ProjectItem";
import Recommendation from "@/components/Recommendation";
import Section from "@/components/Section";
import SiteHeader from "@/components/SiteHeader";
import Skills from "@/components/Skills";
import Wrap from "@/components/Wrap";
import TelemetryDemo from "@/components/telemetry/TelemetryDemo";
import { experience, profile, testimonials, work } from "@/content/profile";

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded focus:bg-ink focus:px-4 focus:py-2 focus:text-page"
      >
        Skip to content
      </a>

      <SiteHeader />

      <main id="main">
        <Hero />

        <Wrap className="pb-14 sm:pb-20">
          <figure>
            <TelemetryDemo />
            <figcaption className="mt-3.5 max-w-[64ch] text-[0.95rem] text-muted">
              A sample lap, generated in your browser and replayed with uPlot. Drag across the chart to scrub. At Yaak I
              built viewers like this for more than 3,830 hours of real driving data, with video and Mapbox maps kept in
              sync.
            </figcaption>
          </figure>
        </Wrap>

        <Section id="about" title="About">
          <div className="max-w-[66ch] space-y-4 text-lg">
            {profile.about.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </Section>

        <Section id="skills" title="Skills">
          <Skills />
        </Section>

        <Section id="experience" title="Experience">
          <ol className="space-y-9 sm:space-y-10">
            {experience.map((job) => (
              <ExperienceItem key={job.company} job={job} />
            ))}
          </ol>
        </Section>

        <Section id="projects" title="Projects">
          <ul className="space-y-6">
            {work.map((project) => (
              <ProjectItem key={project.name} project={project} />
            ))}
          </ul>
        </Section>

        <Section id="recommendations" title="Recommendations">
          <div className="grid gap-x-14 gap-y-10 md:grid-cols-2">
            {testimonials.map((item) => (
              <Recommendation key={item.name} item={item} />
            ))}
          </div>
          <p className="mt-10">
            <a href={profile.recommendationsUrl} target="_blank" rel="noopener noreferrer" className="group/link">
              Read these and more recommendations on LinkedIn
              <ExternalIcon />
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </p>
        </Section>

      </main>

      <Contact />
    </>
  );
}
