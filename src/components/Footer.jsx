import React from "react";
import twitterLogo from "../assets/logos/logos_twitter.svg";
import facebookLogo from "../assets/logos/logo_facebook.svg";
import instagramLogo from "../assets/logos/logo_instagram.svg";
import githubLogo from "../assets/logos/logo_github.svg";
import paymentVisa from "../assets/logos/payment_visa.svg";
import paymentMaster from "../assets/logos/payment_master.svg";
import paymentPaypal from "../assets/logos/payment_paypal.svg";
import paymentApple from "../assets/logos/payment_apple.svg";
import paymentGoogle from "../assets/logos/payment_google.svg";
const Footer = () => {
  return (
    <>
      <div className="container mx-auto px-4 xl:px-0">
        <div className="bg-black px-6 pb-7 rounded-[20px] mb:8 relative translate-y-1/2 md:py-9 md:flex md:justify-between xl:px-16">
          <h2 className="text-white font-bold font-integralcf text-3xl py-8 md:py-0 lg:text-[40px] md:w-1/2">
            STAY UPTO DATE ABOUT OUR LATEST OFFERS
          </h2>
          <div className="flex flex-col justify-end md:justify-center md:w-[280px] lg:w-[349px]">
            <div className="mb-3">
              <input
                className="bg-white w-full rounded-full p-3 text-sm"
                type="email"
                placeholder="Enter email address"
              />
            </div>

            <button className="bg-white text-black py-3 w-full text-sm font-medium rounded-full">
              Subscribe to Newsletter
            </button>
          </div>
        </div>
      </div>

      <footer className="bg-lightGrey pt-43 pb-19 md:pt-28 lg:pt-35 xl:pt-28">
        <div className="container mx-auto px-4 xl:px-0 ">
          <div className="lg:flex lg:justify-between">
            <div className="lg:w-[248px]">
              <h3 className="font-integralcf font-bold text-[28px] pb-3">
                SHOP.CO
              </h3>
              <p className="text-sm opacity-60 mb-5">
                We have clothes that suits your style and which you’re proud to
                wear. From women to men.
              </p>

              <div className="flex gap-3 mb-6">
                <img src={twitterLogo} alt="twitter logo" />
                <img src={facebookLogo} alt="facebook logo" />
                <img src={instagramLogo} alt="instagram logo" />
                <img src={githubLogo} alt="github logo" />
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10  lg:gap-8 xl:gap-25">
              <div className="flex flex-col gap-4 text-sm lg:text-base">
                <h5 className=" tracking-[3px] font-medium">COMPANY</h5>
                <a className=" opacity-60" href="#">
                  About
                </a>
                <a className=" opacity-60" href="#">
                  Features
                </a>
                <a className=" opacity-60" href="#">
                  Works
                </a>
                <a className=" opacity-60" href="#">
                  Career
                </a>
              </div>

              <div className="flex flex-col gap-4 text-sm lg:text-base">
                <h5 className=" tracking-[3px] font-medium">HELP</h5>
                <a className=" opacity-60" href="#">
                  Customer Support
                </a>
                <a className=" opacity-60" href="#">
                  Delivery Details
                </a>
                <a className=" opacity-60" href="#">
                  Terms & Conditions
                </a>
                <a className=" opacity-60" href="#">
                  Privacy Policy
                </a>
              </div>

              <div className="flex flex-col gap-4 text-sm lg:text-base">
                <h5 className=" tracking-[3px] font-medium">FAQ</h5>
                <a className=" opacity-60" href="#">
                  Account
                </a>
                <a className=" opacity-60" href="#">
                  Manage Deliveries
                </a>
                <a className=" opacity-60" href="#">
                  Orders
                </a>
                <a className=" opacity-60" href="#">
                  Payment
                </a>
              </div>

              <div className="flex flex-col gap-4 text-sm lg:text-base">
                <h5 className=" tracking-[3px] font-medium">RESOURCES</h5>
                <a className=" opacity-60" href="#">
                  Free eBook
                </a>
                <a className=" opacity-60" href="#">
                  Development Tutorial
                </a>
                <a className=" opacity-60" href="#">
                  How to - Blog
                </a>
                <a className=" opacity-60" href="#">
                  Youtube Playlist
                </a>
              </div>
            </div>
          </div>

          <hr className="pb-4 opacity-10" />
          <div className="md:flex md:justify-between items-center">
            <div className="flex flex-col justify-center opacity-60 text-sm mb-4 md:mb-0">
              <h5 className="text-center md:text-start">
                Shop.co © 2000-2023, All Rights Reserved
              </h5>
              <span className="text-center">
                developed by{" "}
                <a
                  className="underline"
                  target="_blank"
                  href="https://github.com/Siege-S"
                >
                  Siege-S
                </a>{" "}
                | original design by{" "}
                <a
                  className="underline"
                  target="_blank"
                  href="https://www.figma.com/community/file/1273571982885059508"
                >
                  Hamza Naeem
                </a>
              </span>
            </div>
            <div className="flex justify-center gap-2.5">
              <img
                className="py-2 px-1.5 bg-white rounded-sm shadow-md"
                src={paymentVisa}
                alt="payment visa"
              />
              <img
                className="py-2 px-1.5 bg-white rounded-sm shadow-md"
                src={paymentMaster}
                alt="payment master"
              />
              <img
                className="py-2 px-1.5 bg-white rounded-sm shadow-md"
                src={paymentPaypal}
                alt="payment paypal"
              />
              <img
                className="py-2 px-1.5 bg-white rounded-sm shadow-md"
                src={paymentApple}
                alt="payment apple"
              />
              <img
                className="py-2 px-1.5 bg-white rounded-sm shadow-md"
                src={paymentGoogle}
                alt="payment google"
              />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
