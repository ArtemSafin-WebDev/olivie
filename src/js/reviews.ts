import Swiper from "swiper";
import "swiper/css";
import "swiper/css/effect-fade";
import { Navigation, Pagination } from "swiper/modules";

export default function reviews() {
  const elements = Array.from(
    document.querySelectorAll<HTMLElement>(".reviews")
  );
  elements.forEach((element) => {
    const container = element.querySelector<HTMLElement>(".swiper");
    if (!container) return;
    new Swiper(container, {
      autoHeight: true,
      modules: [Navigation, Pagination],
      speed: 600,
      spaceBetween: 60,
      longSwipesRatio: 0.2,
      navigation: {
        prevEl: element.querySelector<HTMLButtonElement>(
          ".reviews__slider-arrow--prev"
        ),
        nextEl: element.querySelector<HTMLButtonElement>(
          ".reviews__slider-arrow--next"
        ),
      },
      pagination: {
        el: element.querySelector<HTMLElement>(".reviews__slider-pagination"),
        clickable: true,
      },
      breakpoints: {
        577: {
          autoHeight: false,
        },
      },
    });
  });
}
