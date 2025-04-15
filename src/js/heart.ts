import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import DrawSVGPlugin from "./lib/DrawSVGPlugin";

gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin);

export default function heart() {
  const elements = Array.from(
    document.querySelectorAll<HTMLElement>(".js-heart")
  );

  elements.forEach((element) => {
    gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: element,
          start: "top bottom-=30%",
        },
      });
      tl.fromTo(
        "path",
        {
          drawSVG: "7.7% 7.7%",
        },
        {
          drawSVG: "7.7% 107.7%",
          duration: 2,
          ease: "power1.inOut",
        }
      );
    }, element);
  });
}
