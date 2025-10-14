import { useEffect, useState } from "react";
import axios from "axios";
import ProductsList from "../../components/ProductsList";
import { useSearchParams } from "react-router-dom";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [productsall, setProductsAll] = useState([]);
  const [params, setParams] = useSearchParams();
  useEffect(() => {
    async function fetchData() {
      const sortBy = params.get("sortBy") ?? "price";
      const order = params.get("order") ?? "asc";
      const limit = params.get("limit") ?? 5;
      const skip = params.get("skip") ?? 0;
      const res = await axios.get(
        `https://dummyjson.com/products?sortBy=${sortBy}&order=${order}&limit=${limit}&skip=${skip}`
      );
      const data = res["data"];
      console.log(data);
      setProductsAll(data);
      setProducts(data["products"]);
    }
    fetchData();
  }, [params]);
  function handleSortChange(sortBy, order) {
    setParams({ sortBy: sortBy, order: order });
  }
  function handlePrePageChange(skip) {
    if (skip <= 0) return;
    let changeSkip = Number(skip) - 5;
    // setParams({ sortBy: sortBy, order: order,skip: changeSkip });
    setParams((searchParams) => {
      searchParams.set("skip", changeSkip);
      return searchParams;
    });
  }
  function handleNextPageChange(skip) {
    if (skip > productsall.total - 5) return;
    let changeSkip = Number(skip) + 5;
    // setParams({ sortBy: sortBy, order: order,skip: changeSkip });
    setParams((searchParams) => {
      searchParams.set("skip", changeSkip);
      return searchParams;
    });
  }
  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-8">상품 목록</h2>
      <h2 className="text-center mb-2">
        페이지번호 {params.get("skip") / 5 + 1}/
        {Math.floor(productsall.total / 5 + 1)}
      </h2>
      <div className="flex justify-center gap-2 m-2">
        <button
          className="border-2 cursor-pointer"
          onClick={() => {
            handlePrePageChange(params.get("skip"));
          }}
        >
          ◀
        </button>
        <button
          className="border-2 cursor-pointer"
          onClick={() => {
            handleSortChange("price", "asc");
          }}
        >
          상품 가격 오름차순
        </button>
        <button
          className="border-2 cursor-pointer"
          onClick={() => {
            handleSortChange("price", "desc");
          }}
        >
          상품 가격 내림차순
        </button>
        <button
          className="border-2 cursor-pointer"
          onClick={() => {
            handleSortChange("id", "asc");
          }}
        >
          상품 ID 오름차순
        </button>
        <button
          className="border-2 cursor-pointer"
          onClick={() => {
            handleSortChange("id", "desc");
          }}
        >
          상품 ID 내림차순
        </button>
        <button
          className="border-2 cursor-pointer"
          onClick={() => {
            handleNextPageChange(params.get("skip"));
          }}
        >
          ▶
        </button>
      </div>
      <div className="flex flex-wrap gap-6 justify-center">
        {products.map((ele) => {
          return <ProductsList key={ele.id} product={ele}></ProductsList>;
        })}
      </div>
    </div>
  );
}
