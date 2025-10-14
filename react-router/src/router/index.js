import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/RootPage/Home";
import Products from "../pages/DummyPages/Products";
import Carts from "../pages/DummyPages/Carts";
import Posts from "../pages/DummyPages/Posts";
// 레이아웃 컴포넌트
import RootLayout from "../layouts/RootLayout";
import DummyLayout from "../layouts/DummyLayout";
import PostDetail from "../pages/DummyPages/PostDetail";
import ProductDetail from "../pages/DummyPages/ProductDetail";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [{ index: true, Component: Home }],
  },
  {
    path: "/dummy",
    Component: DummyLayout,
    children: [
      {
        index: true,
        Component: Carts,
      },
      {
        path: "posts",
        Component: Posts,
      },
      {
        path: "products",
        Component: Products,
      },
      {
        path: "posts/:postId",
        Component: PostDetail,
      },
      {
        path: "products/:productId",
        Component: ProductDetail,
      },
    ],
  },
]);

export default router;
