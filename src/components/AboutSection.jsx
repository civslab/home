import { motion, useReducedMotion } from "framer-motion";

function PillarCard({ pillar }) {
  return (
    <article className="surface-card ghost-outline section-frame rounded-md p-5">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-[var(--surface-high)] font-heading text-lg font-extrabold text-[var(--primary)]">
          {pillar.code}
        </div>
        <p className="font-heading text-lg font-bold tracking-[-0.02em] text-[var(--on-surface)]">
          {pillar.title}
        </p>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-[var(--on-surface-variant)]">
        {pillar.description}
      </p>
    </article>
  );
}

export default function AboutSection({ about }) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="about" className="bg-[var(--surface-low)] px-6 py-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 xl:grid-cols-[1.05fr,0.95fr]">
          <motion.article
            initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4 }}
            className="surface-card ghost-outline section-frame rounded-xl p-6 md:p-8"
          >
            <p className="eyebrow">{about.eyebrow}</p>
            <h2 className="section-title mt-5 text-4xl font-extrabold md:text-5xl">
              {about.title}
            </h2>
            <p className="body-copy mt-5">{about.intro}</p>
            <p className="body-copy mt-4">{about.biography}</p>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {about.credentials.map((credential) => (
                <div key={credential.label} className="surface-panel rounded-md p-4">
                  <p className="eyebrow">{credential.label}</p>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--on-surface-variant)]">
                    {credential.value}
                  </p>
                </div>
              ))}
            </div>
          </motion.article>

          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: 0.05 }}
            className="grid gap-5"
          >
            <div className="surface-card ghost-outline section-frame overflow-hidden rounded-xl p-4">
              <img
                src={about.image}
                alt={about.imageAlt}
                className="aspect-[4/3.75] w-full rounded-lg object-cover object-top"
                loading="lazy"
                decoding="async"
              />
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {about.pillars.map((pillar, index) => (
                <motion.div
                  key={pillar.code}
                  initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.35, delay: prefersReducedMotion ? 0 : index * 0.05 }}
                >
                  <PillarCard pillar={pillar} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
