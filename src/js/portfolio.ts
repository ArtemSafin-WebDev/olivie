import Swiper from "swiper";
import "swiper/css";
import { Navigation } from "swiper/modules";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

export default function portfolio() {
  const elements = Array.from(
    document.querySelectorAll<HTMLElement>(".portfolio")
  );
  elements.forEach((element) => {
    const cards = Array.from(
      element.querySelectorAll<HTMLElement>(".portfolio__slider-card")
    );
    gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: element,
          start: "top bottom-=30%",
          markers: false,
        },
      });

      cards.forEach((card, cardIndex) => {
        const top = card.querySelector<HTMLElement>(
          ".portfolio__slider-card-top"
        );
        const title = card.querySelector<HTMLElement>(
          ".portfolio__slider-card-title"
        );
        const text = card.querySelector<HTMLElement>(
          ".portfolio__slider-card-text"
        );
        const imageContainer = card.querySelector<HTMLElement>(
          ".portfolio__slider-card-image-container"
        );
        const cardTl = gsap.timeline();
        cardTl
          .from(card, {
            autoAlpha: 0,
            y: 40,
            duration: 0.6,
            ease: "power2.out",
          })
          .addLabel("afterReveal");

        if (top)
          cardTl.from(
            top,
            {
              autoAlpha: 0,
              duration: 0.4,
            },
            "afterReveal"
          );
        if (title)
          cardTl.from(
            title,
            {
              autoAlpha: 0,
              duration: 0.4,
            },
            "afterReveal"
          );
        if (text)
          cardTl.from(
            text,
            {
              autoAlpha: 0,
              duration: 0.4,
            },
            "afterReveal"
          );

        if (imageContainer)
          cardTl.from(imageContainer, {
            duration: 0.6,
            clipPath: "inset(0 100% 0 0)",
            ease: "power2.out",
          });

        tl.add(cardTl, 0.2 * cardIndex);
      });
    }, element);

    const container = element.querySelector<HTMLElement>(".swiper");
    if (!container) return;

    new Swiper(container, {
      slidesPerView: "auto",
      speed: 600,
      modules: [Navigation],
      navigation: {
        prevEl: element.querySelector<HTMLButtonElement>(
          ".portfolio__arrow--prev"
        ),
        nextEl: element.querySelector<HTMLButtonElement>(
          ".portfolio__arrow--next"
        ),
      },
    });
  });
}
