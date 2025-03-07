import Plyr from "plyr";
import "plyr/dist/plyr.css";

export default function player() {
  const elements = Array.from(
    document.querySelectorAll<HTMLElement>(".js-player")
  );
  elements.forEach((element) => {
    const instance = new Plyr(element);

    document.addEventListener("modal:close", () => {
      instance.pause();
    });
    document.addEventListener("media:slideChange", () => {
      instance.pause();
    });
  });
}
