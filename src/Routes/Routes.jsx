import { createBrowserRouter } from "react-router-dom";
import FrontLayout from "../Layout/FrontLayout.jsx";
import Home from "../pages/Home/Home.jsx";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <FrontLayout />,

    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "home",
        element: <Home />,
      },
    ],
  },
]);
export default routes;
