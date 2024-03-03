import React from "react";
import Nav from "../Navigation/Nav";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div>
      <Nav />
      <Outlet />
    </div>
  );
}
