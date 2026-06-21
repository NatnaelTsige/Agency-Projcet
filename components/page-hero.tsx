import { Reveal } from "./reveal";

export function PageHero({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
}) {
  return (
    <section className="relative overflow-hidden pt-32 sm:pt-40">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-primary-soft blur-3xl" />
        <div className="absolute right-0 top-24 h-64 w-64 rounded-full bg-accent-soft blur-3xl" />
      </div>
      <div className="container-x pb-12 text-center sm:pb-16">
        <Reveal>
          <span className="eyebrow">{eyebrow}</span>
          <h1 className="mx-auto mt-5 max-w-3xl font-display text-4xl font-semibold leading-[1.08] text-ink sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-muted sm:text-xl">{subtitle}</p>
        </Reveal>
      </div>
    </section>
  );
}
