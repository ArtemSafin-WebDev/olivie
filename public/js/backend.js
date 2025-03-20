document.addEventListener("DOMContentLoaded", () => {
  const forms = Array.from(document.querySelectorAll(".js-form"));
  forms.forEach((form) =>
    form.addEventListener("submit:valid", (event) => {
      event.preventDefault();
      console.log("Valid submission");
    })
  );
});
