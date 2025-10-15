import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import PATHS from "../constants/paths";
import Home from "../pages/Home";
import CountIncrement from "../pages/CountIncrement";
import CountDecrement from "../pages/CountDecrement";
import CountView from "../pages/CountView";
import StepSet from "../pages/StepSet";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: PATHS.ROOT.COUNTVIEW,
        Component: CountView,
      },
      {
        path: PATHS.ROOT.COUNTDECREMENT,
        Component: CountDecrement,
      },
      {
        path: PATHS.ROOT.COUNTINCREMENT,
        Component: CountIncrement,
      },
      {
        path: PATHS.ROOT.STEPSET,
        Component: StepSet,
      },
    ],
  },
]);

export default router;
