import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import ProjectsGrid from "./components/ProjectsGrid";
import PublicationsList from "./components/PublicationsList";
import ScrollingSection from "./components/ScrollingSection";
import TeamSection from "./components/TeamSection";
import TeachingSection from "./components/TeachingSection";
import {
  aboutContent,
  courses,
  navLinks,
  projects,
  researchInterests,
  researchTeam,
  siteAssets,
} from "./data/siteContent";

export default function App() {
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const progressScaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 28,
    mass: 0.2,
  });

  return (
    <div className="min-h-screen bg-[var(--surface)] text-[var(--on-surface)]">
      <motion.div className="progress-bar origin-left" style={{ scaleX: progressScaleX }} />

      <a href="#main-content" className="skip-link">
        Skip to content
      </a>

      <Navbar links={navLinks} />

      <motion.main
        id="main-content"
        initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <Hero collageImages={siteAssets.heroCollage} />
        <AboutSection about={aboutContent} />
        <ScrollingSection
          id="research"
          eyebrow="Research"
          titleLines={["Core", "Interests"]}
          subtitle="The lab's work spans six focus areas in safety, human performance, and technology-enabled learning."
          cards={researchInterests}
        />
        <ProjectsGrid projects={projects} />
        <TeamSection team={researchTeam} />
        <PublicationsList />
        <TeachingSection courses={courses} />
        <ContactSection />
      </motion.main>

      <Footer />
    </div>
  );
}
