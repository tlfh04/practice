import React from "react";
import { Link } from "react-router-dom";

export default function PostsList({ post }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md border">
      <p className="text-lg font-bold text-gray-800 mb-2">
        <Link to={`/dummy/posts/${post.id}`}>
          no. {post.id} - {post.title}
        </Link>
      </p>
    </div>
  );
}
