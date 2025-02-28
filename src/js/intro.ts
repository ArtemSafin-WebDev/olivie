import Swiper from "swiper";
import { Navigation, EffectFade, Controller, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/controller";

export default function intro() {
  const elements = Array.from(document.querySelectorAll<HTMLElement>(".intro"));

  elements.forEach((element) => {
    const textContainer = element.querySelector<HTMLElement>(
      ".intro__text-slider .swiper"
    );
    const imageContainer = element.querySelector<HTMLElement>(
      ".intro__images-slider .swiper"
    );
    if (!textContainer || !imageContainer) return;

    const textInstance = new Swiper(textContainer, {
      speed: 800,
      effect: "fade",
      modules: [EffectFade, Navigation, Pagination, Controller],
      fadeEffect: {
        crossFade: true,
      },
      longSwipesRatio: 0.2,
      navigation: {
        prevEl: element.querySelector<HTMLButtonElement>(".intro__arrow--prev"),
        nextEl: element.querySelector<HTMLButtonElement>(".intro__arrow--next"),
      },
      pagination: {
        el: element.querySelector<HTMLElement>(".intro__pagination"),
        clickable: true,
      },
    });

    const imageInstance = new Swiper(imageContainer, {
      speed: 800,
      effect: "fade",
      longSwipesRatio: 0.2,
      modules: [EffectFade, Controller],
      fadeEffect: {
        crossFade: true,
      },
    });

    textInstance.controller.control = imageInstance;
    imageInstance.controller.control = textInstance;
  });
}
