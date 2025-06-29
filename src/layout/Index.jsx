import React from "react";
import Nav from "./Nav";
import { Navigate, Outlet } from "react-router";
import { useSelector } from "react-redux"

const Layout = () => {
  const reduxData = useSelector((state) => state.userData.userInfo);

  if (!reduxData) {
    return <Navigate to="/signIn" />
  }
    return (
      <div className="flex flex-col gap-10 lg:flex-row lg:gap-0 bg-[#202020]">
        <Nav />
        <Outlet />
      </div>
    );
};

export default Layout;
