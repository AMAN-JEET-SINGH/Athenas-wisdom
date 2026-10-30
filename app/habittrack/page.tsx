import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { SUPPORT_EMAIL } from "@/lib/site";

export const metadata: Metadata = {
  title: "HabitTrack",
  description:
    "HabitTrack is an Android habit tracker with streaks, reminders, commitment stakes and an AI habit coach.",
};

const features = [
  { icon: "🔥", title: "Streaks & progress",  body: "Watch your consistency grow with streaks, completions and clear progress views.",              glow: "rgba(255,107,43,0.2)"  },
  { icon: "🔔", title: "Smart reminders",      body: "Notifications and alarms at the exact times you choose — even after a reboot.",               glow: "rgba(124,92,240,0.2)"  },
  { icon: "💎", title: "Credits & stakes",     body: "Put credits on the line to stay committed, and donate them in-app to feel good.",             glow: "rgba(54,224,194,0.2)"  },
  { icon: "✨", title: "AI Habit Coach",        body: "Prime members get personalised advice based on their habits and progress.",                    glow: "rgba(164,139,255,0.2)" },
  { icon: "☁️", title: "Cloud backup",          body: "Prime members can back up habits and restore them on any device instantly.",                  glow: "rgba(125,211,252,0.2)" },
  { icon: "🎨", title: "Make it yours",         body: "Themes, colours and notification preferences that fit your style.",                           glow: "rgba(255,107,157,0.2)" },
];

export default function HabitTrackPage() {
  return (
    <main className="relative isolate overflow-hidden">

      {/* Background */}
      <div className="grid-bg absolute inset-0 -z-10" />
      <div className="lamp-beam absolute inset-0 -z-10" />
      <div className="aurora   absolute left-1/2 top-[-180px] -z-10 h-[560px] w-[900px] -translate-x-1/2 rounded-full bg-[#ff6b2b]/12 blur-[160px]" />
      <div className="aurora-b absolute right-[-120px] top-80 -z-10 h-[400px] w-[400px] rounded-full bg-[#7c5cf0]/12 blur-[130px]" />
      <div className="aurora-c absolute left-[-80px] bottom-20 -z-10 h-[300px] w-[300px] rounded-full bg-[#36e0c2]/08 blur-[100px]" />

      {/* Sparkles */}
      <div className="sparkle absolute left-[9%]  top-[20%] h-[7px] w-[7px]" />
      <div className="sparkle absolute right-[13%] top-[26%] h-[5px] w-[5px]" style={{ animationDelay: "1.3s" }} />
      <div className="sparkle absolute left-[30%] top-[10%] h-[4px] w-[4px]" style={{ animationDelay: "2s" }} />

      {/* ══ HERO ══════════════════════════════════════════════════════ */}
      <section className="mx-auto max-w-4xl px-6 pb-20 pt-24 text-center">

        {/* App icon — floating */}
        <div className="float mx-auto w-fit">
          <div className="icon-ring-warm mx-auto flex h-[108px] w-[108px] items-center justify-center overflow-hidden rounded-[28px] bg-gradient-to-br from-[#1a0800] to-[#2d1200]">
            <Image
              src="/ic_launcher-playstore.png"
              alt="HabitTrack app icon"
              width={108}
              height={108}
              className="h-full w-full object-cover"
              priority
            />
          </div>
        </div>

        <h1 className="mt-8 text-5xl font-semibold tracking-[-0.02em] sm:text-6xl">
          Habit<span className="shimmer-text">Track</span>
        </h1>

        <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-muted">
          Build habits that stick. Track streaks, stay committed and get
          personal coaching — all in one focused Android app.
        </p>

        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <span className="btn-primary inline-block cursor-default rounded-full bg-foreground px-8 py-3.5 text-sm font-semibold text-background">
            Android · Google Play
          </span>
          <Link
            href="/habittrack/privacy-policy"
            className="btn-outline rounded-full border border-border bg-card px-8 py-3.5 text-sm font-medium"
          >
            Privacy Policy
          </Link>
        </div>

        {/* Stats */}
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          {[
            { label: "Daily habits", value: "Unlimited" },
            { label: "AI coach", value: "Prime" },
            { label: "Cloud backup", value: "Prime" },
          ].map((s) => (
            <div key={s.label} className="min-w-[120px] rounded-2xl border border-border bg-card px-6 py-4 text-center">
              <div className="text-xl font-bold gradient-text">{s.value}</div>
              <div className="mt-1 text-xs text-muted">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ══ FEATURES ══════════════════════════════════════════════════ */}
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="mb-12 text-center">
          <span className="section-label">Features</span>
          <h2 className="mt-5 text-2xl font-semibold tracking-tight sm:text-3xl">
            Everything you need to build better habits.
          </h2>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="card-glow card-accent-border group relative overflow-hidden rounded-2xl border border-border bg-card p-6"
            >
              <div
                className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none"
                style={{ background: `radial-gradient(circle at top left, ${f.glow} 0%, transparent 60%)` }}
              />
              <div className="relative">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-white/[0.07] bg-white/[0.04] text-[1.35rem]">
                  {f.icon}
                </div>
                <h2 className="font-semibold">{f.title}</h2>
                <p className="mt-3 text-sm leading-6 text-muted">{f.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ══ SUPPORT ═══════════════════════════════════════════════════ */}
      <section className="mx-auto max-w-3xl px-6 pb-28">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-card px-8 py-16 text-center">
          <div className="aurora absolute left-1/2 top-0 h-40 w-96 -translate-x-1/2 bg-[#7c5cf0]/18 blur-[90px] pointer-events-none" />
          <div className="relative">
            <h2 className="text-2xl font-semibold tracking-tight">Need help with HabitTrack?</h2>
            <p className="mt-3 text-muted">
              Email us at{" "}
              <a
                className="text-[#a48bff] underline-offset-4 hover:underline"
                href={`mailto:${SUPPORT_EMAIL}`}
              >
                {SUPPORT_EMAIL}
              </a>
              .
            </p>
          </div>
        </div>
      </section>

    </main>
  );
}
