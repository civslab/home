import { motion, useReducedMotion } from "framer-motion";

function CourseColumn({ title, courses }) {
  return (
    <article className="surface-card ghost-outline section-frame rounded-xl p-6">
      <p className="eyebrow">{title}</p>
      <ul className="mt-5 space-y-4">
        {courses.map((course) => (
          <li key={course.code} className="surface-panel rounded-md p-4">
            <div className="flex items-start gap-4">
              <span className="metadata-chip shrink-0">{course.code}</span>
              <p className="text-sm leading-relaxed text-[var(--on-surface)]">{course.name}</p>
            </div>
          </li>
        ))}
      </ul>
    </article>
  );
}

export default function TeachingSection({ courses }) {
  const prefersReducedMotion = useReducedMotion();
  const graduateCourses = courses.filter((course) => course.type === "Graduate");
  const undergraduateCourses = courses.filter((course) => course.type === "Undergraduate");

  return (
    <section id="teaching" className="bg-[var(--surface-low)] px-6 py-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 xl:grid-cols-[0.72fr,1.28fr]">
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.4 }}
          >
            <p className="eyebrow">Teaching</p>
            <h2 className="section-title mt-5 text-4xl font-extrabold md:text-5xl">
              Courses & Mentorship
            </h2>
            <p className="body-copy mt-6 max-w-xl">
              Graduate and undergraduate instruction spanning project management,
              dispute resolution, BIM, estimating, and capstone work.
            </p>
          </motion.div>

          <div className="grid gap-5 md:grid-cols-2">
            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.35 }}
            >
              <CourseColumn title="Graduate Courses" courses={graduateCourses} />
            </motion.div>

            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.35, delay: prefersReducedMotion ? 0 : 0.05 }}
            >
              <CourseColumn title="Undergraduate Courses" courses={undergraduateCourses} />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
