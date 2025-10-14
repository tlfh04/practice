import React from "react";
import { Link } from "react-router-dom";
import PATHS from "../constants/paths";
export default function NotFound() {
  return (
    <div>
      <p>페이지를 찾을 수 없습니다 404 Error</p>
      <button className="border-2 cursor-pointer">
        <Link to={PATHS.ROOT.INDEX}>홈으로 돌아가기</Link>
      </button>
    </div>
  );
}
