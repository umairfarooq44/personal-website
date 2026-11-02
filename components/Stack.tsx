export default function Stack({ items }: { items: string[] }) {
  return (
    <p className="mt-3 text-[0.92rem] text-signal">
      <span className="sr-only">Technologies: </span>
      {items.join(", ")}
    </p>
  );
}
