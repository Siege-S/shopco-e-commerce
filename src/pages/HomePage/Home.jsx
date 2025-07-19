import React from "react";
import TopBar from "../../components/TopBar";
import Header from "../../components/Header";
const Home = () => {
  return (
    <>
      <div className="sticky top-0 ">
        <TopBar />
        <Header />
      </div>

      <main className="container mx-auto">
        <div className="h-[2000px]">
          {" "}
          {/* dummy scrollable content */}
          Scroll down to test sticky
        </div>
      </main>
    </>
  );
};

export default Home;
