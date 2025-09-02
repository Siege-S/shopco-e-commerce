import HeroSection from "./HeroSection";
import NewArrivalSection from "./NewArrivalSection";
import TopSellingSection from "./TopSellingSection";
import DressStyleSection from "./DressStyleSection";
import CustomerReviews from "./CustomerReviews";

const Home = () => {
  return (
    <>
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
    </>
  );
};

export default Home;
