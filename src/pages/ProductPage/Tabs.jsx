import React, { useState } from "react";
import TabProductDetails from "./TabProductDetails";
import TabReviews from "./TabReviews";
import TabFaqs from "./TabFaqs";
const Tabs = () => {
  const [activeTab, setActiveTab] = useState(2);
  const tabComponents = {
    1: <TabProductDetails />,
    2: <TabReviews />,
    3: <TabFaqs />,
  };
  return (
    <section className="container mx-auto py-12.5 px-4 xl:px-0 ">
      <div className="flex mb-5">
        <button
          className={`w-full py-5 cursor-pointer ${
            activeTab === 1 ? "border-b-2 bg-black/5" : ""
          }`}
          onClick={() => setActiveTab(1)}
        >
          Product Details
        </button>
        <button
          className={`w-full py-5 cursor-pointer ${
            activeTab === 2 ? "border-b-2 bg-black/5" : ""
          }`}
          onClick={() => setActiveTab(2)}
        >
          Rating & Reviews
        </button>
        <button
          className={`w-full py-5 cursor-pointer ${
            activeTab === 3 ? "border-b-2 bg-black/5" : ""
          }`}
          onClick={() => setActiveTab(3)}
        >
          FAQs
        </button>
      </div>
      <div>{tabComponents[activeTab] || null}</div>
    </section>
  );
};

export default Tabs;
