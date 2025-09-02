import React, { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CategoryPage from "./CategoryPage";
import SideBar from "../../components/SideBar";
import TopBar from "../../components/TopBar";
import Filter from "./Filter";
const Shop = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const toggleFilter = () => {
    setIsFilterOpen((prevState) => !prevState);
  };

  return (
    <>
      <div>
        <CategoryPage toggleFilter={toggleFilter} />
      </div>

      <div>
        <Filter isFilterOpen={isFilterOpen} toggleFilter={toggleFilter} />
      </div>
    </>
  );
};

export default Shop;
