import React from "react";
import Nav from "./Nav";
import { Outlet } from "react-router";

const Layout = () => {
  return (
    <div className="flex flex-col gap-10 lg:flex-row lg:gap-0">
      <Nav />
      <Outlet />
    </div>
  );
};

export default Layout;
