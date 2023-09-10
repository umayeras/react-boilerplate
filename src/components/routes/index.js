import About from "../../pages/about";
import Home from "../../pages/home";

const AppRoutes = [
  {
    index: true,
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
];

export default AppRoutes;
