import React from "react";
import ProductContainer from "./ProductCard/ProductContainer";
import UserCardContainer from "./UserCard/UserCardContainer";
import Carts from "./Carts/Carts";
import Counter from "./Counter/Counter";
import Calculator from "./Calculator/Calculator";
import QuoteContainer from "./DummyJSON/QuoteContainer";

export default function Main() {
  return (
    <div>
      <Counter></Counter>
      <Calculator></Calculator>
      <QuoteContainer></QuoteContainer>
    </div>
  );
}
