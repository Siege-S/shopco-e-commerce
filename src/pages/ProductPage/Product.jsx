import React, { useState } from "react";
import Header from "../../components/Header";
import TopBar from "../../components/TopBar";
import Footer from "../../components/Footer";
import SideBar from "../../components/SideBar";
import ProductItems from "./ProductItem";
import Tabs from "./Tabs";
const Product = () => {
  return (
    <>
      <div>
        <ProductItems />
      </div>

      <div>
        <Tabs />
      </div>
    </>
  );
};

export default Product;
