import { motion } from "motion/react";
import {
  Code2, Globe, Smartphone, Sparkles, Cloud, Building2, Palette, Plug, Workflow,
} from "lucide-react";

const SERVICES = [
  { icon: Code2, title: "Custom Software", desc: "Enterprise-grade systems built to match complex business requirements end-to-end." },
  { icon: Globe, title: "Web Development", desc: "High-performance responsive web platforms crafted with modern frameworks." },
  { icon: Smartphone, title: "Mobile Apps", desc: "Native and cross-platform apps for iOS and Android with fluid UX." },
  { icon: Sparkles, title: "Artificial Intelligence", desc: "Machine learning, predictive analytics, and intelligent automation at scale." },
  { icon: Cloud, title: "Cloud Solutions", desc: "Scalable infrastructure on AWS, Azure, and Google Cloud with zero-downtime deploys." },
  { icon: Building2, title: "Enterprise Apps", desc: "Secure ERP, CRM, HRMS, and business management systems tailored to teams." },
  { icon: Palette, title: "UI / UX Design", desc: "Human-centered interfaces with premium, conversion-focused experiences." },
  { icon: Plug, title: "API & Integration", desc: "Secure APIs and third-party integrations that connect your ecosystem." },
  { icon: Workflow, title: "Automation", desc: "Workflow automation that eliminates busywork and unlocks productivity." },
];

export function Services() {
  return (
    <section id="services" className="relative py-32">
      <div className="absolute inset-0 -z-10 grid-bg opacity-20" />
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-[#0A84FF]/10 blur-[140px]" />

      <div className="mx-auto max-w-[1280px] px-6">
        <SectionHeader
          label="WHAT WE DO"
          title={<>Powering businesses with <span className="text-gradient-brand">intelligent digital solutions</span></>}
          desc="We build scalable software, intelligent automation, modern websites, enterprise applications, cloud platforms, and AI-powered experiences that help businesses grow faster."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              className="group relative overflow-hidden rounded-3xl border border-white/[0.06] bg-gradient-to-b from-white/[0.04] to-white/[0.01] p-7 transition-all duration-500 hover:border-[#22D3EE]/30 hover:-translate-y-1"
            >
              <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[#0A84FF]/10 blur-3xl transition-opacity duration-500 group-hover:bg-[#22D3EE]/25" />
              <div className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" style={{ background: "linear-gradient(135deg, rgba(10,132,255,0.08), transparent 60%)" }} />

              <div className="relative">
                <div className="inline-grid h-12 w-12 place-items-center rounded-2xl border border-white/10 bg-gradient-to-br from-[#0A84FF]/20 to-[#22D3EE]/20 transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110">
                  <s.icon className="h-5 w-5 text-[#4CC9F0]" strokeWidth={1.8} />
                </div>
                <h3 className="mt-5 text-xl font-semibold tracking-tight transition-colors group-hover:text-[#4CC9F0]">
                  {s.title}
                </h3>
                <p className="mt-2.5 text-[14.5px] leading-relaxed text-muted-foreground">{s.desc}</p>
                <div className="mt-5 inline-flex items-center gap-1.5 text-[13px] font-medium text-[#22D3EE]">
                  Learn more
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className="transition-transform duration-500 group-hover:translate-x-1.5">
                    <path d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
                </div>
              </div>

              <div className="pointer-events-none absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-[#22D3EE]/50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SectionHeader({
  label,
  title,
  desc,
  center = true,
}: {
  label: string;
  title: React.ReactNode;
  desc?: string;
  center?: boolean;
}) {
  return (
    <div className={center ? "mx-auto max-w-3xl text-center" : "max-w-2xl"}>
      <div className={`inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#4CC9F0]`}>
        <span className="h-1 w-1 rounded-full bg-[#22D3EE]" />
        {label}
      </div>
      <h2 className="mt-5 text-[34px] font-semibold leading-[1.1] tracking-tight sm:text-[44px]">
        {title}
      </h2>
      {desc && <p className="mt-5 text-[16.5px] leading-relaxed text-muted-foreground">{desc}</p>}
    </div>
  );
}
