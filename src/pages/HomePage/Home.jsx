import React from "react";
import TopBar from "../../components/TopBar";
import Header from "../../components/Header";
import HeroSection from "./HeroSection";
import NewArrivalSection from "./NewArrivalSection";
import TopSellingSection from "./TopSellingSection";
import DressStyleSection from "./DressStyleSection";
import CustomerReviews from "./CustomerReviews";
import Footer from "../../components/Footer";
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
