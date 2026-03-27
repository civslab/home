import { motion, useReducedMotion } from "framer-motion";

export default function Hero({ image }) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="px-6 pb-16 pt-32 lg:pb-20 lg:pt-36">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.08fr,0.92fr] lg:items-end">
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.05 }}
        >
          <p className="eyebrow">DOTS Research at Texas State</p>
          <h1 className="section-title mt-6 max-w-4xl font-heading text-[clamp(3.2rem,6vw,5.9rem)] font-extrabold leading-[0.98]">
            Welcome to
            <span className="block">Construction Informatics,</span>
            <span className="block text-[var(--primary)]">Visualization & Synthesis</span>
          </h1>
          <p className="body-copy mt-6 max-w-2xl text-lg md:text-[1.05rem]">
            CIVS Lab advances research in dispute resolution, productivity, training
            technology, and safety across construction and mining industries.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a href="#publications" className="cta-primary">
              View Publications
            </a>
            <a href="#contact" className="editorial-link">
              Contact the Lab
            </a>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            <article className="surface-card ghost-outline section-frame rounded-md p-4">
              <p className="eyebrow">Focus</p>
              <p className="mt-3 text-sm leading-relaxed text-[var(--on-surface-variant)]">
                Human performance, fatigue, and wearable sensing in high-risk work.
              </p>
            </article>
            <article className="surface-card ghost-outline section-frame rounded-md p-4">
              <p className="eyebrow">Training</p>
              <p className="mt-3 text-sm leading-relaxed text-[var(--on-surface-variant)]">
                Immersive learning with AR and VR for construction education and safety.
              </p>
            </article>
            <article className="surface-card ghost-outline section-frame rounded-md p-4">
              <p className="eyebrow">Systems</p>
              <p className="mt-3 text-sm leading-relaxed text-[var(--on-surface-variant)]">
                Data-driven decision making, dispute resolution, and smart technology adoption.
              </p>
            </article>
          </div>
        </motion.div>

        <motion.aside
          initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.15 }}
          className="relative lg:pl-8"
        >
          <div className="surface-card ghost-outline section-frame overflow-hidden rounded-xl p-4">
            <img
              src={image}
              alt=""
              aria-hidden="true"
              className="aspect-[4/5] w-full rounded-lg object-cover"
              fetchPriority="high"
            />
          </div>

          <div className="surface-panel ghost-outline section-frame mt-5 rounded-md p-5 lg:absolute lg:-bottom-6 lg:left-0 lg:mt-0 lg:max-w-[18rem]">
            <p className="eyebrow">Research Lens</p>
            <p className="mt-3 text-sm leading-relaxed text-[var(--on-surface-variant)]">
              Dispute resolution, optimal productivity, technology in training and
              education, and safety in mining and construction.
            </p>
          </div>
        </motion.aside>
      </div>
    </section>
  );
}
