import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

export default function portfolioCategories() {
  const elements = Array.from(
    document.querySelectorAll<HTMLElement>(".portfolio-results__categories")
  );
  elements.forEach((element) => {
    const btn = element.querySelector<HTMLButtonElement>(
      ".portfolio-results__show-all"
    );
    btn?.addEventListener("click", async (event) => {
      event.preventDefault();

      if (!document.startViewTransition) {
        element.classList.toggle("show-all");
        ScrollTrigger.refresh();
        return;
      }
      const transition = document.startViewTransition(() => {
        element.classList.toggle("show-all");
      });
      await transition.finished;
      ScrollTrigger.refresh();
    });
  });
}
