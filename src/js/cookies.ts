export default function cookies() {
  const cookies = document.querySelector(".cookies");
  console.log("From cookie land 1");
  if (!cookies) return;
  const closeBtns = cookies.querySelectorAll<HTMLButtonElement>(
    ".cookies__close, .cookies__filled-btn"
  );
  console.log("Close btns", closeBtns);
  closeBtns.forEach((btn) =>
    btn.addEventListener("click", (event) => {
      event.preventDefault();
      localStorage.setItem("cookies-shown", "Y");
      document.body.classList.remove("cookies-shown");
    })
  );

  console.log("From cookie land 2");
  if (localStorage.getItem("cookies-shown") !== "Y")
    document.body.classList.add("cookies-shown");
}
