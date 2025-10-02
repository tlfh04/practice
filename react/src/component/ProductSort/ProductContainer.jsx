import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Product from "./Product";

export default function ProductContainer() {
  const [products, setProducts] = useState([]);
  const [sortby, setSortBy] = useState("id");
  const [order, setOrder] = useState("asc");
  useEffect(() => {
    async function fetchData() {
      const res = await axios.get(
        `https://dummyjson.com/products?sortBy=${sortby}&order=${order}`
      );
      setProducts(res["data"]["products"]);
    }
    fetchData();
  }, [sortby, order]);
  function handleChangeSort(sort, order) {
    setSortBy(sort);
    setOrder(order);
  }
  return (
    <div>
      <button
        className="border-1 bg-blue-300 m-2"
        onClick={() => {
          handleChangeSort("id", "asc");
        }}
      >
        ID↑
      </button>
      <button
        className="border-1 bg-blue-300 m-2"
        onClick={() => {
          handleChangeSort("id", "desc");
        }}
      >
        ID↓
      </button>
      <button
        className="border-1 bg-green-300 m-2"
        onClick={() => {
          handleChangeSort("price", "asc");
        }}
      >
        가격↑
      </button>
      <button
        className="border-1 bg-green-300 m-2"
        onClick={() => {
          handleChangeSort("price", "desc");
        }}
      >
        가격↓
      </button>
      <button
        className="border-1 bg-yellow-300 m-2"
        onClick={() => {
          handleChangeSort("rating", "asc");
        }}
      >
        평점↑
      </button>
      <button
        className="border-1 bg-yellow-300 m-2"
        onClick={() => {
          handleChangeSort("rating", "desc");
        }}
      >
        평점↓
      </button>
      <div>
        {products.map((ele) => {
          return <Product key={ele.id} product={ele}></Product>;
        })}
      </div>
    </div>
  );
}
