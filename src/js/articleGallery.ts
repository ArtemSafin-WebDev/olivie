import Swiper from "swiper";
import "swiper/css";
import { Navigation, Pagination } from "swiper/modules";

export default function articleGallery() {
  const elements = Array.from(
    document.querySelectorAll<HTMLElement>(".article-text__gallery")
  );
  elements.forEach((element) => {
    const container = element.querySelector<HTMLElement>(".swiper");
    if (!container) return;
    new Swiper(container, {
      slidesPerView: 1,
      spaceBetween: 10,
      modules: [Navigation, Pagination],
      speed: 600,
      navigation: {
        prevEl: element.querySelector<HTMLButtonElement>(
          ".article-text__gallery-arrow--prev"
        ),
        nextEl: element.querySelector<HTMLButtonElement>(
          ".article-text__gallery-arrow--next"
        ),
      },
      pagination: {
        el: element.querySelector<HTMLElement>(
          ".article-text__gallery-pagination"
        ),
        type: "fraction",
      },
    });
  });
}
