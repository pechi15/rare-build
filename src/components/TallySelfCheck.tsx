import { useEffect } from "react";

declare global {
  interface Window {
    Tally?: {
      loadEmbeds: () => void;
    };
  }
}

const TALLY_SCRIPT_SRC = "https://tally.so/widgets/embed.js";

export function TallySelfCheck() {
  const formId = import.meta.env.VITE_TALLY_SELF_CHECK_FORM_ID as string | undefined;
  const trimmedFormId = formId?.trim();
  const formUrl = trimmedFormId ? `https://tally.so/r/${trimmedFormId}` : "https://tally.so";
  const embedUrl = trimmedFormId
    ? `https://tally.so/embed/${trimmedFormId}?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1`
    : "";

  useEffect(() => {
    if (!trimmedFormId) return;

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
    document.body.appendChild(script);

    return () => {
      script.onload = null;
      script.remove();
    };
  }, [trimmedFormId]);

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

      {trimmedFormId ? (
        <>
          <iframe
            title="Lavender self-check form"
            src={embedUrl}
            loading="lazy"
            width="100%"
            height="760"
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
            scrolling="no"
            className="block min-h-[680px] w-full rounded-2xl bg-answer-row md:min-h-[760px]"
          />
          <p className="mt-4 text-center text-sm text-muted-foreground lowercase">
            having trouble viewing the form?{" "}
            <a
              href={formUrl}
              target="_blank"
              rel="noreferrer"
              className="font-medium text-primary underline-offset-4 hover:underline"
            >
              open it directly
            </a>
            .
          </p>
        </>
      ) : (
        <div className="rounded-2xl border border-border bg-answer-row px-5 py-8 text-center">
          <p className="text-base font-medium text-primary lowercase">
            self-check form unavailable
          </p>
          <p className="mt-2 text-sm text-foreground lowercase">
            add your Tally form id to VITE_TALLY_SELF_CHECK_FORM_ID to show the embedded form here.
          </p>
          <a
            href={formUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-flex items-center rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-[var(--shadow-warm)] transition hover:opacity-95 lowercase"
          >
            open tally
          </a>
        </div>
      )}
    </div>
  );
}
