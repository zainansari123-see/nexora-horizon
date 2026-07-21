import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { SectionHeader } from "./Services";

const FAQS = [
  { q: "What services does Nexora provide?", a: "Custom software, web and mobile apps, AI/ML systems, cloud infrastructure, enterprise platforms, UI/UX design, and automation." },
  { q: "How long does a typical project take?", a: "Discovery to MVP usually spans 6–12 weeks. Larger enterprise builds run 3–6 months. We share a detailed timeline after the strategy phase." },
  { q: "Do you provide post-launch support?", a: "Yes — we offer SLAs, monitoring, incident response, and continuous improvement retainers to keep systems healthy after launch." },
  { q: "Can you redesign existing software?", a: "Absolutely. We audit the current system, then modernize the stack, UX, and performance without disrupting your users." },
  { q: "Do you build mobile applications?", a: "We build native iOS/Android and cross-platform apps with Flutter and React Native, tailored to your users and business." },
  { q: "Can you integrate AI into existing systems?", a: "Yes — from LLM copilots and RAG pipelines to predictive analytics and computer vision, integrated safely into your stack." },
  { q: "How do we start a project?", a: "Send us a message. We'll book a 30-minute intro, then draft a lightweight scope and roadmap within a week." },
];

export function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-[1000px] px-6">
        <SectionHeader
          label="FAQ"
          title={<>Everything you <span className="text-gradient-brand">need to know</span></>}
        />
        <div className="mt-12 divide-y divide-white/5 rounded-3xl border border-white/[0.06] bg-white/[0.02]">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q}>
                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left transition-colors hover:bg-white/[0.02]"
                >
                  <span className={`text-[15.5px] font-medium ${isOpen ? "text-white" : "text-white/85"}`}>{f.q}</span>
                  <span className={`grid h-8 w-8 shrink-0 place-items-center rounded-full border border-white/10 transition-all ${isOpen ? "rotate-45 border-[#22D3EE]/50 bg-[#22D3EE]/10 text-[#22D3EE]" : "text-muted-foreground"}`}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M12 5v14M5 12h14" /></svg>
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-6 text-[14.5px] leading-relaxed text-muted-foreground">{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
