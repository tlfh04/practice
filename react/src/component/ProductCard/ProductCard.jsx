import React from "react";

export default function ProductCard({ product }) {
  return (
    <div className="border rounded-lg p-4 shadow-md">
      <h2 className="font-bold text-xl">{product["name"]}</h2>
      <p className="font-bold text-green-600">{product["price"]}</p>
      <p>
        재고 :{" "}
        <span className="text-green-400">
          {product["inStock"] ? "재고 있음" : "품절"}
        </span>
      </p>
      <p>평점 : ⭐{product["rating"]}</p>
      <div>
        {product["tags"].map((ele) => (
          <span className="rounded-lg border-1 bg-blue-300 border-white text-blue-500">
            {ele}
          </span>
        ))}
      </div>
    </div>
  );
}
