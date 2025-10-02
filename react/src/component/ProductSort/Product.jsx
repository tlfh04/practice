import React from "react";

export default function Product({ product }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md border">
      <h3 className="text-lg font-bold text-gray-800 mb-2">
        {product["title"]}
      </h3>
      <p className="text-gray-600 mb-2">ID: {product["id"]}</p>
      <p className="text-gray-600 mb-2">평점: {product["rating"]}</p>
      <p className="text-gray-600 mb-2">카테고리: {product["category"]}</p>
      <p className="text-gray-600 mb-2">가격: {product["price"]}</p>
      <p className="text-gray-600 mb-2">재고: {product["stock"]}</p>
      <p className="text-gray-600 mb-2">브랜드: {product["brand"]}</p>
      <p className="text-gray-600 mb-2">{product["description"]}</p>
    </div>
  );
}
