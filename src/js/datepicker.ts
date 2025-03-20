import AirDatepicker from "air-datepicker";
import "air-datepicker/air-datepicker.css";

export default function datepicker() {
  const elements = Array.from(
    document.querySelectorAll<HTMLElement>(".js-datepicker")
  );

  elements.forEach((element) => {
    new AirDatepicker(element, {
      minDate: new Date(),
      container: element.parentElement!,
    });
  });
}
