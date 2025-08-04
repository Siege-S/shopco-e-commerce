import React from "react";

const DressStyleSection = () => {
  return (
    <section className="container mx-auto px-4 xl:px-0 ">
      <div className="bg-lightGrey rounded-[20px] pb-4 px-6 xl:px-16">
        <h2 className="font-integralcf font-bold text-[32px] text-center pt-10 pb-7">
          BROWSE BY DRESS STYLE
        </h2>
        <div className="flex flex-col md:flex-row gap-4 w-full mb-4">
          <figure className="relative rounded-[20px] overflow-hidden w-full h-[190px] lg:h-[289px] lg:w-2/5">
            <div className="relative h-full w-full hover:scale-110 ease-in-out duration-200 bg-right bg-no-repeat bg-cover bg-[url('/src/assets/images/mobile_casual.svg')] lg:bg-[url('/src/assets/images/desktop_casual.svg')]"></div>
            <h3 className="absolute top-4 left-6 font-bold text-2xl lg:text-4xl">
              Casual
            </h3>
          </figure>

          <figure className="relative rounded-[20px] overflow-hidden w-full h-[190px] lg:h-[289px] lg:w-3/5 ">
            <div className="relative h-full w-full hover:scale-110 ease-in-out duration-200 bg-no-repeat bg-cover bg-[url('/src/assets/images/mobile_formal.svg')] lg:bg-[url('/src/assets/images/desktop_formal.svg')]"></div>
            <h3 className="absolute top-4 left-6 font-bold text-2xl lg:text-4xl">
              Formal
            </h3>
          </figure>
        </div>

        <div className="flex flex-col md:flex-row gap-4 w-full">
          <figure className="relative rounded-[20px] overflow-hidden w-full h-[190px] lg:h-[289px] lg:w-3/5 ">
            <div className="relative h-full w-full hover:scale-110 ease-in-out duration-200 bg-no-repeat bg-cover bg-[url('/src/assets/images/mobile_party.svg')] lg:bg-[url('/src/assets/images/desktop_party.svg')]"></div>
            <h3 className="absolute top-4 left-6 font-bold text-2xl lg:text-4xl">
              Party
            </h3>
          </figure>

          <figure className="relative rounded-[20px] overflow-hidden w-full h-[190px] lg:h-[289px] lg:w-2/5">
            <div className="relative h-full w-full hover:scale-110 ease-in-out duration-200 bg-no-repeat bg-right bg-cover bg-[url('/src/assets/images/mobile_gym.svg')] lg:bg-[url('/src/assets/images/desktop_gym.svg')]"></div>
            <h3 className="absolute top-4 left-6 font-bold text-2xl lg:text-4xl">
              Gym
            </h3>
          </figure>
        </div>
      </div>
    </section>
  );
};

export default DressStyleSection;
