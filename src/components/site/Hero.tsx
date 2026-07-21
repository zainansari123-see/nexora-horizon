import { motion } from "motion/react";

const BADGES = [
  { label: "Artificial Intelligence", top: "8%", left: "-6%" },
  { label: "Cloud Computing", top: "20%", right: "-8%" },
  { label: "Web Development", bottom: "24%", left: "-10%" },
  { label: "Automation", bottom: "6%", right: "-4%" },
];

const STATS = [
  { value: "500+", label: "Projects Delivered" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "24/7", label: "Global Support" },
  { value: "10+", label: "Years Experience" },
];

export function Hero() {
  const words = "Engineering intelligent digital experiences for the next generation".split(" ");

  return (
    <section id="home" className="relative min-h-screen overflow-hidden pt-32 pb-20">
      {/* Ambient background */}
      <div className="absolute inset-0 -z-10 grid-bg opacity-40" />
      <div
        className="absolute inset-0 -z-10"
        style={{ background: "var(--gradient-hero)" }}
      />
      <div className="absolute inset-x-0 top-0 -z-10 h-[600px] bg-[radial-gradient(ellipse_at_center,rgba(10,132,255,0.15),transparent_70%)]" />

      {/* Floating orbs */}
      <div className="pointer-events-none absolute -top-20 left-1/4 h-96 w-96 rounded-full bg-[#0A84FF]/20 blur-[120px] animate-float" />
      <div className="pointer-events-none absolute top-1/2 right-0 h-[420px] w-[420px] rounded-full bg-[#22D3EE]/15 blur-[140px] animate-float" style={{ animationDelay: "2s" }} />

      <div className="mx-auto max-w-[1280px] px-6">
        <div className="grid gap-16 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full glass px-3 py-1.5 text-[12px] font-medium text-muted-foreground"
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-[#22D3EE] opacity-75 animate-pulse-ring" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#22D3EE]" />
              </span>
              Innovate • Integrate • Elevate
            </motion.div>

            <h1 className="mt-6 text-[42px] leading-[1.05] font-semibold tracking-tight sm:text-[56px] lg:text-[64px]">
              {words.map((w, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ duration: 0.6, delay: 0.15 + i * 0.06 }}
                  className={`inline-block mr-[0.25em] ${
                    ["intelligent", "digital", "experiences"].includes(w.toLowerCase())
                      ? "text-gradient-brand"
                      : "text-gradient"
                  }`}
                >
                  {w}
                </motion.span>
              ))}
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="mt-7 max-w-xl text-[17px] leading-relaxed text-muted-foreground"
            >
              Nexora Technologies partners with ambitious enterprises to build AI, cloud, and
              automation platforms that scale. From strategy to launch — engineered with
              precision, designed with intent.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.05 }}
              className="mt-9 flex flex-wrap items-center gap-3"
            >
              <a
                href="#contact"
                className="group relative inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#0A84FF] to-[#22D3EE] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_20px_60px_-20px_rgba(34,211,238,0.7)] transition-all hover:shadow-[0_25px_70px_-15px_rgba(34,211,238,0.9)] hover:scale-[1.02]"
              >
                Start Your Project
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1">
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </a>
              <a
                href="#services"
                className="group inline-flex items-center gap-2 rounded-full glass px-6 py-3.5 text-sm font-semibold text-white transition-all hover:border-[#22D3EE]/40 hover:bg-white/[0.06]"
              >
                Explore Our Services
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#22D3EE] transition-transform group-hover:translate-x-1">
                  <path d="M7 17L17 7M9 7h8v8" />
                </svg>
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.2 }}
              className="mt-14 grid grid-cols-2 gap-6 border-t border-white/5 pt-8 sm:grid-cols-4"
            >
              {STATS.map((s) => (
                <div key={s.label}>
                  <div className="text-2xl font-semibold text-gradient-brand sm:text-3xl">
                    {s.value}
                  </div>
                  <div className="mt-1 text-[12px] uppercase tracking-wider text-muted-foreground">
                    {s.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right visual - orbital tech scene */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative mx-auto aspect-square w-full max-w-[520px]"
          >
            {/* Central core */}
            <div className="absolute inset-0 grid place-items-center">
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-[#0A84FF] blur-3xl opacity-40" />
                <div className="relative grid h-40 w-40 place-items-center rounded-full bg-gradient-to-br from-[#0A84FF] to-[#22D3EE] shadow-[0_0_80px_rgba(34,211,238,0.6)]">
                  <div className="grid h-32 w-32 place-items-center rounded-full bg-[#07111F] border border-white/10">
                    <div className="grid h-20 w-20 place-items-center rounded-full bg-gradient-to-br from-[#0A84FF]/30 to-[#22D3EE]/30 border border-[#22D3EE]/40">
                      <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="url(#g)" strokeWidth="1.6">
                        <defs>
                          <linearGradient id="g" x1="0" x2="1" y1="0" y2="1">
                            <stop offset="0" stopColor="#22D3EE" />
                            <stop offset="1" stopColor="#4CC9F0" />
                          </linearGradient>
                        </defs>
                        <path d="M12 2v20M2 12h20M4.9 4.9l14.2 14.2M19.1 4.9L4.9 19.1" />
                        <circle cx="12" cy="12" r="4" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Orbital rings with nodes */}
            {[
              { size: 280, dur: "animate-orbit-slow", nodes: 3 },
              { size: 380, dur: "animate-orbit-reverse", nodes: 4 },
              { size: 480, dur: "animate-orbit-slow", nodes: 5 },
            ].map((ring, ri) => (
              <div
                key={ri}
                className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10 ${ring.dur}`}
                style={{ width: ring.size, height: ring.size }}
              >
                {Array.from({ length: ring.nodes }).map((_, i) => {
                  const a = (i / ring.nodes) * Math.PI * 2;
                  const x = 50 + 50 * Math.cos(a);
                  const y = 50 + 50 * Math.sin(a);
                  return (
                    <div
                      key={i}
                      className="absolute h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#22D3EE] shadow-[0_0_20px_rgba(34,211,238,0.8)]"
                      style={{ left: `${x}%`, top: `${y}%` }}
                    />
                  );
                })}
              </div>
            ))}

            {/* Floating glass panels */}
            <div className="absolute left-2 top-8 rounded-2xl glass-strong p-3 shadow-2xl animate-float" style={{ animationDelay: "1s" }}>
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-[#0A84FF] to-[#22D3EE]" />
                <div>
                  <div className="text-[10px] text-muted-foreground">Model Accuracy</div>
                  <div className="text-xs font-semibold">99.4%</div>
                </div>
              </div>
            </div>
            <div className="absolute right-0 bottom-16 rounded-2xl glass-strong p-3 shadow-2xl animate-float" style={{ animationDelay: "3s" }}>
              <div className="text-[10px] text-muted-foreground">Cloud Uptime</div>
              <div className="text-xs font-semibold text-[#16C784]">↑ 99.99%</div>
            </div>

            {/* Floating labels */}
            {BADGES.map((b) => (
              <div
                key={b.label}
                className="absolute rounded-full glass px-3 py-1.5 text-[11px] font-medium text-white/90 animate-float whitespace-nowrap"
                style={{
                  top: b.top,
                  left: b.left,
                  right: b.right,
                  bottom: b.bottom,
                  animationDelay: `${Math.random() * 3}s`,
                }}
              >
                <span className="mr-1.5 inline-block h-1.5 w-1.5 rounded-full bg-[#22D3EE]" />
                {b.label}
              </div>
            ))}
          </motion.div>
        </div>

        {/* Trusted tech marquee */}
        <div className="mt-24">
          <p className="text-center text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
            Trusted Technology Stack
          </p>
          <div className="relative mt-6 overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]">
            <div className="flex w-max animate-marquee gap-12 py-2">
              {[...Array(2)].flatMap((_, k) =>
                ["React", "Next.js", "TypeScript", "Node.js", "Python", "AWS", "Azure", "Docker", "PostgreSQL", "Tailwind", "Flutter", "GCP"].map((t) => (
                  <span key={`${k}-${t}`} className="text-lg font-semibold text-white/40 hover:text-white transition-colors">
                    {t}
                  </span>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
