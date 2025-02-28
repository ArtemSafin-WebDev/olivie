import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

export default function whatWeDo() {
  const elements = Array.from(
    document.querySelectorAll<HTMLElement>(".what-we-do")
  );

  elements.forEach((element) => {
    const cards = Array.from(
      element.querySelectorAll<HTMLElement>(".what-we-do__card")
    );
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: element,
        start: "top bottom-=30%",
      },
    });

    cards.forEach((card, cardIndex) => {
      const cardTl = gsap.timeline();
      const icon = card.querySelector<HTMLElement>(".what-we-do__card-icon");
      cardTl
        .from(card, {
          autoAlpha: 0,
          duration: 0.6,
        })
        .addLabel("afterReveal");
      cardTl.fromTo(
        icon,
        {
          maskImage: "conic-gradient(black 0deg, black 0deg, transparent 0deg)",
        },
        {
          maskImage:
            "conic-gradient(black 0deg, black 360deg, transparent 360deg)",
        },
        "-=0.4"
      );

      tl.add(cardTl, 0.2 * cardIndex);
    });
  });
}
