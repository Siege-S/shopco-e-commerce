import React, { useEffect, useRef } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { Navigation, Autoplay } from "swiper/modules";
import { useSwiper } from "swiper/react";

import { useState } from "react";

import leftArrow from "../../assets/icons/left_arrow.svg";
import rightArrow from "../../assets/icons/right_arrow.svg";
import starRate from "../../assets/icons/star_rate.svg";
import verifiedIcon from "../../assets/icons/verified_icon.svg";
const reviews = [
  {
    name: "Sarah M.",
    review:
      "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
  },
  {
    name: "Alex K.",
    review:
      "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.",
  },
  {
    name: "James L.",
    review:
      "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
  },
  {
    name: "Ethan R.",
    review:
      "This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer's touch in every aspect of this shirt.",
  },
  {
    name: "Samantha D.",
    review:
      "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt.",
  },
  {
    name: "Olivia P.",
    review:
      "As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. It's evident that the designer poured their creativity into making this t-shirt stand out.",
  },
  {
    name: "Ava H.",
    review:
      "I'm not just wearing a t-shirt; I'm wearing a piece of design philosophy. The intricate details and thoughtful layout of the design make this shirt a conversation starter.",
  },
  {
    name: "Liam K.",
    review:
      "This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks volumes about the designer's skill. It's like wearing a piece of art that reflects my passion for both design and fashion.",
  },
];

const CustomerReviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const swiper = useSwiper();
  const swiperRef = useRef();
  useEffect(() => {
    console.log("current index: " + currentIndex);
  }, [currentIndex]);
  return (
    <section className="relative w-full pt-12.5 px-4 md:px-0 overflow-hidden">
      <div className="container mx-auto px-4 xl:px-0 flex justify-between mb-6">
        <h1 className=" font-bold font-integralcf text-3xl w-2/3">
          Our Happy Customers
        </h1>
        <div className="flex items-center gap-4">
          <img
            className="size-6 cursor-pointer"
            onClick={() => swiperRef.current.slidePrev()}
            src={leftArrow}
            alt="left arrow"
          />
          <img
            className="size-6 cursor-pointer"
            onClick={() => swiperRef.current.slideNext()}
            src={rightArrow}
            alt="right arrow"
          />
        </div>
      </div>

      <Swiper
        modules={[Navigation, Autoplay]}
        loop={true}
        centeredSlides={true}
        slidesPerView={3.5}
        spaceBetween={20}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        onSlideChange={(swiper) => setCurrentIndex(swiper.realIndex)}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
          setCurrentIndex(swiper.realIndex);
        }}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 1.5,
          },
          1024: {
            slidesPerView: 2.5,
            centeredSlides: true,
          },
          1280: {
            slidesPerView: 3.5,
            centeredSlides: true,
          },
          2560: {
            slidesPerView: 4.5,
            centeredSlides: true,
          },
        }}
      >
        {reviews.map((review, index) => (
          <SwiperSlide key={index}>
            {({ isActive, isPrev, isNext }) => (
              <div
                className={`h-60 bg-white border border-gray-400 px-8 py-7 rounded-xl mx-auto transition duration-300 ${
                  isActive ? "blur-none" : "blur-xs"
                } ${
                  isActive || isNext || isPrev ? "lg:blur-none" : "lg:blur-xs"
                } ${isActive || isPrev || isNext ? "" : "xl:blur-xs"}`}
              >
                <img src={starRate} alt="star" />
                <div className="flex gap-1">
                  <h3 className="font-semibold text-lg">{review.name}</h3>
                  <img src={verifiedIcon} alt="verified icon" />
                </div>

                <p className="opacity-60 mt-3">{review.review}</p>
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
export default CustomerReviews;
