import { useEffect, useState } from "react";
import axios from "axios";
import PostsList from "../../components/PostsList";
import { useSearchParams } from "react-router-dom";

export default function Posts() {
  const [posts, setPosts] = useState([]);
  const [params, setParams] = useSearchParams();
  useEffect(() => {
    async function fetchData() {
      const sortBy = params.get("sortBy") ?? "title";
      const order = params.get("order") ?? "asc";
      const res = await axios.get(
        `https://dummyjson.com/posts?sortBy=${sortBy}&order=${order}`
      );
      const data = res["data"]["posts"];
      console.log(data);
      setPosts(data);
    }
    fetchData();
  }, [params]);
  function handleSortChange(sortBy, order) {
    setParams({ sortBy: sortBy, order: order });
  }
  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-8">포스트 목록</h2>
      <div className="flex justify-center gap-2 m-2">
        <button
          className="border-2 cursor-pointer"
          onClick={() => {
            handleSortChange("title", "asc");
          }}
        >
          게시글 제목 오름차순
        </button>
        <button
          className="border-2 cursor-pointer"
          onClick={() => {
            handleSortChange("title", "desc");
          }}
        >
          게시글 제목 내림차순
        </button>
        <button
          className="border-2 cursor-pointer"
          onClick={() => {
            handleSortChange("id", "asc");
          }}
        >
          게시글 ID 오름차순
        </button>
        <button
          className="border-2 cursor-pointer"
          onClick={() => {
            handleSortChange("id", "desc");
          }}
        >
          게시글 ID 내림차순
        </button>
      </div>
      <div className="flex flex-wrap gap-4 justify-center">
        {posts.map((ele) => {
          return <PostsList key={ele.id} post={ele}></PostsList>;
        })}
      </div>
    </div>
  );
}
