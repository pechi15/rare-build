import type { HTMLAttributes } from "react";

declare module "react/jsx-runtime" {
  namespace JSX {
    interface IntrinsicElements {
      "stripe-buy-button": HTMLAttributes<HTMLElement> & {
        "buy-button-id": string;
        "publishable-key": string;
      };
    }
  }
}
