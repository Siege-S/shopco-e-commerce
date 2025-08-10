import React, { useState } from "react";
import TopBar from "../../components/TopBar";
import Header from "../../components/Header";
import HeroSection from "./HeroSection";
import NewArrivalSection from "./NewArrivalSection";
import TopSellingSection from "./TopSellingSection";
import DressStyleSection from "./DressStyleSection";
import CustomerReviews from "./CustomerReviews";
import Footer from "../../components/Footer";
import SideBar from "../../components/SideBar";
const Home = () => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

  const toggleSideBar = () => {
    setIsSideBarOpen((prevState) => !prevState);
  };
  return (
    <>
      <div className="sticky top-0 z-50">
        <TopBar />
        <Header toggleSideBar={toggleSideBar} />
      </div>
      <div>
        <SideBar isSideBarOpen={isSideBarOpen} toggleSideBar={toggleSideBar} />
      </div>
      <div className="bg-lightGrey ">
        <HeroSection />
      </div>
      <div>
        <NewArrivalSection />
      </div>
      <div>
        <TopSellingSection />
      </div>
      <div>
        <DressStyleSection />
      </div>
      <div>
        <CustomerReviews />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
