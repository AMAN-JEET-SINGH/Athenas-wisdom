import Link from "next/link";
import { Logo } from "./Logo";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/60 backdrop-blur-2xl backdrop-saturate-150">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-3 group">
          <Logo size={46} />
          <span className="font-semibold tracking-tight transition-opacity group-hover:opacity-75">AthenaLab</span>
        </Link>
        <nav className="flex items-center gap-1 text-sm text-muted">
          <Link href="/#apps" className="rounded-full px-4 py-2 transition-all duration-200 hover:bg-white/[0.06] hover:text-foreground">
            Apps
          </Link>
          <Link href="/#about" className="hidden rounded-full px-4 py-2 transition-all duration-200 hover:bg-white/[0.06] hover:text-foreground sm:block">
            About
          </Link>
          <Link href="/#contact" className="rounded-full border border-border bg-card px-4 py-2 text-foreground transition-all duration-200 hover:border-[rgba(124,92,240,0.45)] hover:bg-[rgba(124,92,240,0.08)] hover:shadow-[0_0_16px_rgba(124,92,240,0.2)]">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
