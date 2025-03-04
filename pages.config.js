import about from "./pages-data/about";
import home from "./pages-data/home";
import portfolio from "./pages-data/portfolio";
import project from "./pages-data/project";

const pagesConfig = {
  ...home,
  ...portfolio,
  ...about,
  ...project,
};

export default pagesConfig;
