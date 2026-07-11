import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

const STRIPE_BUY_BUTTON_SCRIPT_SRC = "https://js.stripe.com/v3/buy-button.js";
const STRIPE_BUY_BUTTON_SCRIPT_ID = "stripe-buy-button-script";
const STRIPE_BUY_BUTTON_ID = "buy_btn_1Ts2DAIsSC5GWqg7HJYiPHH8";

export const Route = createFileRoute("/payments")({
  component: Payments,
});

function Payments() {
  const stripePublishableKey = import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY as string | undefined;
  const [isStripeScriptReady, setIsStripeScriptReady] = useState(false);

  useEffect(() => {
    const existingScript =
      document.getElementById(STRIPE_BUY_BUTTON_SCRIPT_ID) ??
      document.querySelector<HTMLScriptElement>(`script[src="${STRIPE_BUY_BUTTON_SCRIPT_SRC}"]`);

    const markReady = () => setIsStripeScriptReady(true);

    if (existingScript) {
      existingScript.addEventListener("load", markReady);
      markReady();

      return () => existingScript.removeEventListener("load", markReady);
    }

    const script = document.createElement("script");
    script.id = STRIPE_BUY_BUTTON_SCRIPT_ID;
    script.src = STRIPE_BUY_BUTTON_SCRIPT_SRC;
    script.async = true;
    script.addEventListener("load", markReady);
    document.head.appendChild(script);

    return () => script.removeEventListener("load", markReady);
  }, []);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="relative overflow-hidden bg-hero-soft">
        <div
          aria-hidden
          className="absolute -top-40 -right-40 h-[520px] w-[520px] rounded-full blur-3xl opacity-40 -z-10"
          style={{ background: "var(--lavender)" }}
        />
        <div className="max-w-6xl mx-auto px-6 pt-24 pb-20 md:pt-28 md:pb-28">
          <div className="max-w-4xl">
            <p className="text-xs uppercase tracking-[0.2em] text-primary opacity-90 lowercase">
              early access
            </p>
            <h1 className="mt-6 text-5xl md:text-6xl font-semibold leading-tight tracking-tight text-primary lowercase">
              you're in.
              <br />
              back your commitment.
            </h1>
            <p className="mt-6 text-lg text-foreground max-w-2xl lowercase">
              you've taken the first step. this locks in your founding spot and gets you
              everything below.
            </p>
            <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] items-start">
              <div className="rounded-3xl border border-border bg-background/80 p-6 shadow-[var(--shadow-elegant)]">
                <h2 className="text-3xl font-semibold text-primary lowercase">what you get</h2>
                <ul className="mt-5 space-y-4 text-sm text-foreground lowercase">
                  {[
                    ["🔒", "£8.99/month - locked in for life"],
                    ["⭐", "founding member - you help shape what we build"],
                    ["💬", "first access to private community + human support"],
                    ["📞", "a direct line to the founders to suggest more"],
                    ["🌱", "your backing funds free access for people who can't pay"],
                    ["•", "early access to private event tickets"],
                    ["•", "our partner programme (discounts at spas, cinemas and more)"],
                  ].map(([icon, text]) => (
                    <li key={text} className="flex gap-4">
                      <span className="mt-0.5 w-6 shrink-0 text-center text-base leading-none">
                        {icon}
                      </span>
                      <span>{text}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="mb-3 text-sm text-muted-foreground lowercase">
                  no streaks to lose. relapse resets, never erases - your progress stays.
                </p>
                <h2 className="mb-5 text-2xl font-semibold text-primary lowercase">
                  back my commitment — £8.99/month
                </h2>
                {stripePublishableKey && isStripeScriptReady ? (
                  <stripe-buy-button
                    buy-button-id={STRIPE_BUY_BUTTON_ID}
                    publishable-key={stripePublishableKey}
                    style={{ display: "block" }}
                  />
                ) : stripePublishableKey ? (
                  <p className="text-sm text-muted-foreground lowercase">loading checkout...</p>
                ) : (
                  <p className="text-sm text-destructive lowercase">
                    stripe checkout is not configured yet.
                  </p>
                )}
                <p className="mt-3 text-sm text-muted-foreground lowercase">
                  cancel anytime. no pressure, no guilt.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
