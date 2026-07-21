import { useState } from "react";
import { SectionHeader } from "./Services";
import { Mail, Phone, MapPin, Clock, Linkedin, Github, Twitter } from "lucide-react";

export function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <section id="contact" className="relative py-32">
      <div className="pointer-events-none absolute inset-0 -z-10 grid-bg opacity-15" />
      <div className="pointer-events-none absolute left-1/2 top-20 -z-10 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-[#0A84FF]/15 blur-[140px]" />

      <div className="mx-auto max-w-[1280px] px-6">
        <SectionHeader
          label="GET IN TOUCH"
          title={<>Let's build the <span className="text-gradient-brand">future together</span></>}
          desc="Startup, growing business, or enterprise — our team is ready to transform your ideas into powerful digital solutions."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-[1fr_1.3fr]">
          {/* Left info */}
          <div className="space-y-4">
            {[
              { icon: Mail, label: "Business Email", value: "hello@nexoratech.com" },
              { icon: Phone, label: "Phone", value: "+1 (415) 555-0134" },
              { icon: MapPin, label: "Office", value: "One Market Plaza, San Francisco" },
              { icon: Clock, label: "Working Hours", value: "Mon – Fri • 9:00 – 18:00 PT" },
            ].map((i) => (
              <div key={i.label} className="flex items-start gap-4 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5">
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-[#0A84FF]/25 to-[#22D3EE]/20 border border-white/10">
                  <i.icon className="h-4 w-4 text-[#4CC9F0]" strokeWidth={2} />
                </div>
                <div className="min-w-0">
                  <div className="text-[11px] uppercase tracking-wider text-muted-foreground">{i.label}</div>
                  <div className="mt-0.5 text-[14.5px] font-medium">{i.value}</div>
                </div>
              </div>
            ))}
            <div className="flex items-center gap-2 pt-2">
              {[Linkedin, Github, Twitter].map((I, k) => (
                <a key={k} href="#" className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/[0.02] text-muted-foreground transition-all hover:border-[#22D3EE]/40 hover:text-[#22D3EE]">
                  <I className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Form */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
              setTimeout(() => setSent(false), 3500);
            }}
            className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-white/[0.01] p-6 sm:p-8 backdrop-blur-xl"
          >
            <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[#22D3EE]/15 blur-3xl" />
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Full Name" name="name" required />
              <Field label="Company" name="company" />
              <Field label="Email" name="email" type="email" required />
              <Field label="Phone" name="phone" />
              <Field label="Project Type" name="type" placeholder="AI, Web, Mobile…" />
              <Field label="Budget" name="budget" placeholder="$25k – $100k" />
            </div>
            <div className="mt-4">
              <Field label="Project Description" name="desc" textarea required />
            </div>
            <button
              type="submit"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#0A84FF] to-[#22D3EE] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_20px_60px_-20px_rgba(34,211,238,0.7)] transition-transform hover:scale-[1.01] sm:w-auto"
            >
              {sent ? (
                <>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12l5 5L20 7" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  Message sent
                </>
              ) : (
                <>
                  Send Message
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label, name, type = "text", required, placeholder, textarea,
}: {
  label: string; name: string; type?: string; required?: boolean; placeholder?: string; textarea?: boolean;
}) {
  const cls = "peer w-full rounded-xl border border-white/10 bg-[#07111F]/60 px-4 pt-5 pb-2 text-[14px] text-white placeholder-transparent transition-all focus:border-[#22D3EE]/60 focus:outline-none focus:ring-2 focus:ring-[#22D3EE]/20";
  return (
    <label className="relative block">
      {textarea ? (
        <textarea name={name} rows={4} required={required} placeholder={placeholder || label} className={cls} />
      ) : (
        <input type={type} name={name} required={required} placeholder={placeholder || label} className={cls} />
      )}
      <span className="pointer-events-none absolute left-4 top-2 text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
        {label}
      </span>
    </label>
  );
}
