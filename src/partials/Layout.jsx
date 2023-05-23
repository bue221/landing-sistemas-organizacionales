import React from "react";
import { Outlet } from "react-router-dom";
// mocks
import { navbarOptions } from "../utils/Menu";
// Components
import Navbar from "../partials/TestHeader";
import PageIllustration from "./PageIllustration";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Navbar options={navbarOptions} />

      {/*  Page content */}
      <main className="grow">
        {/*  Page illustration */}
        <div
          className="relative max-w-6xl mx-auto h-0 pointer-events-none"
          aria-hidden="true"
        >
          <PageIllustration />
        </div>
        {/*  Page sections */}
        <Outlet />
      </main>

      {/*  Site footer */}
      <Footer />
    </div>
  );
};

export default Layout;
