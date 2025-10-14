import { useEffect, useState } from "react";
import axios from "axios";
import CartsList from "../../components/CartsList";
export default function Carts() {
  const [carts, setCarts] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const res = await axios.get("https://dummyjson.com/carts");
      const data = res["data"]["carts"];
      console.log(data);
      setCarts(data);
    }
    fetchData();
  }, []);
  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-8">카트 목록</h2>
      <div className="flex flex-wrap gap-6 justify-center">
        {carts.map((ele) => {
          return <CartsList key={ele.id} cart={ele}></CartsList>;
        })}
      </div>
    </div>
  );
}
