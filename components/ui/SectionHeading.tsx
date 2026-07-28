import { Reveal } from "@/components/motion/Reveal";

export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <Reveal className="section-heading">
      <p className="section-eyebrow">{eyebrow}</p>
      <div className="section-heading-row">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </Reveal>
  );
}
