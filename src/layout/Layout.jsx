import React from "react";

// Components
import TopNav from "./TopNav";
import SideNav from "./SideNav";



const Layout = ({ children }) => {
  return (
    <div className="container-fluid px-0">
      <div className="row m-0">
        <div className="col-lg-3 col-xl-2 px-0 d-none d-sm-none d-md-none d-lg-block sidebar-container">
           <SideNav />
        </div>
        <div className="col-12 col-lg-9 col-xl-10 px-0">
          <TopNav />
          <div className="container-fluid mb-4 h-75">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
