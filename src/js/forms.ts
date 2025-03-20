import Validator from "./classes/Validator";

export default function forms() {
  const elements = Array.from(
    document.querySelectorAll<HTMLFormElement>(".js-form")
  );

  elements.forEach((form) => {
    const formValidator = new Validator(form);
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      formValidator.validate();
      if (formValidator.valid) {
        const validSubmissionEvent = new CustomEvent("submit:valid");
        form.dispatchEvent(validSubmissionEvent);
      }
    });
  });
}
