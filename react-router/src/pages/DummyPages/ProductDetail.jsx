import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ProductDetail() {
  const { productId } = useParams();
  const [products, setProduct] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const res = await axios.get(
        `https://dummyjson.com/products/${productId}`
      );
      console.log(res);
      setProduct(res["data"]);
    }
    fetchData();
  }, [productId]);

  return (
    <div>
      <p className="text-4xl font-bold mb-4">{products.title}</p>
      <p>
        <img src={products.thumbnail} alt="" />
      </p>
      <p className="mb-4">{products.description}</p>
      <p className="font-bold">{products.price}$</p>
      <p className="font-bold">⭐{products.rating}</p>
    </div>
  );
}
