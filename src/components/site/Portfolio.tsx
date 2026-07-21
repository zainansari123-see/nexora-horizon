import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { SectionHeader } from "./Services";

type Project = {
  title: string;
  category: string;
  desc: string;
  tags: string[];
  gradient: string;
};

const PROJECTS: Project[] = [
  { title: "Helix AI Analytics", category: "AI Solutions", desc: "Predictive analytics platform for enterprise operations.", tags: ["Next.js", "Python", "AWS"], gradient: "from-[#0A84FF] to-[#22D3EE]" },
  { title: "Aurora Banking", category: "Enterprise Software", desc: "Digital banking suite serving 2M+ customers.", tags: ["React", "Node.js", "PostgreSQL"], gradient: "from-[#4CC9F0] to-[#0A84FF]" },
  { title: "Nimbus Cloud OS", category: "Cloud Platforms", desc: "Multi-tenant cloud console for infrastructure teams.", tags: ["TypeScript", "K8s", "GCP"], gradient: "from-[#22D3EE] to-[#4CC9F0]" },
  { title: "Meridian Health", category: "Mobile Apps", desc: "HIPAA-compliant patient care app for clinicians.", tags: ["Flutter", "Firebase"], gradient: "from-[#0A84FF] to-[#4CC9F0]" },
  { title: "Voltmart Commerce", category: "E-Commerce", desc: "Headless commerce for a global retailer.", tags: ["Next.js", "Stripe"], gradient: "from-[#22D3EE] to-[#0A84FF]" },
  { title: "Orbital Ops", category: "Dashboard Systems", desc: "Real-time operations dashboard with 50k events/s.", tags: ["React", "Rust", "Redis"], gradient: "from-[#4CC9F0] to-[#22D3EE]" },
];

const FILTERS = ["All", "AI Solutions", "Enterprise Software", "Cloud Platforms", "Mobile Apps", "E-Commerce", "Dashboard Systems"];

export function Portfolio() {
  const [active, setActive] = useState("All");
  const visible = active === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === active);

  return (
    <section id="portfolio" className="relative py-32">
      <div className="pointer-events-none absolute left-1/2 top-40 -z-10 h-[400px] w-[800px] -translate-x-1/2 rounded-full bg-[#0A84FF]/10 blur-[140px]" />

      <div className="mx-auto max-w-[1280px] px-6">
        <SectionHeader
          label="OUR WORK"
          title={<>Transforming ideas into <span className="text-gradient-brand">powerful digital experiences</span></>}
          desc="Every project is crafted with innovation, precision, and business strategy — built to solve real problems while delivering exceptional experiences."
        />

        <div className="mt-12 flex flex-wrap justify-center gap-2">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`rounded-full border px-4 py-2 text-[13px] font-medium transition-all ${
                active === f
                  ? "border-[#22D3EE]/50 bg-gradient-to-r from-[#0A84FF]/20 to-[#22D3EE]/20 text-white"
                  : "border-white/10 text-muted-foreground hover:text-white hover:border-white/20"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <motion.div layout className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {visible.map((p, i) => (
              <motion.article
                layout
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: (i % 3) * 0.06 }}
                className="group relative overflow-hidden rounded-3xl border border-white/[0.06] bg-white/[0.02] transition-all duration-500 hover:-translate-y-1 hover:border-[#22D3EE]/30"
              >
                <div className={`relative aspect-[16/10] overflow-hidden bg-gradient-to-br ${p.gradient}`}>
                  <div className="absolute inset-0 grid-bg opacity-30 mix-blend-overlay" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07111F] via-transparent to-transparent" />
                  <div className="absolute left-4 top-4">
                    <span className="rounded-full bg-black/40 backdrop-blur px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-white/90">
                      {p.category}
                    </span>
                  </div>
                  {/* Abstract shape */}
                  <div className="absolute right-4 bottom-4 grid grid-cols-3 gap-1 opacity-70">
                    {Array.from({ length: 9 }).map((_, k) => (
                      <div key={k} className="h-3 w-3 rounded-sm bg-white/40" />
                    ))}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold transition-colors group-hover:text-[#4CC9F0]">{p.title}</h3>
                  <p className="mt-2 text-[13.5px] leading-relaxed text-muted-foreground">{p.desc}</p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {p.tags.map((t) => (
                      <span key={t} className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-[11px] text-muted-foreground">
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="mt-5 inline-flex items-center gap-1.5 text-[13px] font-medium text-[#22D3EE]">
                    View case study
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className="transition-transform group-hover:translate-x-1"><path d="M5 12h14M13 5l7 7-7 7" /></svg>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Industries */}
        <div className="mt-24">
          <SectionHeader
            label="INDUSTRIES"
            title={<>Trusted across <span className="text-gradient-brand">every vertical</span></>}
          />
          <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {["Healthcare", "Finance", "Education", "Retail", "Manufacturing", "Real Estate", "Logistics", "Travel", "Hospitality", "Government", "Startups", "Energy"].map((ind) => (
              <div
                key={ind}
                className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-4 text-center text-[13.5px] font-medium text-muted-foreground transition-all hover:border-[#22D3EE]/25 hover:text-white hover:-translate-y-0.5"
              >
                {ind}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
