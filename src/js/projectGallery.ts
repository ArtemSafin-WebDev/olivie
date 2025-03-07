import gsap from "gsap";
import { ScrollTrigger, Flip } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, Flip);

import "swiper/css";

export default function projectGallery() {
  const elements = Array.from(
    document.querySelectorAll<HTMLElement>(".project-gallery")
  );

  elements.forEach((element) => {
    const btn = element.querySelector<HTMLButtonElement>(
      ".project-gallery__show-more"
    );

    const cards = Array.from(
      element.querySelectorAll<HTMLLinkElement>(".project-gallery__card")
    );

    btn?.addEventListener("click", async (event) => {
      event.preventDefault();
      const state = Flip.getState(
        ".project-gallery, .project-gallery__list-item, .project-gallery__show-more"
      );
      element.classList.toggle("show-all");
      Flip.from(state, {
        duration: 1,
        nested: true,
        absoluteOnLeave: true,
        onEnter: (elements) =>
          gsap.fromTo(
            elements,
            { opacity: 0 },
            { opacity: 1, duration: 0.4, delay: 0 }
          ),
        onLeave: (elements) =>
          gsap.fromTo(elements, { opacity: 1 }, { opacity: 0, duration: 0.4 }),
        onComplete: () => {
          ScrollTrigger.refresh();
        },
      });
    });

    cards.forEach((card, cardIndex) => {
      card.addEventListener("click", (event) => {
        event.preventDefault();
        const index = card.hasAttribute("data-slide-index")
          ? Number(card.getAttribute("data-slide-index"))
          : cardIndex;

        const selectSlideEvent = new CustomEvent("gallery:selectSlide", {
          bubbles: true,
          detail: {
            index,
          },
        });

        document.dispatchEvent(selectSlideEvent);
      });
    });
  });
}
