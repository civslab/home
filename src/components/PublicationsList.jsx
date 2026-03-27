import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

const initialState = {
  members: [],
  publications: [],
};

export default function PublicationsList() {
  const prefersReducedMotion = useReducedMotion();
  const [publicationData, setPublicationData] = useState(initialState);
  const [activeMember, setActiveMember] = useState("all");
  const [isLoading, setIsLoading] = useState(true);
  const [loadError, setLoadError] = useState("");
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    async function loadPublications() {
      try {
        setIsLoading(true);
        setLoadError("");

        const response = await fetch(`${import.meta.env.BASE_URL}publications.json`, {
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error(`Failed to load publications (${response.status})`);
        }

        const data = await response.json();
        const publications = Array.isArray(data.publications)
          ? [...data.publications].sort((left, right) => {
              const yearDelta = Number(right.year || 0) - Number(left.year || 0);
              return yearDelta || String(left.title || "").localeCompare(String(right.title || ""));
            })
          : [];

        setPublicationData({
          members: Array.isArray(data.members) ? data.members : [],
          publications,
        });
      } catch (error) {
        if (error.name !== "AbortError") {
          setLoadError(error.message || "Could not load publications.");
        }
      } finally {
        if (!controller.signal.aborted) {
          setIsLoading(false);
        }
      }
    }

    loadPublications();
    return () => controller.abort();
  }, []);

  useEffect(() => {
    setShowAll(false);
  }, [activeMember]);

  const memberNameById = publicationData.members.reduce((accumulator, member) => {
    accumulator[member.id] = member.name;
    return accumulator;
  }, {});

  const filteredPublications =
    activeMember === "all"
      ? publicationData.publications
      : publicationData.publications.filter(
          (publication) =>
            Array.isArray(publication.members) && publication.members.includes(activeMember),
        );

  const visiblePublications =
    activeMember === "all" && !showAll
      ? filteredPublications.slice(0, 6)
      : filteredPublications;

  return (
    <section id="publications" className="bg-[var(--surface)] px-6 py-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 xl:grid-cols-[0.72fr,1.28fr]">
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4 }}
          >
            <p className="eyebrow">Scholarship</p>
            <h2 className="section-title mt-5 text-4xl font-extrabold md:text-5xl">
              Publications
            </h2>
            <p className="body-copy mt-6 max-w-xl">
              APA-style entries generated from the lab bibliography and filterable by team
              member.
            </p>
          </motion.div>

          <div>
            <div className="mb-6 flex flex-wrap gap-2">
              <button
                type="button"
                className={`metadata-chip transition-colors ${
                  activeMember === "all"
                    ? "bg-[#d9e2ff] text-[var(--primary)]"
                    : "hover:bg-[#d9e2ff]"
                }`}
                aria-pressed={activeMember === "all"}
                onClick={() => setActiveMember("all")}
              >
                All Members
              </button>

              {publicationData.members.map((member) => (
                <button
                  key={member.id}
                  type="button"
                  className={`metadata-chip transition-colors ${
                    activeMember === member.id
                      ? "bg-[#d9e2ff] text-[var(--primary)]"
                      : "hover:bg-[#d9e2ff]"
                  }`}
                  aria-pressed={activeMember === member.id}
                  onClick={() => setActiveMember(member.id)}
                >
                  {member.name}
                </button>
              ))}
            </div>

            <div className="surface-card ghost-outline section-frame rounded-xl p-6 md:p-8">
              {isLoading && (
                <p className="text-center text-sm text-[var(--on-surface-variant)]">
                  Loading publications...
                </p>
              )}

              {!isLoading && loadError && (
                <div className="rounded-md bg-[#ffdad6] p-4 text-sm text-[#93000a]">
                  {loadError}
                </div>
              )}

              {!isLoading && !loadError && (
                <>
                  <p className="mb-6 text-sm text-[var(--on-surface-variant)]">
                    Showing {visiblePublications.length} of {filteredPublications.length}{" "}
                    publications
                  </p>

                  {filteredPublications.length === 0 ? (
                    <p className="surface-panel rounded-md p-4 text-sm text-[var(--on-surface-variant)]">
                      No publications are currently tagged to that team member.
                    </p>
                  ) : (
                    <>
                      <ul className="space-y-5">
                        {visiblePublications.map((publication, index) => {
                          const link =
                            publication.url ||
                            (publication.doi ? `https://doi.org/${publication.doi}` : "");

                          return (
                            <li
                              key={publication.id || index}
                              className="surface-panel rounded-lg p-5"
                            >
                              <p className="leading-relaxed text-[var(--on-surface)]">
                                {publication.citationApa}
                              </p>

                              <div className="mt-4 flex flex-wrap items-center gap-2">
                                {publication.venue && (
                                  <span className="metadata-chip">{publication.venue}</span>
                                )}
                                {publication.year && (
                                  <span className="metadata-chip">{publication.year}</span>
                                )}
                                {publication.doi && <span className="metadata-chip">DOI</span>}
                              </div>

                              <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-[var(--on-surface-variant)]">
                                {link && (
                                  <a
                                    href={link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="editorial-link"
                                  >
                                    Open Paper
                                  </a>
                                )}

                                {publication.doi && <span>{publication.doi}</span>}
                              </div>

                              {Array.isArray(publication.members) &&
                                publication.members.length > 0 && (
                                  <p className="mt-3 text-xs text-[var(--on-surface-variant)]">
                                    Team authors:{" "}
                                    {publication.members
                                      .map((memberId) => memberNameById[memberId] || memberId)
                                      .join(", ")}
                                  </p>
                                )}
                            </li>
                          );
                        })}
                      </ul>

                      {activeMember === "all" && filteredPublications.length > 6 && (
                        <div className="mt-6">
                          <button
                            type="button"
                            onClick={() => setShowAll((value) => !value)}
                            className="cta-secondary"
                          >
                            {showAll ? "Show Fewer Publications" : "Show All Publications"}
                          </button>
                        </div>
                      )}
                    </>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
