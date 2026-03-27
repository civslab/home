import { motion, useReducedMotion } from "framer-motion";

function ResearchCard({ card, featured = false }) {
  return (
    <article
      className={`section-frame overflow-hidden rounded-xl ${
        featured ? "surface-card" : "surface-panel"
      } ghost-outline`}
    >
      <div className={`${featured ? "grid lg:grid-cols-[1.05fr,0.95fr]" : ""}`}>
        <div className={`overflow-hidden ${featured ? "order-2 lg:order-1" : ""}`}>
          <img
            src={card.image}
            alt={card.imageAlt}
            className={`w-full object-cover transition-transform duration-700 hover:scale-[1.02] ${
              featured ? "h-full min-h-[260px]" : "aspect-[16/9]"
            }`}
            loading="lazy"
            decoding="async"
          />
        </div>

        <div className={`p-6 ${featured ? "order-1 lg:order-2 lg:p-8" : ""}`}>
          <p className="eyebrow">{card.badge}</p>
          <h3
            className={`section-title mt-4 font-heading font-extrabold ${
              featured ? "text-3xl leading-tight" : "text-xl leading-snug"
            }`}
          >
            {card.title}
          </h3>
          <p className="mt-4 text-sm leading-relaxed text-[var(--on-surface-variant)]">
            {card.description}
          </p>
        </div>
      </div>
    </article>
  );
}

export default function ScrollingSection({ id, eyebrow, titleLines, subtitle, cards }) {
  const prefersReducedMotion = useReducedMotion();
  const [featured, ...rest] = cards;

  return (
    <section id={id} className="bg-[var(--surface)] px-6 py-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 xl:grid-cols-[0.72fr,1.28fr]">
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4 }}
            className="xl:pr-10"
          >
            <p className="eyebrow">{eyebrow}</p>
            <h2 className="section-title mt-5 text-4xl font-extrabold leading-none md:text-5xl">
              {titleLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h2>
            <p className="body-copy mt-6 max-w-xl">{subtitle}</p>
          </motion.div>

          <div className="grid gap-5 md:grid-cols-2">
            {featured && (
              <motion.div
                initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.4 }}
                className="md:col-span-2"
              >
                <ResearchCard card={featured} featured />
              </motion.div>
            )}

            {rest.map((card, index) => (
              <motion.div
                key={card.title}
                initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.35, delay: prefersReducedMotion ? 0 : index * 0.04 }}
              >
                <ResearchCard card={card} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
