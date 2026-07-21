import { SectionHeader } from "./Services";

const STACK = [
  { cat: "Frontend", items: ["React", "Next.js", "Vue", "Angular", "TypeScript", "Tailwind"] },
  { cat: "Backend", items: ["Node.js", "Python", "Laravel", "Django", ".NET", "Java"] },
  { cat: "Mobile", items: ["Flutter", "React Native", "Swift", "Kotlin"] },
  { cat: "Database", items: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Firebase"] },
  { cat: "Cloud & DevOps", items: ["AWS", "Azure", "GCP", "Docker", "Kubernetes", "CI/CD"] },
  { cat: "AI & Data", items: ["OpenAI", "PyTorch", "TensorFlow", "LangChain", "Vector DBs"] },
];

export function TechStack() {
  return (
    <section id="stack" className="relative py-32">
      <div className="pointer-events-none absolute inset-0 -z-10 grid-bg opacity-20" />

      <div className="mx-auto max-w-[1280px] px-6">
        <SectionHeader
          label="TECHNOLOGY STACK"
          title={<>The tools we use to build <span className="text-gradient-brand">world-class systems</span></>}
          desc="A modern, battle-tested stack chosen for performance, security, and long-term maintainability."
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {STACK.map((s) => (
            <div key={s.cat} className="group rounded-3xl border border-white/[0.06] bg-white/[0.02] p-6 transition-all hover:border-[#22D3EE]/25 hover:bg-white/[0.04]">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-semibold uppercase tracking-[0.15em] text-[#4CC9F0]">{s.cat}</h4>
                <span className="h-1.5 w-1.5 rounded-full bg-[#22D3EE] shadow-[0_0_12px_rgba(34,211,238,0.8)]" />
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {s.items.map((it) => (
                  <span
                    key={it}
                    className="rounded-lg border border-white/10 bg-gradient-to-b from-white/[0.05] to-white/[0.02] px-3 py-1.5 text-[13px] font-medium text-white/90 transition-all hover:border-[#22D3EE]/40 hover:from-[#22D3EE]/10 hover:text-white"
                  >
                    {it}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="mt-14 flex flex-wrap justify-center gap-2">
          {["Modern Development", "Secure Coding", "Performance Optimized", "Cloud Ready", "Responsive", "Accessible (WCAG 2.2)", "SEO Optimized"].map((c) => (
            <span key={c} className="rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 text-[12px] text-muted-foreground">
              ✓ {c}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
