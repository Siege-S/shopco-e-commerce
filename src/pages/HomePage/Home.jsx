import React from "react";
import TopBar from "../../components/TopBar";
import Header from "../../components/Header";
import HeroSection from "./HeroSection";
import NewArrivalSection from "./NewArrivalSection";
const Home = () => {
  return (
    <>
      <div className="sticky top-0 z-50">
        <TopBar />
        <Header />
      </div>
      <div className="bg-lightGrey ">
        <HeroSection />
      </div>
      <div>
        <NewArrivalSection />
      </div>
    </>
  );
};

export default Home;
