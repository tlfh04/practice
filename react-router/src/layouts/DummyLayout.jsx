import React from "react";
import { Outlet, NavLink } from "react-router-dom";

export default function DummyLayout() {
  // 기본 스타일
  const baseClass = "text-blue-900 font-bold p-2";
  // 활성화 스타일
  const activeClass = "border-2 border-red-900";
  return (
    <div>
      <div className="flex gap-2">
        <NavLink
          className={({ isActive }) =>
            `${baseClass} ${isActive ? activeClass : ""}`
          }
          to="/dummy"
          end
        >
          카트 페이지
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `${baseClass} ${isActive ? activeClass : ""}`
          }
          to="/dummy/posts"
        >
          포스트 페이지
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `${baseClass} ${isActive ? activeClass : ""}`
          }
          to="/dummy/products"
        >
          상품 페이지
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `${baseClass} ${isActive ? activeClass : ""}`
          }
          to="/"
        >
          메인 홈페이지
        </NavLink>
      </div>
      <main>
        <Outlet></Outlet>
      </main>
    </div>
  );
}
