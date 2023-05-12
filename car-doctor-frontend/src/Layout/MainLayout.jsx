import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import NavBar from "../Pages/Shared/NavBar/NavBar";

const MainLayout = () => {
  return (
  <div className="bg-white">
    <div className={`max-w-6xl mx-auto`}>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  </div>

  );
};

export default MainLayout;
