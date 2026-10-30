import Link from "next/link";
import { Logo } from "./Logo";
import { SUPPORT_EMAIL } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-[rgba(5,4,15,0.6)] backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 sm:flex-row sm:items-start sm:justify-between">
        <div className="max-w-xs">
          <div className="flex items-center gap-2.5 font-semibold">
            <Logo size={40} />
            AthenaLab
          </div>
          <p className="mt-3 text-sm leading-6 text-muted">
            Thoughtfully crafted apps for a more intentional life.
          </p>
        </div>
        <div className="flex gap-16 text-sm">
          <div className="flex flex-col gap-3">
            <span className="font-medium">Apps</span>
            <Link href="/habittrack" className="text-muted transition hover:text-foreground">HabitTrack</Link>
            <Link href="/habittrack/privacy-policy" className="text-muted transition hover:text-foreground">Privacy Policy</Link>
          </div>
          <div className="flex flex-col gap-3">
            <span className="font-medium">Support</span>
            <a href={`mailto:${SUPPORT_EMAIL}`} className="text-muted transition hover:text-foreground">
              {SUPPORT_EMAIL}
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-border py-5 text-center text-xs text-muted">
        © 2026 AthenaLab. All rights reserved.
      </div>
    </footer>
  );
}
