import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import Header from "../Pages/Shared/Header/Header";
import LeftSideNav from "../Pages/Shared/LeftSideNav/LeftSideNav";
import RightSideNav from "../Pages/Shared/RightSideNav/RightSideNav";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <div className="w-11/12 mx-auto">
        <div className="flex justify-between">
          <div className="grid-cols-2">
            <LeftSideNav></LeftSideNav>
          </div>
          <div className="w-[80%]">
            <Outlet></Outlet>
          </div>
          <div className="grid-cols-2">
            <RightSideNav></RightSideNav>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Main;
