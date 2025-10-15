import React from "react";
import { Link, Outlet } from "react-router-dom";
import PATHS from "../constants/paths";
export default function RootLayout() {
  return (
    <div>
      <div className="flex border-2 border-gray-300 gap-2 p-4">
        <Link to={PATHS.ROOT.INDEX}>홈</Link>
        <Link to={PATHS.ROOT.COUNTINCREMENT}>카운터 증가</Link>
        <Link to={PATHS.ROOT.COUNTDECREMENT}>카운터 감소</Link>
        <Link to={PATHS.ROOT.COUNTVIEW}>카운터 조회</Link>
        <Link to={PATHS.ROOT.STEPSET}>단위 설정</Link>
      </div>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
