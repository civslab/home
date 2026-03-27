export default function Footer() {
  return (
    <footer className="bg-[var(--surface-highest)] px-6 py-10 text-[var(--on-surface-variant)]">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-label text-xs font-semibold uppercase tracking-[0.18em] text-[var(--primary)]">
            CIVS Lab
          </p>
          <p className="mt-2 text-sm">
            Construction Informatics, Visualization & Synthesis at Texas State University
          </p>
        </div>

        <p className="text-sm">&copy; {new Date().getFullYear()} Dr. Krishna Kisi</p>
      </div>
    </footer>
  );
}
