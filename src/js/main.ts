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
import projectGallery from "./projectGallery";
import fancybox from "./fancybox";
import modals from "./modals";
import player from "./player";
import faq from "./faq";
import ellipsisBlock from "./ellipsisBlock";
import articleIcons from "./articleIcons";
import whatWeDoFormats from "./whatWeDoFormats";
import mediaModal from "./mediaModal";

document.addEventListener("DOMContentLoaded", () => {
  menu();
  reviews();
  portfolio();
  clients();
  portfolioCategories();
  intro();
  whatWeDo();
  risks();
  ellipsisBlock();
  formats();
  cursor();
  mediaModal();
  projectGallery();
  fancybox();
  modals();
  player();
  faq();
  articleIcons();
  whatWeDoFormats();
});

window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});
