import { motion } from "motion/react";
import { SectionHeader } from "./Services";

const STEPS = [
  { n: "01", t: "Discovery", d: "Understand business goals and project vision." },
  { n: "02", t: "Research", d: "Analyze market, competitors, and user needs." },
  { n: "03", t: "Strategy", d: "Define roadmap and technical architecture." },
  { n: "04", t: "Design", d: "Craft premium UI/UX prototypes." },
  { n: "05", t: "Development", d: "Build secure, scalable, performant software." },
  { n: "06", t: "Testing", d: "QA, performance, and hardening." },
  { n: "07", t: "Deployment", d: "Zero-downtime launch to production." },
  { n: "08", t: "Support", d: "Continuous improvement and maintenance." },
];

export function Process() {
  return (
    <section id="process" className="relative py-32">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[400px] bg-[radial-gradient(ellipse_at_top,rgba(76,201,240,0.12),transparent_70%)]" />

      <div className="mx-auto max-w-[1280px] px-6">
        <SectionHeader
          label="HOW WE WORK"
          title={<>A proven process, <span className="text-gradient-brand">engineered for outcomes</span></>}
          desc="From first conversation to long-term partnership — every step is intentional, transparent, and measured."
        />

        <div className="relative mt-20">
          {/* Connecting line */}
          <div className="pointer-events-none absolute left-6 top-6 hidden h-[2px] w-[calc(100%-3rem)] bg-gradient-to-r from-[#0A84FF]/60 via-[#22D3EE]/60 to-transparent lg:block" />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: (i % 4) * 0.08 }}
                className="group relative"
              >
                <div className="relative z-10 grid h-12 w-12 place-items-center rounded-full border border-white/10 bg-[#07111F] text-[13px] font-semibold text-[#4CC9F0] shadow-[0_0_30px_rgba(34,211,238,0.3)] transition-all group-hover:scale-110 group-hover:border-[#22D3EE]/60">
                  {s.n}
                </div>
                <div className="mt-5 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5 transition-all group-hover:border-[#22D3EE]/25 group-hover:bg-white/[0.04]">
                  <h3 className="text-[17px] font-semibold">{s.t}</h3>
                  <p className="mt-2 text-[13.5px] leading-relaxed text-muted-foreground">{s.d}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA block */}
        <div className="relative mt-24 overflow-hidden rounded-[28px] border border-white/10 bg-gradient-to-br from-[#0F172A] via-[#0F172A] to-[#162235] p-10 sm:p-14">
          <div className="pointer-events-none absolute -right-24 -top-24 h-[400px] w-[400px] rounded-full bg-[#0A84FF]/30 blur-[120px]" />
          <div className="pointer-events-none absolute -left-24 -bottom-32 h-[400px] w-[400px] rounded-full bg-[#22D3EE]/25 blur-[120px]" />
          <div className="pointer-events-none absolute inset-0 grid-bg opacity-20" />
          <div className="relative grid items-center gap-8 lg:grid-cols-[1.4fr_1fr]">
            <div>
              <h3 className="text-[30px] font-semibold leading-tight sm:text-[40px]">
                Let's build something <span className="text-gradient-brand">extraordinary</span> together.
              </h3>
              <p className="mt-4 max-w-xl text-[15.5px] leading-relaxed text-muted-foreground">
                Whether it's AI, enterprise software, or digital transformation — our team is ready to turn your vision into shipped product.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 lg:justify-end">
              <a href="#contact" className="rounded-full bg-gradient-to-r from-[#0A84FF] to-[#22D3EE] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_20px_60px_-20px_rgba(34,211,238,0.7)]">
                Start Your Project
              </a>
              <a href="#contact" className="rounded-full glass px-6 py-3.5 text-sm font-semibold text-white hover:border-[#22D3EE]/40">
                Schedule a Consultation
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
