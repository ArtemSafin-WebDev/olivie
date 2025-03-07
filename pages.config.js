import about from "./pages-data/about";
import home from "./pages-data/home";
import portfolio from "./pages-data/portfolio";
import project from "./pages-data/project";
import project2 from "./pages-data/project2";
import whatWeDo from "./pages-data/what-we-do";

const pagesConfig = {
  ...home,
  ...portfolio,
  ...about,
  ...project,
  ...project2,
  ...whatWeDo,
};

export default pagesConfig;
