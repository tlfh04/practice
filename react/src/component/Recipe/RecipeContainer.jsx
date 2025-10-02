import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Recipe from "./Recipe";

export default function RecipeContainer() {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const res = await axios.get("https://dummyjson.com/recipes");
      const data = res["data"];
      setRecipes(data["recipes"]);
    }
    fetchData();
  }, []);
  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-8">레시피 목록</h2>
      <div className="flex flex-wrap gap-6 justify-center">
        {/* Recipe 컴포넌트 반복 */}
        {recipes.map((ele) => {
          return <Recipe key={ele.id} recipe={ele}></Recipe>;
        })}
      </div>
    </div>
  );
}
