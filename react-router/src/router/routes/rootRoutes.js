// 레이아웃 컴포넌트
import RootLayout from "../../layouts/RootLayout";
// 페이지 컴포넌트
import Home from "../../pages/RootPage/Home";
import PATHS from "../../constants/paths";

const rootRoutes = [
  {
    path: PATHS.ROOT.INDEX,
    Component: RootLayout,
    children: [{ index: true, Component: Home }],
  },
];

export default rootRoutes;
