import React from "react";
import { Outlet, Link } from "react-router-dom";

export default function RootLayout() {
  return (
    <div>
      <header>
        <Link to="dummy">더미 페이지</Link>
      </header>
      <main>
        <Outlet></Outlet>
      </main>
    </div>
  );
}
