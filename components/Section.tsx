import Wrap from "@/components/Wrap";

type Props = { id: string; title: string; children: React.ReactNode };

export default function Section({ id, title, children }: Props) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="scroll-mt-20 border-t border-rule">
      <Wrap className="py-12 sm:py-16 lg:py-20">
        <h2
          id={`${id}-title`}
          className="font-semiwide mb-8 text-[clamp(1.5rem,3vw,2.1rem)] leading-tight font-bold tracking-tight text-ink sm:mb-10"
        >
          {title}
        </h2>
        {children}
      </Wrap>
    </section>
  );
}
