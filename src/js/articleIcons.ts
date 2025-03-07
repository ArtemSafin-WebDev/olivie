import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function articleIcons() {
  const elements = Array.from(
    document.querySelectorAll<HTMLElement>(".article-text__icon")
  );
  elements.forEach((element) => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: element,
        start: "top bottom",
      },
    });
    tl.from(element, {
      scale: 0,
      duration: 0.4,
      ease: "power2.out",
    });
  });
}
