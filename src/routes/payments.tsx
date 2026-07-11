import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/payments")({
  component: Payments,
});

function Payments() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="relative overflow-hidden bg-hero-soft">
        <div
          aria-hidden
          className="absolute -top-40 -right-40 h-[520px] w-[520px] rounded-full blur-3xl opacity-40 -z-10"
          style={{ background: "var(--lavender)" }}
        />
        <div className="max-w-6xl mx-auto px-6 pt-24 pb-20 md:pt-28 md:pb-28">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.2em] text-primary opacity-90 lowercase">
              early access
            </p>
            <h1 className="mt-6 text-5xl md:text-6xl font-semibold leading-tight tracking-tight text-primary lowercase">
              Join Lavender early.
              <br />
              Help shape Lavender.
            </h1>
            <p className="mt-6 text-lg text-foreground max-w-2xl lowercase">
              Back your commitment and join the first community built around private support
              for gambling recovery. Your early feedback helps Lavender grow in the right way.
            </p>
            <div className="mt-10 grid gap-4 sm:grid-cols-[minmax(0,1fr)_auto] items-center">
              <div>
                <p className="text-3xl font-semibold text-primary lowercase">£8.99 / month</p>
                <p className="mt-2 text-sm text-muted-foreground lowercase">Back your commitment</p>
              </div>
              <a
                href="#tally-form"
                className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-[var(--shadow-elegant)] transition hover:opacity-95 lowercase"
              >
                join early
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6 grid gap-12 lg:grid-cols-[1.2fr_0.8fr] items-start">
          <div className="space-y-6">
            <div className="rounded-3xl border border-border bg-background/80 p-6 shadow-[var(--shadow-elegant)]">
              <h2 className="text-3xl font-semibold text-primary lowercase">Back your commitment</h2>
              <p className="mt-4 text-lg text-foreground lowercase">
                Secure early access to Lavender and help shape the features, community experience,
                and onboarding support as we launch.
              </p>
            </div>
            <div className="rounded-3xl border border-border bg-background/80 p-6 shadow-[var(--shadow-elegant)]">
              <h3 className="text-xl font-semibold text-primary lowercase">How it works</h3>
              <ul className="mt-4 space-y-4 text-sm text-foreground lowercase">
                <li>• Join the early Lavender circle with a simple commitment.</li>
                <li>• We collect your signup through a Tally form, no payment gateway here.</li>
                <li>• You’ll get access details and community-building updates first.</li>
              </ul>
            </div>
          </div>
          <div className="rounded-[2rem] border border-border bg-background p-6 shadow-[var(--shadow-elegant)]">
            <div className="max-w-prose space-y-4">
              <p className="text-sm uppercase tracking-[0.24em] text-primary opacity-80 lowercase">
                waiting list
              </p>
              <h3 className="text-2xl font-semibold text-primary lowercase">Ready to join early?</h3>
              <p className="text-sm text-foreground lowercase">
                Use the form below to reserve your place and help us build Lavender the right way.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="tally-form" className="pb-24 md:pb-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="rounded-[2rem] border border-border bg-background p-6 shadow-[var(--shadow-elegant)]">
            <div className="mb-6 space-y-3 text-center">
              <p className="text-sm uppercase tracking-[0.24em] text-primary opacity-80 lowercase">
                Tally signup form
              </p>
              <h2 className="text-3xl font-semibold text-primary lowercase">Join Lavender early</h2>
              <p className="max-w-2xl mx-auto text-sm text-foreground lowercase">
                Fill out the form below to add yourself to the early access list. Replace
                <code className="rounded bg-muted px-1 py-0.5 text-xs">TALLY_FORM_ID</code> with
                your actual Tally form ID.
              </p>
            </div>
            <div className="aspect-[4/3] w-full overflow-hidden rounded-[1.5rem] border border-border bg-background">
              <iframe
                title="Lavender early access form"
                src="https://tally.so/embed/TALLY_FORM_ID?alignLeft=1&hideTitle=1&transparentBackground=1"
                className="h-full w-full border-0"
                allowTransparency
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
