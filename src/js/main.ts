import "virtual:svg-icons-register";
import "../scss/style.scss";
import reviews from "./reviews";
import portfolio from "./portfolio";
import clients from "./clients";
import portfolioCategories from "./portfolioCategories";
import menu from "./menu";
import intro from "./intro";
import whatWeDo from "./what-we-do";
import risks from "./risks";
import formats from "./formats";
import cursor from "./cursor";

document.addEventListener("DOMContentLoaded", () => {
  menu();
  reviews();
  portfolio();
  clients();
  portfolioCategories();
  intro();
  whatWeDo();
  risks();
  formats();
  cursor();
});

window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});
