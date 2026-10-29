import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import { DEVELOPER, SUPPORT_EMAIL } from "@/lib/site";

export const metadata: Metadata = {
  title: "HabitTrack Privacy Policy",
  description:
    "How HabitTrack collects, uses and shares information when you use the HabitTrack Android app.",
};

function Section({ n, title, children }: { n: number; title: string; children: ReactNode }) {
  return (
    <section id={`s${n}`} className="scroll-mt-24 border-t border-border py-10">
      <h2 className="text-2xl font-semibold tracking-tight">
        <span className="mr-3 font-mono text-base text-accent">{String(n).padStart(2, "0")}</span>
        {title}
      </h2>
      <div className="mt-5 space-y-4 leading-7 text-muted [&_strong]:font-medium [&_strong]:text-foreground">
        {children}
      </div>
    </section>
  );
}

function Sub({ children }: { children: ReactNode }) {
  return <h3 className="pt-2 text-lg font-medium text-foreground">{children}</h3>;
}

function List({ items }: { items: ReactNode[] }) {
  return (
    <ul className="space-y-2.5">
      {items.map((item, i) => (
        <li key={i} className="flex gap-3">
          <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function Table({ head, rows }: { head: string[]; rows: ReactNode[][] }) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-border">
      <table className="w-full min-w-[560px] text-left text-sm">
        <thead className="bg-white/5 text-foreground">
          <tr>
            {head.map((h) => (
              <th key={h} className="px-4 py-3 font-medium">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-t border-border align-top">
              {row.map((cell, j) => (
                <td key={j} className="px-4 py-3 leading-6">{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const ext = (href: string, label: string) => (
  <a href={href} target="_blank" rel="noopener noreferrer">{label}</a>
);

const toc = [
  "Information We Collect",
  "How We Use Your Information",
  "Where Your Data Is Stored",
  "AI Habit Coach",
  "Third-Party Services",
  "Advertising",
  "Purchases and Subscriptions",
  "Notifications and Alarms",
  "Data Retention",
  "Your Rights and Choices",
  "Children's Privacy",
  "Security",
  "Changes to This Policy",
  "Contact Us",
];

export default function PrivacyPolicyPage() {
  return (
    <main className="relative isolate overflow-hidden">
      <div className="absolute left-1/2 top-[-160px] -z-10 h-[360px] w-[640px] -translate-x-1/2 rounded-full bg-accent/20 blur-[130px]" />

      <div className="mx-auto max-w-3xl px-6 pb-24 pt-16">
        <Link href="/habittrack" className="text-sm text-muted transition hover:text-foreground">
          ← HabitTrack
        </Link>
        <h1 className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl">
          Privacy Policy for <span className="gradient-text">HabitTrack</span>
        </h1>
        <p className="mt-5 text-sm text-muted">
          <strong className="font-medium text-foreground">Effective date:</strong> 29 October 2026
          <span className="mx-3 opacity-40">|</span>
          <strong className="font-medium text-foreground">Last updated:</strong> 29 October 2026
        </p>

        <div className="policy mt-8 space-y-4 leading-7 text-muted">
          <p>
            This Privacy Policy explains how HabitTrack (&ldquo;the app&rdquo;, &ldquo;we&rdquo;,
            &ldquo;us&rdquo;, &ldquo;our&rdquo;), developed by {DEVELOPER}, collects, uses, and
            shares information when you use the HabitTrack Android app (package name{" "}
            <code className="rounded bg-white/10 px-1.5 py-0.5 font-mono text-sm text-foreground">
              com.havit.habittrack
            </code>
            ).
          </p>
          <p>
            By using HabitTrack, you agree to the practices described in this policy. If you do not
            agree, please do not use the app.
          </p>
        </div>

        <nav aria-label="Table of contents" className="mt-10 rounded-2xl border border-border bg-card p-6">
          <p className="mb-4 text-sm font-medium text-foreground">Contents</p>
          <ol className="grid gap-x-8 gap-y-2 text-sm sm:grid-cols-2">
            {toc.map((t, i) => (
              <li key={t}>
                <a href={`#s${i + 1}`} className="text-muted transition hover:text-accent">
                  <span className="mr-2 font-mono text-xs opacity-60">{String(i + 1).padStart(2, "0")}</span>
                  {t}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        <div className="policy mt-12">
          <Section n={1} title="Information We Collect">
            <Sub>1.1 Information you give us</Sub>
            <Table
              head={["Data", "When it is collected", "Why"]}
              rows={[
                [<strong key="a">Name, email address</strong>, "When you create an account with email or sign in with Google", "To create and secure your account"],
                [<strong key="a">Password</strong>, "When you sign up with email", "Handled entirely by Firebase Authentication. We never see or store your password"],
                [<strong key="a">Habit data</strong>, "When you create and track habits", "To provide the core habit-tracking features. Includes habit names, descriptions, schedules, reminder times, targets, completions, streaks, timer and count values"],
                [<strong key="a">In-app credits and stakes</strong>, "When you use credits, stakes, or the charity feature", "To run the wallet, commitment, and charity features. Includes credit balance, stake amounts, commitment levels, credits donated in the app"],
                [<strong key="a">AI Habit Coach messages</strong>, "When you chat with the AI Habit Coach (Prime only)", "To generate replies to your questions"],
                [<strong key="a">App settings</strong>, "When you change settings", "To remember your preferences: theme, colours, notification preferences, cloud backup setting"],
              ]}
            />
            <Sub>1.2 Information collected automatically</Sub>
            <Table
              head={["Data", "Collected by", "Why"]}
              rows={[
                [<strong key="a">Advertising ID, device model, OS version, IP address, approximate location derived from IP, ad interactions</strong>, "Google AdMob (only for users who see ads)", "To show and measure ads, and prevent ad fraud"],
                [<strong key="a">App usage events, device information, app instance ID</strong>, "Google Analytics for Firebase", "To understand how the app is used and improve it"],
                [<strong key="a">App integrity signals</strong>, "Firebase App Check and Google Play Integrity", "To confirm requests come from the genuine app and prevent abuse"],
                [<strong key="a">Purchase information</strong>, "Google Play Billing", "To unlock purchases and subscriptions. Includes product purchased, purchase token, order status"],
              ]}
            />
            <p>
              We do <strong>not</strong> collect your precise location, contacts, photos, microphone,
              camera, or files.
            </p>
          </Section>

          <Section n={2} title="How We Use Your Information">
            <p>We use your information to:</p>
            <List
              items={[
                "Create and manage your account and keep it secure.",
                "Store and display your habits, streaks, progress, and reminders.",
                "Send habit reminders and alarm notifications that you set up.",
                "Back up and restore your habits through Cloud Backup (Prime feature).",
                "Provide AI Habit Coach replies based on your questions and habit progress (Prime feature).",
                "Process purchases and unlock Remove Ads or Prime features.",
                "Show ads to free users, and stop showing them to Remove Ads and Prime users.",
                "Analyse app usage to fix bugs and improve features.",
                "Prevent fraud, abuse, and unauthorised access.",
              ]}
            />
            <p>We do <strong>not</strong> sell your personal information.</p>
          </Section>

          <Section n={3} title="Where Your Data Is Stored">
            <List
              items={[
                <><strong>On your device:</strong> Habits, progress, and settings are stored locally on your phone.</>,
                <>
                  <strong>In the cloud (Google Firebase):</strong> Your account (name, email) is stored
                  in Firebase Authentication. Your wallet and credit data is stored in Cloud Firestore
                  when you are signed in. If you are a Prime user and turn on{" "}
                  <strong>Cloud Backup</strong>, your habits and habit history are also stored in Cloud
                  Firestore so you can restore them on another device.
                </>,
              ]}
            />
            <p>
              Firebase servers may be located outside your country, including in the United States.
              Google protects this data under its own security and privacy commitments.
            </p>
          </Section>

          <Section n={4} title="AI Habit Coach">
            <p>The AI Habit Coach is available to Prime subscribers. When you send a message:</p>
            <List
              items={[
                <>
                  Your message, your recent chat messages in that session, and a{" "}
                  <strong>summary of your habits</strong> (habit names, targets, schedules, streaks,
                  and completion counts) are sent to{" "}
                  <strong>Google&apos;s Gemini models through Firebase AI Logic</strong> to generate a reply.
                </>,
                <>We do <strong>not</strong> send your name, email address, or account ID to the AI.</>,
                <>Chat conversations are <strong>not saved</strong> by the app. They are cleared when you leave the chat screen.</>,
                <>
                  Google may process and temporarily store this data under the{" "}
                  {ext("https://ai.google.dev/gemini-api/terms", "Gemini API Terms")} and the{" "}
                  {ext("https://policies.google.com/privacy", "Google Privacy Policy")}. Where the free
                  tier of the Gemini API is used, Google may use submitted content to improve its products.
                </>,
                <>Please <strong>do not share sensitive personal information</strong> (such as health conditions, financial details, or passwords) in the chat.</>,
                <>AI replies can be inaccurate and are <strong>not</strong> medical, mental-health, legal, or financial advice.</>,
              ]}
            />
          </Section>

          <Section n={5} title="Third-Party Services">
            <p>HabitTrack uses the following third-party services, which have their own privacy policies:</p>
            <Table
              head={["Service", "Purpose", "Privacy policy"]}
              rows={[
                ["Firebase Authentication", "Account sign-in", ext("https://firebase.google.com/support/privacy", "firebase.google.com/support/privacy")],
                ["Cloud Firestore", "Cloud storage and backup", ext("https://firebase.google.com/support/privacy", "firebase.google.com/support/privacy")],
                ["Google Analytics for Firebase", "Usage analytics", ext("https://policies.google.com/privacy", "policies.google.com/privacy")],
                ["Firebase AI Logic / Google Gemini", "AI Habit Coach", ext("https://ai.google.dev/gemini-api/terms", "ai.google.dev/gemini-api/terms")],
                ["Firebase App Check / Play Integrity", "Abuse prevention", ext("https://firebase.google.com/support/privacy", "firebase.google.com/support/privacy")],
                ["Google Sign-In (Credential Manager)", "Sign in with Google", ext("https://policies.google.com/privacy", "policies.google.com/privacy")],
                ["Google AdMob", "Advertising", ext("https://policies.google.com/technologies/ads", "policies.google.com/technologies/ads")],
                ["Google Play Billing", "Purchases and subscriptions", ext("https://policies.google.com/privacy", "policies.google.com/privacy")],
              ]}
            />
          </Section>

          <Section n={6} title="Advertising">
            <p>
              Free users see ads served by Google AdMob. AdMob may use your device&apos;s advertising ID
              to show personalised ads.
            </p>
            <p>
              You can reset your advertising ID or opt out of personalised ads at any time in{" "}
              <strong>Android Settings → Google → Ads</strong> (or{" "}
              <strong>Settings → Privacy → Ads</strong> on some devices). Users who buy{" "}
              <strong>Remove Ads</strong> or subscribe to <strong>Prime</strong> do not see ads.
            </p>
          </Section>

          <Section n={7} title="Purchases and Subscriptions">
            <p>
              All payments are processed by <strong>Google Play</strong>. We never receive or store
              your card, UPI, or other payment details. We only receive confirmation of what you
              purchased so we can unlock it.
            </p>
            <p>
              Subscriptions (Prime Monthly and Prime Yearly) renew automatically until cancelled. You
              can manage or cancel them in the{" "}
              <strong>Google Play Store → Profile → Payments &amp; subscriptions → Subscriptions</strong>.
            </p>
            <p>
              <strong>In-app credits</strong> and <strong>stake tokens</strong> are virtual items used
              only inside the app. They have no cash value and cannot be withdrawn. &ldquo;Donations&rdquo;
              made with in-app credits are a motivational in-app feature and do not transfer real money
              unless explicitly stated in the app.
            </p>
          </Section>

          <Section n={8} title="Notifications and Alarms">
            <p>
              HabitTrack asks for permission to send notifications and schedule exact alarms so it can
              remind you about your habits at the times you choose. It also restarts your reminders
              after your phone reboots. You can turn reminders off in the app&apos;s settings or in
              Android Settings at any time.
            </p>
          </Section>

          <Section n={9} title="Data Retention">
            <List
              items={[
                <><strong>Local data</strong> stays on your device until you delete habits, clear app data, or uninstall the app.</>,
                <><strong>Account and cloud data</strong> is kept while your account is active.</>,
                <>When you request account deletion, we delete your account, wallet, and cloud backup data within <strong>30 days</strong>, except where we must keep limited data to meet legal obligations.</>,
                "Google may keep analytics and advertising data according to its own retention settings. Firebase Analytics data is kept for up to 14 months by default.",
              ]}
            />
          </Section>

          <Section n={10} title="Your Rights and Choices">
            <p>
              Depending on where you live (including under India&apos;s Digital Personal Data Protection
              Act, 2023, and the EU/UK GDPR), you may have the right to:
            </p>
            <List
              items={[
                "Access the personal data we hold about you.",
                "Correct inaccurate data.",
                "Delete your account and data.",
                "Withdraw consent (for example, by turning off Cloud Backup, not using the AI Coach, or opting out of personalised ads).",
                "Raise a complaint with your local data protection authority.",
              ]}
            />
            <p>
              <strong>To delete your account and data</strong>, email us at{" "}
              <a href={`mailto:${SUPPORT_EMAIL}?subject=Delete my HabitTrack account`}>{SUPPORT_EMAIL}</a>{" "}
              from the email address linked to your account, with the subject &ldquo;Delete my
              HabitTrack account&rdquo;. We will confirm and complete the deletion within 30 days.
            </p>
            <p>Signing out of the app does <strong>not</strong> delete your cloud data.</p>
          </Section>

          <Section n={11} title="Children's Privacy">
            <p>
              HabitTrack is not intended for children under <strong>13</strong> (or the minimum age
              required in your country). We do not knowingly collect personal data from children. If
              you believe a child has provided us with personal data, contact us and we will delete it.
            </p>
          </Section>

          <Section n={12} title="Security">
            <p>
              We rely on Google Firebase&apos;s security measures, including encrypted connections
              (HTTPS/TLS), Firebase Authentication, and App Check. No method of storage or transmission
              is 100% secure, but we take reasonable steps to protect your information.
            </p>
          </Section>

          <Section n={13} title="Changes to This Policy">
            <p>
              We may update this Privacy Policy from time to time. When we do, we will change the
              &ldquo;Last updated&rdquo; date at the top and, for significant changes, notify you in the
              app or on the Google Play listing.
            </p>
          </Section>

          <Section n={14} title="Contact Us">
            <p>If you have questions about this Privacy Policy or your data, contact:</p>
            <div className="rounded-2xl border border-border bg-card p-6">
              <p className="font-medium text-foreground">{DEVELOPER}</p>
              <p className="text-sm">Developer of HabitTrack</p>
              <p className="mt-3">
                Email: <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>
              </p>
            </div>
          </Section>
        </div>
      </div>
    </main>
  );
}
