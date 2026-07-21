import { Linkedin, Github, Twitter, Facebook, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#07111F]">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#22D3EE]/50 to-transparent" />
      <div className="pointer-events-none absolute -left-24 top-0 h-[400px] w-[400px] rounded-full bg-[#0A84FF]/15 blur-[140px]" />

      {/* Final CTA */}
      <div className="mx-auto max-w-[1280px] px-6 pt-24">
        <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-[#0F172A] to-[#162235] p-10 text-center sm:p-16">
          <div className="pointer-events-none absolute inset-0 grid-bg opacity-15" />
          <div className="pointer-events-none absolute left-1/2 top-0 h-[300px] w-[600px] -translate-x-1/2 rounded-full bg-[#22D3EE]/20 blur-[120px]" />
          <div className="relative">
            <h2 className="mx-auto max-w-2xl text-[32px] font-semibold leading-tight sm:text-[46px]">
              Ready to turn your vision into <span className="text-gradient-brand">reality?</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-[15.5px] leading-relaxed text-muted-foreground">
              Partner with Nexora Technologies to build secure, scalable, and future-ready digital solutions.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a href="#contact" className="rounded-full bg-gradient-to-r from-[#0A84FF] to-[#22D3EE] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_20px_60px_-20px_rgba(34,211,238,0.7)]">
                Start Your Project
              </a>
              <a href="#contact" className="rounded-full glass px-6 py-3.5 text-sm font-semibold text-white hover:border-[#22D3EE]/40">
                Book a Free Consultation
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Columns */}
      <div className="mx-auto max-w-[1280px] px-6 pt-20 pb-10">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2.5">
              <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-[#0A84FF] to-[#22D3EE]">
                <span className="text-[11px] font-bold text-white tracking-tighter">NX</span>
              </span>
              <span className="text-[15px] font-semibold">Nexora<span className="text-[#22D3EE]">.</span></span>
            </div>
            <p className="mt-4 max-w-xs text-[13.5px] leading-relaxed text-muted-foreground">
              Engineering intelligent digital experiences for ambitious teams — from AI and cloud to enterprise software.
            </p>
            <div className="mt-6 flex gap-2">
              {[Linkedin, Twitter, Github, Facebook, Instagram].map((I, k) => (
                <a key={k} href="#" className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 bg-white/[0.02] text-muted-foreground transition-all hover:border-[#22D3EE]/40 hover:text-[#22D3EE]">
                  <I className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <FooterCol title="Company" links={["Home", "About", "Process", "Contact", "Careers"]} className="lg:col-span-2" />
          <FooterCol title="Services" links={["Software", "Web", "Mobile", "AI Solutions", "Cloud", "Automation"]} className="lg:col-span-2" />
          <FooterCol title="Resources" links={["Blog", "Case Studies", "Privacy Policy", "Terms"]} className="lg:col-span-2" />

          <div className="lg:col-span-2">
            <h5 className="text-[12px] font-semibold uppercase tracking-[0.15em] text-white">Newsletter</h5>
            <p className="mt-4 text-[13px] text-muted-foreground">Insights on AI, cloud, and product craft.</p>
            <form onSubmit={(e) => e.preventDefault()} className="mt-4 flex overflow-hidden rounded-full border border-white/10 bg-white/[0.03] p-1">
              <input type="email" placeholder="you@company.com" className="min-w-0 flex-1 bg-transparent px-3 py-2 text-[13px] placeholder-muted-foreground focus:outline-none" />
              <button className="rounded-full bg-gradient-to-r from-[#0A84FF] to-[#22D3EE] px-3 py-2 text-[12px] font-semibold text-white">Join</button>
            </form>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-6 text-[12.5px] text-muted-foreground sm:flex-row">
          <p>© 2026 Nexora Technologies. All rights reserved.</p>
          <p>Innovate • Integrate • Elevate</p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links, className = "" }: { title: string; links: string[]; className?: string }) {
  return (
    <div className={className}>
      <h5 className="text-[12px] font-semibold uppercase tracking-[0.15em] text-white">{title}</h5>
      <ul className="mt-4 space-y-2.5">
        {links.map((l) => (
          <li key={l}>
            <a href="#" className="text-[13.5px] text-muted-foreground transition-colors hover:text-white">{l}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
