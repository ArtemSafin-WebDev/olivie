import Validator from "./classes/Validator";

export default function forms() {
  const elements = Array.from(
    document.querySelectorAll<HTMLElement>(".js-form")
  );

  elements.forEach((element) => {
    const form = element.querySelector("form");

    if (form) {
      const formValidator = new Validator(form);
      form.addEventListener("submit", (event) => {
        event.preventDefault();
        formValidator.validate();
        if (formValidator.valid) {
          const validSubmissionEvent = new CustomEvent("submit:valid");
          form.dispatchEvent(validSubmissionEvent);
        }
      });
    }
  });
}
