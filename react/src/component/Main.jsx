import React from "react";
import ProductContainer from "./ProductCard/ProductContainer";
import UserCardContainer from "./UserCard/UserCardContainer";

export default function Main() {
  return (
    <div>
      <ProductContainer />
      <UserCardContainer />
    </div>
  );
}
