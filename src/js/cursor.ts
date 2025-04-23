import gsap from "gsap";

export default function cursor() {
  const cursor = document.querySelector<HTMLElement>(".cursor");
  if (!cursor) return;
  const cursorLayers = Array.from(
    cursor.querySelectorAll<HTMLImageElement>("img")
  );

  let xTo = gsap.quickTo(cursor, "x", { duration: 0.2, ease: "power3" });
  let yTo = gsap.quickTo(cursor, "y", { duration: 0.2, ease: "power3" });

  window.addEventListener("mousemove", (event) => {
    const e = event as MouseEvent;
    const x = e.clientX;
    const y = e.clientY;

    xTo(x);
    yTo(y);
  });

  const initCursorEffects = () => {
    const abortController = new AbortController();
    const signal = abortController.signal;
    const hoverableItems = Array.from(
      document.querySelectorAll<HTMLElement>(
        ".portfolio-card, .reviews__slider-card, .portfolio__slider-card, .formats__card, .ideas__slider-card, .project-gallery__card, .reviews-catalog__card-image-wrapper-inner"
      )
    );

    hoverableItems.forEach((element) => {
      element.addEventListener(
        "mouseenter",
        () => {
          cursorLayers.forEach((layer) => layer.classList.remove("active"));
          let currentLayer: HTMLElement | null | undefined = null;
          if (element.matches(".reviews__slider-card")) {
            currentLayer = cursorLayers.find(
              (layer) => layer.dataset.cursor === "orange"
            );
          } else if (element.matches(".portfolio-card")) {
            currentLayer = cursorLayers.find(
              (layer) => layer.dataset.cursor === "green"
            );
          } else if (
            element.matches(
              ".formats__card, .project-gallery__card, .reviews-catalog__card-image-wrapper-inner"
            )
          ) {
            currentLayer = cursorLayers.find(
              (layer) => layer.dataset.cursor === "blue"
            );
          } else {
            currentLayer = cursorLayers.find(
              (layer) => layer.dataset.cursor === "violet"
            );
          }

          currentLayer?.classList.add("active");
          document.body.classList.add("custom-cursor");
        },
        {
          signal,
        }
      );
      element.addEventListener(
        "mouseleave",
        () => {
          document.body.classList.remove("custom-cursor");
        },
        {
          signal,
        }
      );
    });

    return () => abortController.abort();
  };

  let removeCursorEffects = initCursorEffects();

  document.addEventListener("cursor:reinit", () => {
    removeCursorEffects();
    removeCursorEffects = initCursorEffects();
  });
}
