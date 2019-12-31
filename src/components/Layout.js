import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

import "./layout.css";

const Layout = ({ children }) => {
  return (
    <main>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </main>
  );
};

export default Layout;
