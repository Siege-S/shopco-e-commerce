// src/layouts/RootLayout.jsx
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import Header from "./Header";
import Footer from "./Footer";
import TopBar from "./TopBar";
import SideBar from "./SideBar";
import CartProvider from "../context/CartProvider";

export default function RootLayout() {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

  const toggleSideBar = () => {
    setIsSideBarOpen((prevState) => !prevState);
    console.log("clicked");
  };

  return (
    <>
      <CartProvider>
        <div className="sticky top-0 z-50">
          <TopBar />
          <Header toggleSideBar={toggleSideBar} />
          <ScrollToTop />
        </div>

        <div>
          <SideBar
            isSideBarOpen={isSideBarOpen}
            toggleSideBar={toggleSideBar}
          />
        </div>

        <main>
          <Outlet />
        </main>

        <div>
          <Footer />
        </div>
      </CartProvider>
    </>
  );
}
