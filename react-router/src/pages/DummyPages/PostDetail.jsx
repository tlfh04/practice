import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function PostDetail() {
  const { postId } = useParams();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get(`https://dummyjson.com/posts/${postId}`);

      setPosts(res["data"]);
    }
    fetchData();
  }, [postId]);

  return (
    <div>
      <p className="text-4xl font-bold mb-4">{posts.title}</p>
      <p className="mb-4">{posts.body}</p>
      <p className="font-bold">{posts.views}읽음</p>
    </div>
  );
}
