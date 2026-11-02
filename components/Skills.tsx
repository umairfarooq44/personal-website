import { skills } from "@/content/profile";

export default function Skills() {
  return (
    <dl className="space-y-3">
      {skills.map((skill) => (
        <div key={skill.group} className="grid gap-x-8 sm:grid-cols-[11rem_minmax(0,1fr)]">
          <dt className="text-muted">{skill.group}</dt>
          <dd className="max-w-[64ch]">{skill.items}</dd>
        </div>
      ))}
    </dl>
  );
}
