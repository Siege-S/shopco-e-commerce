import React from "react";
import Figure1 from "../../assets/images/figure1.svg";
import BrandVersace from "../../assets/logos/brand-versace.svg";
import BrandZara from "../../assets/logos/brand-zara.svg";
import BrandGucci from "../../assets/logos/brand-gucci.svg";
import BrandPrada from "../../assets/logos/brand-prada.svg";
import BrandCalvin from "../../assets/logos/brand-calvinklein.svg";

const HeroSection = () => {
  return (
    <>
      <section className="container mx-auto px-4 xl:px-0 md:flex">
        <div className="flex flex-col flex-1 justify-center">
          <h1 className="font-integralcf font-bold text-4xl pt-10 pb-5 lg:text-5xl xl:text-6xl xl:pt-0">
            FIND CLOTHES THAT MATCHES YOUR STYLE
          </h1>
          <p className="opacity-60 mb-6 z-0 xl:w-140">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </p>
          <button className="bg-black py-3.75 text-white font-medium w-full rounded-full mb-5 md:w-52.5 xl:mb-12">
            Shop Now
          </button>

          <div className="lg:flex pb-5">
            <div className="flex mb-3 flex-2/3 lg:mb-0">
              <div className="flex flex-col items-center flex-1 border-r-2 border-gray-300">
                <h4 className="font-bold text-2xl xl:text-4xl">200+</h4>
                <p className="text-xs opacity-60">International Brands</p>
              </div>

              <div className="flex flex-col items-center flex-1">
                <h4 className="font-bold text-2xl xl:text-4xl">2000+</h4>
                <p className="text-xs opacity-60">HIgh-Quality Products</p>
              </div>
            </div>
            <div className="flex flex-col items-center flex-1 lg:flex-1/3 lg:border-l-2 border-gray-300">
              <h4 className="font-bold text-2xl xl:text-4xl">30,000+</h4>
              <p className="text-xs opacity-60">Happy Customers</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col flex-1 justify-center">
          <img src={Figure1} alt="image-fashion" />
        </div>
      </section>

      {/* Brand Section */}
      <section className="bg-black ">
        <div className="container mx-auto flex flex-wrap justify-center gap-y-10 gap-x-5 py-10 px-4 md:justify-between xl:px-0">
          <img className="w-30" src={BrandVersace} alt="logo" />
          <img className="w-20" src={BrandZara} alt="logo" />
          <img className="w-30" src={BrandGucci} alt="logo" />
          <img className="w-30" src={BrandPrada} alt="logo" />
          <img className="w-30" src={BrandCalvin} alt="logo" />
        </div>
      </section>
    </>
  );
};

export default HeroSection;
