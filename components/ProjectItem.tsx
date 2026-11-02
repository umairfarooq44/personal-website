import ExternalIcon from "@/components/ExternalIcon";
import type { Project } from "@/content/profile";

export default function ProjectItem({ project }: { project: Project }) {
  const { image } = project;

  return (
    <li className="grid gap-x-8 gap-y-2 border-t border-rule pt-5 sm:grid-cols-[11rem_minmax(0,1fr)] lg:grid-cols-[11rem_minmax(0,1fr)_11rem]">
      <div>
        <h3 className="font-semiwide leading-snug font-semibold tracking-tight text-ink">
          {project.href ? (
            <a
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group/link text-ink decoration-signal hover:text-signal"
            >
              {project.name}
              <ExternalIcon />
              <span className="sr-only"> (opens the product site in a new tab)</span>
            </a>
          ) : (
            project.name
          )}
        </h3>
        <p className="mt-0.5 text-sm text-muted">{project.context}</p>
      </div>

      <div className="max-w-[64ch]">
        <p>{project.summary}</p>
        <p className="mt-1.5 text-[0.92rem] text-signal">
          <span className="sr-only">Technologies: </span>
          {project.stack.join(", ")}
        </p>
      </div>

      {image && (
        <a
          href={image.src}
          target="_blank"
          rel="noopener"
          className="block w-40 sm:col-start-2 lg:col-start-auto lg:w-full"
          aria-label={`${project.name} screenshot, opens full size`}
        >
          <img
            src={image.src}
            alt={image.alt}
            loading="lazy"
            decoding="async"
            className="aspect-video w-full rounded-[3px] border border-rule bg-surface object-cover object-left-top hover:border-ink"
          />
        </a>
      )}
    </li>
  );
}
