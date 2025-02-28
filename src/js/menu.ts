export default function menu() {
  const menuOpen = document.querySelector<HTMLButtonElement>(
    ".page-header__burger"
  );
  const menuClose = document.querySelector<HTMLButtonElement>(
    ".burger-menu__close"
  );

  menuOpen?.addEventListener("click", (event) => {
    event.preventDefault();
    document.body.classList.add("menu-open");
  });
  menuClose?.addEventListener("click", (event) => {
    event.preventDefault();
    document.body.classList.remove("menu-open");
  });
}
