export default function fileUpload() {
  const elements = Array.from(document.querySelectorAll(".js-file-upload"));

  elements.forEach((element) => {
    const input = element.querySelector<HTMLInputElement>('input[type="file"]');
    const label = element.querySelector(".js-file-upload-text");
    const fileSize = element.querySelector<HTMLElement>(".js-file-upload-size");
    const form = element.closest<HTMLFormElement>("form");
    const clearBtn = element.querySelector<HTMLButtonElement>(
      ".js-file-upload-clear"
    );

    if (!input || !label || !form) return;

    const originalLabelText = label.textContent;

    input.addEventListener("change", () => {
      if (input.files && input.files.length) {
        const file = input.files[0];
        let fileSizeText = "";
        if (file.size < 1024 * 1024) {
          const fileSizeKB = (file.size / 1024).toFixed(2);
          fileSizeText = `${fileSizeKB} Кб`;
        } else {
          const fileSizeMB = (file.size / (1024 * 1024)).toFixed(2);
          fileSizeText = `${fileSizeMB} Мб`;
        }
        label.textContent = file.name;
        if (fileSize) fileSize.textContent = fileSizeText;
        element.classList.add("file-loaded");
      } else {
        element.classList.remove("file-loaded");
      }
    });

    input.addEventListener("dragenter", () => {
      element.classList.add("dragged");
    });
    input.addEventListener("dragend", () => {
      element.classList.remove("dragged");
    });
    input.addEventListener("dragleave", () => {
      element.classList.remove("dragged");
    });
    input.addEventListener("drop", () => {
      element.classList.remove("dragged");
    });

    if (form) {
      form.addEventListener("reset", () => {
        input.value = "";
        label.textContent = originalLabelText;
        element.classList.remove("file-loaded");
        element.classList.remove("dragged");
      });
    }

    if (clearBtn) {
      clearBtn.addEventListener("click", (event) => {
        event.preventDefault();
        input.value = "";
        label.textContent = originalLabelText;
        element.classList.remove("file-loaded");
        element.classList.remove("dragged");
        input.dispatchEvent(new Event("change"));
      });
    }
  });
}
