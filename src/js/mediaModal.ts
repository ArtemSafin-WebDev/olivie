import gsap from "gsap";
import { ScrollTrigger, Flip } from "gsap/all";
import Swiper from "swiper";
import { Navigation } from "swiper/modules";

gsap.registerPlugin(ScrollTrigger, Flip);

import "swiper/css";

export default function mediaModal() {
  const mediaModal = document.querySelector<HTMLElement>(".media-modal");
  if (mediaModal) {
    const container = mediaModal.querySelector<HTMLElement>(".swiper");
    if (!container) return;

    const instance = new Swiper(container, {
      modules: [Navigation],
      speed: 600,
      longSwipesRatio: 0.2,

      navigation: {
        prevEl: mediaModal.querySelector<HTMLButtonElement>(
          ".media-modal__slider-arrow--prev"
        ),
        nextEl: mediaModal.querySelector<HTMLButtonElement>(
          ".media-modal__slider-arrow--next"
        ),
      },
      on: {
        slideChange: () => {
          document.dispatchEvent(new CustomEvent("media:slideChange"));
        },
      },
    });

    document.addEventListener("gallery:selectSlide", ((
      event: CustomEvent<{
        index: number;
      }>
    ) => {
      const index = event.detail.index;
      console.log("Setting slider to index", index);
      instance.slideTo(index);
    }) as EventListener);
  }
}
