import Link from "next/link";
import Image from "next/image";
import { SUPPORT_EMAIL } from "@/lib/site";

const apps = [
  {
    slug: "habittrack",
    name: "HabitTrack",
    tagline: "Build habits that stick.",
    description:
      "Track streaks, set reminders, stake credits on your commitments and get personal coaching from an AI habit coach — all in one beautifully focused Android app.",
    tags: ["Android", "Habits", "AI Coach"],
    icon: "/ic_launcher-playstore.png",
    iconBg: "from-[#1a0a00] to-[#2d0f00]",
    glowColor: "rgba(255,107,43,0.25)",
    borderGlow: "rgba(255,107,43,0.3)",
    tagColor: "text-[#ff8c4a] bg-[rgba(255,107,43,0.12)] border-[rgba(255,107,43,0.2)]",
    ringClass: "icon-ring-warm",
  },
];

const values = [
  {
    symbol: "◈",
    title: "Calm by design",
    body: "Interfaces that stay out of your way, so you can focus on what matters most.",
    accent: "text-[#a48bff]",
    glow: "rgba(124,92,240,0.15)",
  },
  {
    symbol: "◉",
    title: "Private by default",
    body: "Your data is yours. We never sell personal information, and we say plainly what we collect.",
    accent: "text-accent-2",
    glow: "rgba(54,224,194,0.15)",
  },
  {
    symbol: "◆",
    title: "Built with care",
    body: "Every app is crafted end to end by an independent developer who uses it daily.",
    accent: "text-[#ff8c4a]",
    glow: "rgba(255,107,43,0.12)",
  },
];

export default function Home() {
  return (
    <main className="relative overflow-hidden">

      {/* ══ HERO ══════════════════════════════════════════════════════ */}
      <section className="relative isolate flex min-h-[92vh] items-center">

        {/* Layers */}
        <div className="grid-bg absolute inset-0 -z-10" />
        <div className="lamp-beam absolute inset-0 -z-10" />

        {/* Aurora orbs */}
        <div className="aurora  absolute left-1/2 top-[-220px] -z-10 h-[680px] w-[1000px] -translate-x-1/2 rounded-full bg-[#7c5cf0]/18 blur-[180px]" />
        <div className="aurora-b absolute right-[-160px] top-52 -z-10 h-[440px] w-[440px] rounded-full bg-[#36e0c2]/10 blur-[140px]" />
        <div className="aurora-c absolute left-[-120px] bottom-0 -z-10 h-[360px] w-[360px] rounded-full bg-[#ff6b2b]/07 blur-[120px]" />

        {/* Sparkles */}
        <div className="sparkle absolute left-[10%] top-[20%] h-[7px] w-[7px]" />
        <div className="sparkle absolute right-[16%] top-[28%] h-[5px] w-[5px]" style={{ animationDelay: "1.1s" }} />
        <div className="sparkle absolute left-[20%] bottom-[30%] h-[4px] w-[4px]" style={{ animationDelay: "2.2s" }} />
        <div className="sparkle absolute right-[26%] bottom-[38%] h-[6px] w-[6px]" style={{ animationDelay: "0.6s" }} />
        <div className="sparkle absolute left-[50%] top-[12%] h-[4px] w-[4px]" style={{ animationDelay: "1.8s" }} />

        <div className="mx-auto w-full max-w-5xl px-6 pb-28 pt-24 text-center sm:pt-32">

          {/* Badge */}
          <div className="rise inline-flex items-center gap-2 badge-glow rounded-full border border-[rgba(124,92,240,0.25)] bg-[rgba(124,92,240,0.06)] px-4 py-1.5 text-[11px] font-semibold tracking-widest uppercase text-accent-2">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-2 shadow-[0_0_8px_#36e0c2]" />
            Independent App Studio
          </div>

          {/* Headline */}
          <h1 className="rise mt-7 text-5xl font-semibold leading-[1.06] tracking-[-0.02em] [animation-delay:80ms] sm:text-[4.5rem] lg:text-[5.5rem]">
            Apps that help you
            <br />
            <span className="shimmer-text">live intentionally.</span>
          </h1>

          {/* Sub */}
          <p className="rise mx-auto mt-6 max-w-lg text-lg leading-8 text-muted [animation-delay:160ms]">
            AthenaLab designs and builds calm, focused mobile apps — inspired by
            wisdom, powered by thoughtful technology.
          </p>

          {/* CTAs */}
          <div className="rise mt-10 flex flex-col items-center justify-center gap-3 [animation-delay:240ms] sm:flex-row">
            <Link
              href="#apps"
              className="btn-primary rounded-full bg-foreground px-8 py-3.5 text-sm font-semibold text-background"
            >
              Explore our apps
            </Link>
            <Link
              href="#contact"
              className="btn-outline rounded-full border border-border bg-card px-8 py-3.5 text-sm font-medium"
            >
              Get in touch
            </Link>
          </div>

          {/* Pill row */}
          <div className="rise mt-12 flex flex-wrap justify-center gap-3 [animation-delay:320ms]">
            {["Android · iOS soon", "AI habit coach", "Privacy first", "Built with care"].map((s) => (
              <span
                key={s}
                className="rounded-full border border-border bg-card px-4 py-1.5 text-xs text-muted"
              >
                {s}
              </span>
            ))}
          </div>

        </div>
      </section>

      {/* ══ DIVIDER ═══════════════════════════════════════════════════ */}
      <div className="mx-auto max-w-6xl px-6">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      {/* ══ APPS ══════════════════════════════════════════════════════ */}
      <section id="apps" className="mx-auto max-w-6xl scroll-mt-20 px-6 py-24">

        <div className="mb-14 text-center">
          <span className="section-label">Our apps</span>
          <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
            Made to be used every day.
          </h2>
          <p className="mx-auto mt-3 max-w-md text-sm leading-7 text-muted">
            Each app does one thing deeply — designed to slot naturally into your routine.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {apps.map((app) => (
            <Link
              key={app.slug}
              href={`/${app.slug}`}
              className="card-glow card-accent-border group relative overflow-hidden rounded-3xl border border-border bg-card p-8"
            >
              {/* Card ambient glow */}
              <div
                className="absolute -right-24 -top-24 h-72 w-72 rounded-full blur-3xl transition-opacity duration-500 opacity-0 group-hover:opacity-100"
                style={{ background: `radial-gradient(circle, ${app.glowColor} 0%, transparent 70%)` }}
              />

              <div className="relative">
                {/* Icon */}
                <div className={`${app.ringClass} flex h-[76px] w-[76px] items-center justify-center overflow-hidden rounded-[22px] bg-gradient-to-br ${app.iconBg}`}>
                  <Image
                    src={app.icon}
                    alt={`${app.name} icon`}
                    width={76}
                    height={76}
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="mt-5 flex items-center gap-3">
                  <h3 className="text-2xl font-semibold tracking-tight">{app.name}</h3>
                  <span className={`rounded-full border px-2.5 py-0.5 text-[10px] font-bold tracking-widest uppercase ${app.tagColor}`}>
                    Live
                  </span>
                </div>

                <p className="mt-1 text-sm font-medium text-[#ff8c4a]">{app.tagline}</p>
                <p className="mt-4 text-sm leading-7 text-muted">{app.description}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {app.tags.map((t) => (
                    <span key={t} className="rounded-full border border-border bg-white/[0.03] px-3 py-1 text-xs text-muted">
                      {t}
                    </span>
                  ))}
                </div>

                <span className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#a48bff]">
                  Learn more
                  <span className="transition-transform duration-200 group-hover:translate-x-1.5">→</span>
                </span>
              </div>
            </Link>
          ))}

          {/* Coming soon card */}
          <div className="group flex flex-col items-center justify-center gap-5 rounded-3xl border border-dashed border-border p-10 text-center transition-colors hover:border-[rgba(124,92,240,0.25)]">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-dashed border-border text-2xl text-muted transition-colors group-hover:border-[rgba(124,92,240,0.3)] group-hover:text-[#a48bff]">
              ✦
            </div>
            <div>
              <h3 className="text-lg font-semibold">More coming soon</h3>
              <p className="mt-2 max-w-xs text-sm leading-6 text-muted">
                New apps are brewing in the lab. Stay tuned.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══ ABOUT ═════════════════════════════════════════════════════ */}
      <section id="about" className="mx-auto max-w-6xl scroll-mt-20 px-6 py-20">

        <div className="mb-14 text-center">
          <span className="section-label">About</span>
          <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
            Named for wisdom. Built for focus.
          </h2>
          <p className="mx-auto mt-4 max-w-xl leading-7 text-muted">
            AthenaLab is a small studio with a simple belief: good software should
            respect your time, your attention and your privacy.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-3">
          {values.map((v) => (
            <div
              key={v.title}
              className="card-glow card-accent-border group relative overflow-hidden rounded-2xl border border-border bg-card p-7"
            >
              <div
                className="absolute -left-4 -top-4 h-28 w-28 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: v.glow }}
              />
              <div className="relative">
                <div className={`mb-5 text-3xl ${v.accent}`}>{v.symbol}</div>
                <h3 className="font-semibold">{v.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted">{v.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ══ CONTACT ═══════════════════════════════════════════════════ */}
      <section id="contact" className="mx-auto max-w-6xl scroll-mt-20 px-6 pb-28 pt-8">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-card px-8 py-20 text-center">

          {/* Background glows inside card */}
          <div className="aurora absolute left-1/2 top-[-60px] h-64 w-[700px] -translate-x-1/2 rounded-full bg-[#7c5cf0]/18 blur-[120px] pointer-events-none" />
          <div className="absolute right-0 bottom-0 h-48 w-48 rounded-full bg-[#36e0c2]/10 blur-[80px] pointer-events-none" />
          <div className="absolute left-0 bottom-0 h-48 w-48 rounded-full bg-[#ff6b2b]/08 blur-[80px] pointer-events-none" />

          <div className="relative">
            <span className="section-label">Contact</span>
            <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
              Questions, ideas or feedback?
            </h2>
            <p className="mx-auto mt-4 max-w-md text-muted">
              We read every message. Reach out and we&apos;ll get back to you.
            </p>
            <a
              href={`mailto:${SUPPORT_EMAIL}`}
              className="btn-primary mt-8 inline-block rounded-full bg-foreground px-8 py-3.5 text-sm font-semibold text-background"
            >
              {SUPPORT_EMAIL}
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}
