import { Link, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/payments/cancelled")({
  component: PaymentsCancelled,
});

function PaymentsCancelled() {
  return (
    <main className="min-h-screen bg-background px-6 py-24 text-foreground">
      <section className="mx-auto max-w-2xl">
        <p className="text-xs uppercase tracking-[0.2em] text-primary opacity-90 lowercase">
          checkout cancelled
        </p>
        <h1 className="mt-6 text-4xl font-semibold leading-tight tracking-tight text-primary lowercase">
          no payment was taken.
        </h1>
        <p className="mt-6 text-lg lowercase">
          you can return to the payments page whenever you are ready to join lavender early.
        </p>
        <Link
          to="/payments"
          className="mt-10 inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-[var(--shadow-elegant)] transition hover:opacity-95 lowercase"
        >
          back to payments
        </Link>
      </section>
    </main>
  );
}
