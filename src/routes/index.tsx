import { createFileRoute } from "@tanstack/react-router";

import { TallySelfCheck } from "../components/TallySelfCheck";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Assessment />
      <Community />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-lg bg-background/70 border-b border-border/60">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center gap-2">
          <LavenderMark />
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground lowercase">
          <a href="#check" className="hover:text-primary transition">
            self-check
          </a>
          <a href="#community" className="hover:text-primary transition">
            community
          </a>
        </nav>
        <a
          href="#check"
          className="inline-flex items-center rounded-full px-4 py-2 text-sm font-medium text-primary-foreground shadow-[var(--shadow-elegant)] bg-primary lowercase"
        >
          take the check
        </a>
      </div>
    </header>
  );
}

function LavenderMark() {
  return (
    <span
      className="inline-flex items-center rounded-full bg-primary px-3 py-1.5 text-sm font-medium text-primary-foreground lowercase"
      style={{ letterSpacing: "-0.02em" }}
    >
      lavender
    </span>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-hero-soft">
      <div
        aria-hidden
        className="absolute -top-40 -right-40 h-[520px] w-[520px] rounded-full blur-3xl opacity-40 -z-10"
        style={{ background: "var(--lavender)" }}
      />
      <div
        aria-hidden
        className="absolute -bottom-32 -left-32 h-[420px] w-[420px] rounded-full blur-3xl opacity-30 -z-10"
        style={{ background: "var(--primary-glow)" }}
      />

      <div className="max-w-6xl mx-auto px-6 pt-20 pb-24 md:pt-28 md:pb-32">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/60 px-3 py-1 text-xs uppercase tracking-[0.18em] text-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            private support in progress
          </span>
          <h1 className="mt-6 text-5xl md:text-7xl font-semibold leading-[1.02] tracking-tight text-primary">
            ending gambling
            <br />
            addictions <span className="text-lavender">for good.</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-foreground max-w-2xl lowercase">
            building a support system for you to tackle your addictive habits with a connected
            community. private, patient, and built with the people who need it most.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="#check"
              className="inline-flex items-center rounded-full px-6 py-3 text-sm font-medium text-primary-foreground shadow-[var(--shadow-elegant)] hover:opacity-95 transition bg-primary lowercase"
            >
              do you think you have a gambling problem?
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Assessment() {
  return (
    <section id="check" className="relative py-24 md:py-32">
      <div className="max-w-4xl mx-auto px-6">
        <TallySelfCheck />

        <p className="mt-6 text-center text-xs text-muted-foreground lowercase">
          your answers are private. lavender is a support tool, not a substitute for medical advice.
        </p>
      </div>
    </section>
  );
}

function Community() {
  return (
    <section id="community" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-12 gap-12 items-center">
        <div className="md:col-span-6">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-primary lowercase">
            change the game
            <br />
            together.
          </h2>
          <p className="mt-6 text-lg text-foreground max-w-lg lowercase">
            lavender turns gambling recovery into a team sport. connect with your circle, own your
            goals, and rise up the leaderboard as you build a gamble-free life.
          </p>
          <ul className="mt-8 space-y-4">
            {[
              [
                "own the streak",
                "set your goals and gamify your progress. every day you stay gamble-free keeps your streak alive and helps the team win.",
              ],
              [
                "live accountability",
                "your circle has your back. if you step near a casino or open a gambling site, your network gets a silent, instant ping to step in.",
              ],
              [
                "beyond the screen",
                "take it offline. find local chapters, join casual in-person meetups, and connect with your community over coffee, sports, or real-world hangouts.",
              ],
            ].map(([t, d]) => (
              <li key={t} className="flex gap-4">
                <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-primary" />
                <div>
                  <div className="font-medium text-primary lowercase">{t}</div>
                  <div className="text-sm text-foreground lowercase">{d}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:col-span-6">
          <div
            className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-border bg-primary"
            style={{ boxShadow: "var(--shadow-elegant)" }}
          >
            <div className="absolute inset-0 p-8 flex flex-col justify-between text-primary-foreground">
              <div className="text-xs uppercase tracking-[0.2em] opacity-80 lowercase">
                support circle
              </div>
              <div>
                <div className="text-5xl md:text-6xl font-semibold leading-none lowercase">
                  a quieter
                  <br />
                  kind of
                  <br />
                  recovery.
                </div>
                <div className="mt-6 text-sm opacity-80 max-w-xs lowercase">
                  built with clinicians, ex-gamblers, and the people who love them.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <LavenderMark />
          <div className="text-xs text-muted-foreground lowercase">
            ending gambling addictions for good.
          </div>
        </div>
        <div className="text-xs text-muted-foreground lowercase">
          © {new Date().getFullYear()} lavender. if you're in crisis, please call your local
          helpline.
        </div>
      </div>
    </footer>
  );
}
