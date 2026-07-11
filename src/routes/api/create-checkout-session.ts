import { createFileRoute } from "@tanstack/react-router";
import Stripe from "stripe";

export const Route = createFileRoute("/api/create-checkout-session")({
  server: {
    handlers: {
      POST: async ({ request }: { request: Request }) => {
        const secretKey = process.env.STRIPE_SECRET_KEY;
        const priceId = process.env.STRIPE_PRICE_ID;

        if (!secretKey || !priceId) {
          return Response.json(
            { error: "Stripe is not configured yet." },
            { status: 500 },
          );
        }

        const stripe = new Stripe(secretKey);
        const origin = new URL(request.url).origin;

        const session = await stripe.checkout.sessions.create({
          mode: "subscription",
          line_items: [
            {
              price: priceId,
              quantity: 1,
            },
          ],
          success_url: `${origin}/payments/success`,
          cancel_url: `${origin}/payments/cancelled`,
        });

        if (!session.url) {
          return Response.json(
            { error: "Stripe did not return a checkout URL." },
            { status: 500 },
          );
        }

        return Response.json({ url: session.url });
      },
    },
  },
});
