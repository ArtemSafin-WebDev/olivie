import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import DrawSVGPlugin from "./lib/DrawSVGPlugin";

gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin);

export default function ellipsisBlock() {
  const elements = Array.from(
    document.querySelectorAll<HTMLElement>(".article__ellipsis-block")
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
