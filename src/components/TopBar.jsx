import React, { useState } from "react";

const TopBar = () => {
  const [show, setShow] = useState(true);
  const handleClick = () => {
    if (show) {
      setShow(!show);
    } else {
      setShow(show);
    }
  };
  if (!show) return null;
  return (
    <div className="bg-black ">
      <div className="relative container mx-auto flex justify-center md:px-4 xl:px-0">
        <h3 className="font-satoshi text-xs text-center py-2.5 text-white md:text-sm">
          Sign up and get 20% off to your first order.{" "}
          <a className="underline underline-offset-2" href="#">
            Sign Up Now
          </a>
        </h3>

        <i
          onClick={handleClick}
          className="fa-solid fa-xmark absolute right-5 top-2.5 cursor-pointer text-white !hidden md:!flex"
        ></i>
      </div>
    </div>
  );
};

export default TopBar;
