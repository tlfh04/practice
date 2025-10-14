import Products from "../../pages/DummyPages/Products";
import Carts from "../../pages/DummyPages/Carts";
import Posts from "../../pages/DummyPages/Posts";
// 레이아웃 컴포넌트

import DummyLayout from "../../layouts/DummyLayout";
import PostDetail from "../../pages/DummyPages/PostDetail";
import ProductDetail from "../../pages/DummyPages/ProductDetail";
import PATHS from "../../constants/paths";

const dummyRoutes = [
  {
    path: PATHS.DUMMY.INDEX,
    Component: DummyLayout,
    children: [
      {
        index: true,
        Component: Carts,
      },
      {
        path: PATHS.DUMMY.POSTS,
        Component: Posts,
      },
      {
        path: PATHS.DUMMY.PRODUCTS,
        Component: Products,
      },
      {
        path: PATHS.DUMMY.POST_DETAIL,
        Component: PostDetail,
      },
      {
        path: PATHS.DUMMY.PRODUCT_DETAIL,
        Component: ProductDetail,
      },
    ],
  },
];

export default dummyRoutes;
