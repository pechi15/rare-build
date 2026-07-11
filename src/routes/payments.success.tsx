import { Link, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/payments/success")({
  component: PaymentsSuccess,
});

function PaymentsSuccess() {
  return (
    <main className="min-h-screen bg-background px-6 py-24 text-foreground">
      <section className="mx-auto max-w-2xl">
        <p className="text-xs uppercase tracking-[0.2em] text-primary opacity-90 lowercase">
          payment confirmed
        </p>
        <h1 className="mt-6 text-4xl font-semibold leading-tight tracking-tight text-primary lowercase">
          welcome to lavender early access.
        </h1>
        <p className="mt-6 text-lg lowercase">
          thank you for backing your commitment. we will share your early access details soon.
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
