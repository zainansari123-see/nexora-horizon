import { useEffect, useState } from "react";

const NAV = [
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why" },
  { label: "Process", href: "#process" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Technologies", href: "#stack" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6">
        <nav
          className={`flex items-center justify-between rounded-2xl border transition-all duration-500 ${
            scrolled
              ? "border-white/10 bg-[#07111F]/70 px-4 py-2 backdrop-blur-xl shadow-[0_20px_60px_-30px_rgba(0,0,0,0.8)]"
              : "border-white/5 bg-white/[0.02] px-5 py-3 backdrop-blur-md"
          }`}
        >
          <a href="#home" className="flex items-center gap-2.5 group">
            <span className="relative grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-[#0A84FF] to-[#22D3EE] shadow-[0_0_20px_rgba(34,211,238,0.5)] transition-transform group-hover:scale-105">
              <span className="absolute inset-[3px] rounded-md bg-[#07111F]" />
              <span className="relative text-[11px] font-bold text-white tracking-tighter">NX</span>
            </span>
            <span className="text-[15px] font-semibold tracking-tight">
              Nexora<span className="text-[#22D3EE]">.</span>
            </span>
          </a>

          <ul className="hidden lg:flex items-center gap-1">
            {NAV.map((n) => (
              <li key={n.href}>
                <a
                  href={n.href}
                  className="rounded-full px-4 py-2 text-[13px] font-medium text-muted-foreground transition-colors hover:text-white hover:bg-white/5"
                >
                  {n.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-[#0A84FF] to-[#22D3EE] px-4 py-2 text-[13px] font-semibold text-white shadow-[0_10px_30px_-10px_rgba(34,211,238,0.6)] transition-transform hover:scale-[1.03]"
            >
              Start Your Project
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </a>
            <button
              onClick={() => setOpen((o) => !o)}
              className="lg:hidden grid h-9 w-9 place-items-center rounded-lg border border-white/10 bg-white/5"
              aria-label="Toggle menu"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                {open ? <path d="M6 6l12 12M6 18L18 6" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
              </svg>
            </button>
          </div>
        </nav>

        {open && (
          <div className="lg:hidden mt-2 rounded-2xl border border-white/10 bg-[#0F172A]/90 p-3 backdrop-blur-xl">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-4 py-3 text-sm text-muted-foreground hover:text-white hover:bg-white/5"
              >
                {n.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
