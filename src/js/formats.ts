import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

export default function formats() {
  const elements = Array.from(
    document.querySelectorAll<HTMLElement>(".formats__card")
  );

  elements.forEach((element) => {
    gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: element,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
          markers: false,
        },
      });

      tl.to("path", {
        rotate: 45,
        transformOrigin: "center",
        ease: "none",
      });
    }, element);
  });
}
