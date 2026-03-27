import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

function initials(name) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() || "")
    .join("");
}

function MemberCard({ member }) {
  const [imageUnavailable, setImageUnavailable] = useState(false);
  const showImage = Boolean(member.image) && !imageUnavailable;

  return (
    <article className="surface-panel rounded-md p-4">
      {showImage ? (
        <img
          src={member.image}
          alt={member.imageAlt || `${member.name} portrait`}
          className={`aspect-[4/4.2] w-full rounded-md ${
            member.imageFit === "contain" ? "object-contain" : "object-cover"
          }`}
          style={{ objectPosition: member.imagePosition || "center" }}
          loading="lazy"
          decoding="async"
          onError={() => setImageUnavailable(true)}
        />
      ) : (
        <div className="flex aspect-[4/4.2] items-center justify-center rounded-md bg-[var(--surface-high)]">
          <div className="flex h-14 w-14 items-center justify-center rounded-md bg-[var(--surface-lowest)] font-heading text-xl font-bold text-[var(--primary)]">
            {initials(member.name)}
          </div>
        </div>
      )}

      <p className="mt-4 font-heading text-lg font-bold tracking-[-0.02em] text-[var(--on-surface)]">
        {member.name}
      </p>
      <p className="mt-1 text-sm text-[var(--secondary)]">{member.role}</p>
      {member.note && (
        <p className="mt-3 text-sm leading-relaxed text-[var(--on-surface-variant)]">
          {member.note}
        </p>
      )}
    </article>
  );
}

function TeamGroup({ group }) {
  const [isOpen, setIsOpen] = useState(group.defaultOpen ?? !group.collapsible);
  const gridClass =
    group.layout === "wide" ? "sm:grid-cols-2 xl:grid-cols-3" : "sm:grid-cols-2";

  return (
    <article className="surface-card ghost-outline section-frame rounded-xl p-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="eyebrow">
            {group.level} {group.title}
          </p>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[var(--on-surface-variant)]">
            {group.description}
          </p>
        </div>

        {group.collapsible && (
          <button
            type="button"
            onClick={() => setIsOpen((open) => !open)}
            className="metadata-chip self-start"
            aria-expanded={isOpen}
          >
            {isOpen ? "Hide" : "Show"} Alumni
          </button>
        )}
      </div>

      {(!group.collapsible || isOpen) && (
        <div className={`mt-6 grid gap-4 ${gridClass}`}>
          {group.members.map((member) => (
            <MemberCard key={`${group.title}-${member.name}`} member={member} />
          ))}
        </div>
      )}
    </article>
  );
}

export default function TeamSection({ team }) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="team" className="bg-[var(--surface-low)] px-6 py-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 xl:grid-cols-[0.72fr,1.28fr]">
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4 }}
          >
            <p className="eyebrow">Research Team</p>
            <h2 className="section-title mt-5 text-4xl font-extrabold md:text-5xl">
              Clear Team Hierarchy
            </h2>
            <p className="body-copy mt-6 max-w-xl">
              CIVS Lab is structured with a faculty lead, doctoral scholars, graduate
              researchers, student support, and an alumni network.
            </p>
          </motion.div>

          <motion.article
            initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: 0.05 }}
            className="surface-card ghost-outline section-frame rounded-xl p-5"
          >
            <p className="eyebrow">
              {team.lead.level} {team.lead.title}
            </p>
            <div className="mt-5 grid gap-5 sm:grid-cols-[260px,1fr] sm:items-center">
              <img
                src={team.lead.image}
                alt={team.lead.imageAlt}
                className={`aspect-[16/12] w-full rounded-lg ${
                  team.lead.imageFit === "contain" ? "object-contain" : "object-cover"
                }`}
                style={{ objectPosition: team.lead.imagePosition || "center top" }}
                loading="lazy"
                decoding="async"
              />

              <div>
                <h3 className="section-title text-3xl font-extrabold">{team.lead.name}</h3>
                <p className="mt-2 text-base font-medium text-[var(--secondary)]">
                  {team.lead.role}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-[var(--on-surface-variant)]">
                  {team.lead.description}
                </p>
              </div>
            </div>
          </motion.article>
        </div>

        <div className="mt-8 grid gap-5 xl:grid-cols-2">
          {team.groups.map((group, index) => (
            <motion.div
              key={group.title}
              initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.35, delay: prefersReducedMotion ? 0 : index * 0.04 }}
              className={group.layout === "wide" ? "xl:col-span-2" : ""}
            >
              <TeamGroup group={group} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
