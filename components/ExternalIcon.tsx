// Marks links that open another site. The parent link needs the `group/link` class
// for the hover nudge.
export default function ExternalIcon() {
  return (
    <svg
      viewBox="0 0 16 16"
      aria-hidden="true"
      className="ml-1 inline-block size-[0.8em] align-[-0.05em] text-signal transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 motion-reduce:transition-none"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 3h7v7M13 3 4 12" />
    </svg>
  );
}
