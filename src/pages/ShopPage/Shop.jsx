import React, { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CategoryPage from "./CategoryPage";
import SideBar from "../../components/SideBar";
import TopBar from "../../components/TopBar";
import Filter from "./Filter";
const Shop = () => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const toggleSideBar = () => {
    setIsSideBarOpen((prevState) => !prevState);
  };

  const toggleFilter = () => {
    setIsFilterOpen((prevState) => !prevState);
  };

  return (
    <>
      <div className="sticky top-0 z-50">
        <TopBar />
        <Header toggleSideBar={toggleSideBar} />
      </div>
      <div>
        <CategoryPage toggleFilter={toggleFilter} />
      </div>
      <div>
        <SideBar isSideBarOpen={isSideBarOpen} toggleSideBar={toggleSideBar} />
      </div>
      <div>
        <Footer />
      </div>
      <div>
        <Filter isFilterOpen={isFilterOpen} toggleFilter={toggleFilter} />
      </div>
    </>
  );
};

export default Shop;
