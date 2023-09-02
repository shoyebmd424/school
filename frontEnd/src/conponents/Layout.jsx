import React from "react";
import Header from "./Header";
import SubHeader from "./SubHeader";
import Footer from "./Footer/Footer";
import CNavbar from "./CNavbar";
import { ToastContainer } from "react-toastify";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <SubHeader />
      <div className="sticky-top">
        {" "}
        <CNavbar />
      </div>

      <main className="App" style={{ minHeight: "90vh" }}>
        <ToastContainer />
        {children}
      </main>

      <Footer />
    </>
  );
};

export default Layout;
