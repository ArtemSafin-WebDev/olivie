import about from "./pages-data/about";
import home from "./pages-data/home";
import portfolio from "./pages-data/portfolio";

const pagesConfig = {
  ...home,
  ...portfolio,
  ...about,
};

export default pagesConfig;
