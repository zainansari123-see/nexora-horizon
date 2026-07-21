import { SectionHeader } from "./Services";

const TESTIMONIALS = [
  { name: "Aarav Mehta", role: "CTO, Helix Fintech", quote: "Nexora shipped in weeks what our internal team couldn't in a year. Rare craft.", cat: "AI • Fintech" },
  { name: "Sophie Laurent", role: "VP Product, Aurora", quote: "Every deliverable felt handcrafted. The design system alone changed how we ship.", cat: "Enterprise SaaS" },
  { name: "Kenji Tanaka", role: "Founder, Nimbus Labs", quote: "A truly senior team. They pushed back where it mattered and shipped ahead of plan.", cat: "Cloud Platform" },
  { name: "Priya Raman", role: "Head of Eng, Meridian", quote: "Reliable, transparent, and technically sharp. Our go-to engineering partner.", cat: "Healthcare" },
];

export function Testimonials() {
  return (
    <section className="relative py-32">
      <div className="pointer-events-none absolute right-0 top-0 -z-10 h-[500px] w-[500px] rounded-full bg-[#22D3EE]/10 blur-[140px]" />

      <div className="mx-auto max-w-[1280px] px-6">
        <SectionHeader
          label="CLIENT SUCCESS"
          title={<>Trusted by teams that <span className="text-gradient-brand">value innovation</span></>}
          desc="We build long-term partnerships by delivering reliable software and exceptional experiences."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {TESTIMONIALS.map((t) => (
            <figure
              key={t.name}
              className="group relative overflow-hidden rounded-3xl border border-white/[0.06] bg-gradient-to-b from-white/[0.04] to-white/[0.01] p-8 transition-all hover:border-[#22D3EE]/25 hover:-translate-y-0.5"
            >
              <div className="pointer-events-none absolute -right-20 -top-20 h-52 w-52 rounded-full bg-[#0A84FF]/10 blur-3xl transition-opacity group-hover:bg-[#22D3EE]/20" />
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="text-[#4CC9F0]">
                <path d="M7 8h4v8H5v-4c0-2.2 1.8-4 4-4H7zm10 0h4v8h-6v-4c0-2.2 1.8-4 4-4h-2z" fill="currentColor" opacity="0.4" />
              </svg>
              <blockquote className="mt-4 text-[17px] leading-relaxed text-white/90">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-4 border-t border-white/5 pt-5">
                <div className="grid h-11 w-11 place-items-center rounded-full bg-gradient-to-br from-[#0A84FF] to-[#22D3EE] text-sm font-semibold text-white">
                  {t.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <div className="min-w-0">
                  <div className="text-[14px] font-semibold">{t.name}</div>
                  <div className="text-[12.5px] text-muted-foreground">{t.role}</div>
                </div>
                <span className="ml-auto rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] text-muted-foreground">
                  {t.cat}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>

        {/* Logo marquee */}
        <div className="mt-16 overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]">
          <div className="flex w-max animate-marquee gap-16 py-4">
            {[...Array(2)].flatMap((_, k) =>
              ["HELIX", "AURORA", "NIMBUS", "MERIDIAN", "VOLTMART", "ORBITAL", "PRISM", "ZENITH"].map((l) => (
                <span key={`${k}-${l}`} className="text-lg font-bold tracking-[0.3em] text-white/25 hover:text-white/70 transition-colors">
                  {l}
                </span>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
