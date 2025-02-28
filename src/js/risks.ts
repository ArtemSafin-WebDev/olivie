import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import DrawSVGPlugin from "./lib/DrawSVGPlugin";

gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin);

export default function risks() {
  const elements = Array.from(document.querySelectorAll<HTMLElement>(".risks"));

  elements.forEach((element) => {
    gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: element,
          start: "top bottom-=30%",
        },
      });
      tl.fromTo(
        "circle",
        {
          drawSVG: "25% 25%",
        },
        {
          drawSVG: "25% 125%",
          duration: 1,
        }
      );
    }, element);
  });
}
