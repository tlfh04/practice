import React from "react";
import { Link } from "react-router-dom";

export default function ProductsList({ product }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md border">
      <h3 className="text-lg font-bold text-gray-800 mb-2">
        <Link to={`/dummy/products/${product.id}`}>{product["title"]}</Link>
      </h3>
      <p className="text-gray-600 mb-2">설명: {product["description"]}</p>
      <p className="text-gray-600 mb-2">가격: {product["price"]}$</p>
    </div>
  );
}
