import { createBrowserRouter } from "react-router-dom";

import rootRoutes from "./routes/rootRoutes";
import dummyRoutes from "./routes/dummyRoutes";
import PATHS from "../constants/paths";
import NotFound from "../pages/NotFound";
const router = createBrowserRouter([
  ...rootRoutes,
  ...dummyRoutes,
  { path: "*", Component: NotFound },
]);

export default router;
