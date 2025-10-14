const PATHS = {
  ROOT: {
    INDEX: "/",
  },
  DUMMY: {
    INDEX: "/dummy",
    CARTS: "/dummy/carts",
    POSTS: "/dummy/posts",
    POST_DETAIL: "/dummy/posts/:postId",
    getPostDetail: (postId) => `/dummy/posts/${postId}`,
    PRODUCTS: "/dummy/products",
    PRODUCT_DETAIL: "/dummy/products/:productId",
    getProductDetail: (productId) => `/dummy/products/${productId}`,
  },
};

export default PATHS;
