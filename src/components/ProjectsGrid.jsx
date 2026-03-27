import { motion, useReducedMotion } from "framer-motion";

export default function ProjectsGrid({ projects }) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="projects" className="bg-[var(--surface-low)] px-6 py-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 xl:grid-cols-[0.7fr,1.3fr]">
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45 }}
          >
            <p className="eyebrow">Current Work</p>
            <h2 className="section-title mt-5 text-4xl font-extrabold md:text-5xl">
              Research Projects
            </h2>
            <p className="body-copy mt-6 max-w-xl">
              Exploring occupational safety, cognitive performance, immersive learning,
              and technology adoption across construction contexts.
            </p>
          </motion.div>

          <div className="grid gap-4 lg:grid-cols-2">
            {projects.map((project, index) => (
              <motion.article
                key={project.title}
                initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.35, delay: prefersReducedMotion ? 0 : index * 0.03 }}
                className="surface-card ghost-outline section-frame grid gap-4 rounded-xl p-4 lg:grid-cols-[1.02fr,0.98fr]"
              >
                <div
                  className={`overflow-hidden rounded-lg ${
                    project.imageFit === "contain" ? "bg-[var(--surface-low)] p-3" : ""
                  }`}
                >
                  <img
                    src={project.image}
                    alt={project.imageAlt}
                    className={`h-full w-full ${
                      project.imageFit === "contain" ? "object-contain" : "object-cover"
                    } min-h-[230px]`}
                    style={{ objectPosition: project.imagePosition || "center" }}
                    loading="lazy"
                    decoding="async"
                  />
                </div>

                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="metadata-chip">{project.tag}</span>
                    <span className="font-label text-[0.7rem] uppercase tracking-[0.14em] text-[var(--secondary)]">
                      {project.sponsor}
                    </span>
                  </div>
                  <h3 className="section-title mt-4 text-2xl font-extrabold leading-snug">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--on-surface-variant)]">
                    {project.description}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
