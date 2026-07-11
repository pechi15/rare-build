import { useEffect } from "react";

declare global {
  interface Window {
    Tally?: {
      loadEmbeds: () => void;
    };
  }
}

const TALLY_SCRIPT_SRC = "https://tally.so/widgets/embed.js";
const LAVENDER_TALLY_EMBED_URL =
  "https://tally.so/embed/0Qy7gN?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1";
const LAVENDER_TALLY_FORM_URL = "https://tally.so/r/0Qy7gN";

export function TallySelfCheck() {
  useEffect(() => {
    const existingScript = document.querySelector<HTMLScriptElement>(
      `script[src="${TALLY_SCRIPT_SRC}"]`,
    );

    const loadEmbeds = () => window.Tally?.loadEmbeds();

    if (existingScript) {
      if (window.Tally) {
        loadEmbeds();
      } else {
        existingScript.addEventListener("load", loadEmbeds);
      }

      return () => existingScript.removeEventListener("load", loadEmbeds);
    }

    const script = document.createElement("script");
    script.src = TALLY_SCRIPT_SRC;
    script.async = true;
    script.onload = loadEmbeds;
    script.onerror = loadEmbeds;
    document.body.appendChild(script);

    return () => {
      script.onload = null;
      script.onerror = null;
    };
  }, []);

  return (
    <div
      className="rounded-3xl border border-border bg-card/90 backdrop-blur p-4 md:p-6"
      style={{ boxShadow: "var(--shadow-elegant)" }}
    >
      <div className="mb-5">
        <div className="text-xs uppercase tracking-[0.18em] text-primary lowercase">self-check</div>
        <h2 className="mt-3 text-2xl md:text-3xl font-semibold text-primary leading-snug lowercase">
          do you think you have a gambling problem?
        </h2>
        <p className="mt-3 text-foreground lowercase">
          take a private self-check and share only what feels useful.
        </p>
      </div>

      <iframe
        data-tally-src={LAVENDER_TALLY_EMBED_URL}
        loading="lazy"
        width="100%"
        height="1"
        frameBorder="0"
        marginHeight={0}
        marginWidth={0}
        title="Lavender - ending gambling addiction for good"
        className="block w-full rounded-2xl bg-answer-row"
      />
      <p className="mt-4 text-center text-sm text-muted-foreground lowercase">
        having trouble viewing the form?{" "}
        <a
          href={LAVENDER_TALLY_FORM_URL}
          target="_blank"
          rel="noreferrer"
          className="font-medium text-primary underline-offset-4 hover:underline"
        >
          open it directly
        </a>
        .
      </p>
    </div>
  );
}
