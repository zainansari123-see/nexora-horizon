import { motion } from "motion/react";
import { SectionHeader } from "./Services";
import * as Icons from "lucide-react";

const FEATURES = [
  { icon: Icons.Lightbulb, title: "Innovation First", desc: "Ideas engineered with foresight." },
  { icon: Icons.Cpu, title: "Modern Technologies", desc: "Cutting-edge stack, always." },
  { icon: Icons.Shield, title: "Enterprise Security", desc: "Hardened by design." },
  { icon: Icons.Layers, title: "Scalable Architecture", desc: "Built to grow with you." },
  { icon: Icons.Users, title: "Expert Engineers", desc: "Senior talent, hands-on." },
  { icon: Icons.Rocket, title: "Fast Delivery", desc: "Ship weekly, iterate faster." },
  { icon: Icons.MessageSquare, title: "Transparent Comms", desc: "Clarity at every step." },
  { icon: Icons.LifeBuoy, title: "Long-Term Support", desc: "We stay after launch." },
  { icon: Icons.Heart, title: "Client-Centric", desc: "Your outcomes drive us." },
];

const METRICS = [
  { v: "500+", l: "Projects Delivered" },
  { v: "150+", l: "Happy Clients" },
  { v: "25+", l: "Industries Served" },
  { v: "99%", l: "Client Satisfaction" },
];

export function WhyChoose() {
  return (
    <section id="why" className="relative py-32">
      <div className="pointer-events-none absolute right-0 top-1/4 -z-10 h-[500px] w-[500px] rounded-full bg-[#22D3EE]/10 blur-[140px]" />

      <div className="mx-auto max-w-[1280px] px-6">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.2fr] lg:items-start">
          <div className="lg:sticky lg:top-32">
            <SectionHeader
              label="WHY NEXORA"
              center={false}
              title={<>Businesses choose us for <span className="text-gradient-brand">what we build next</span></>}
              desc="We combine innovation, strategy, engineering excellence, and world-class design to deliver software that creates measurable business impact."
            />
            <a
              href="#contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#0A84FF] to-[#22D3EE] px-5 py-3 text-sm font-semibold text-white shadow-[0_20px_60px_-20px_rgba(34,211,238,0.6)]"
            >
              Talk to our team
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </a>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            {FEATURES.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (i % 3) * 0.06 }}
                className="group rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5 transition-all hover:border-[#22D3EE]/25 hover:bg-white/[0.04] hover:-translate-y-0.5"
              >
                <div className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br from-[#0A84FF]/25 to-[#22D3EE]/20 border border-white/10 transition-transform group-hover:rotate-6">
                  <f.icon className="h-4 w-4 text-[#4CC9F0]" strokeWidth={2} />
                </div>
                <h4 className="mt-4 text-[15px] font-semibold">{f.title}</h4>
                <p className="mt-1 text-[13px] leading-relaxed text-muted-foreground">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Metrics */}
        <div className="mt-24 grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/5 sm:grid-cols-4">
          {METRICS.map((m) => (
            <div key={m.l} className="bg-[#0F172A] p-8 text-center">
              <div className="text-4xl font-semibold text-gradient-brand">{m.v}</div>
              <div className="mt-2 text-[12px] uppercase tracking-wider text-muted-foreground">{m.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
