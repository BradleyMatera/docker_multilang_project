interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  gradient: string;
}

export function SectionHeading({ eyebrow, title, description, gradient }: SectionHeadingProps) {
  return (
    <div className="text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-300">{eyebrow}</p>
      <h2 className={`mt-4 text-3xl font-bold text-white md:text-4xl bg-clip-text text-transparent bg-gradient-to-r ${gradient}`}>
        {title}
      </h2>
      {description ? (
        <p className="mt-5 text-base font-normal leading-relaxed text-slate-300 md:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
