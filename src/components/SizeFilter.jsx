import React, { useState } from "react";

const SizeFilter = () => {
  const [selectedButton, setSelectedButton] = useState(5);
  const [isSizeMenuOpen, setIsSizeMenuOpen] = useState(true);
  const toggleSizeMenu = () => {
    setIsSizeMenuOpen((prevState) => !prevState);
  };
  return (
    <div>
      <div className="flex justify-between " onClick={toggleSizeMenu}>
        <strong className="text-xl ">Size</strong>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={`size-6 duration-500 ${
            isSizeMenuOpen ? "" : "-rotate-180"
          }`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m4.5 15.75 7.5-7.5 7.5 7.5"
          />
        </svg>
      </div>

      <div
        className={`flex flex-wrap gap-2 overflow-hidden duration-300 ${
          isSizeMenuOpen ? "max-h-80 pt-4 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <button
          className={`py-2.5 px-5 rounded-full text-sm  ${
            selectedButton === 1
              ? "bg-black text-white"
              : "bg-lightGrey text-black/60"
          }`}
          onClick={() => setSelectedButton((prevState) => (prevState = 1))}
        >
          XX-Small
        </button>

        <button
          className={`py-2.5 px-5 rounded-full text-sm  ${
            selectedButton === 2
              ? "bg-black text-white"
              : "bg-lightGrey text-black/60"
          }`}
          onClick={() => setSelectedButton((prevState) => (prevState = 2))}
        >
          X-Small
        </button>

        <button
          className={`py-2.5 px-5 rounded-full text-sm  ${
            selectedButton === 3
              ? "bg-black text-white"
              : "bg-lightGrey text-black/60"
          }`}
          onClick={() => setSelectedButton((prevState) => (prevState = 3))}
        >
          Small
        </button>

        <button
          className={`py-2.5 px-5 rounded-full text-sm  ${
            selectedButton === 4
              ? "bg-black text-white"
              : "bg-lightGrey text-black/60"
          }`}
          onClick={() => setSelectedButton((prevState) => (prevState = 4))}
        >
          Medium
        </button>

        <button
          className={`py-2.5 px-5 rounded-full text-sm  ${
            selectedButton === 5
              ? "bg-black text-white"
              : "bg-lightGrey text-black/60"
          }`}
          onClick={() => setSelectedButton((prevState) => (prevState = 5))}
        >
          Large
        </button>

        <button
          className={`py-2.5 px-5 rounded-full text-sm  ${
            selectedButton === 6
              ? "bg-black text-white"
              : "bg-lightGrey text-black/60"
          }`}
          onClick={() => setSelectedButton((prevState) => (prevState = 6))}
        >
          X-Large
        </button>

        <button
          className={`py-2.5 px-5 rounded-full text-sm  ${
            selectedButton === 7
              ? "bg-black text-white"
              : "bg-lightGrey text-black/60"
          }`}
          onClick={() => setSelectedButton((prevState) => (prevState = 7))}
        >
          XX-Large
        </button>

        <button
          className={`py-2.5 px-5 rounded-full text-sm  ${
            selectedButton === 8
              ? "bg-black text-white"
              : "bg-lightGrey text-black/60"
          }`}
          onClick={() => setSelectedButton((prevState) => (prevState = 8))}
        >
          3X-Large
        </button>

        <button
          className={`py-2.5 px-5 rounded-full text-sm  ${
            selectedButton === 9
              ? "bg-black text-white"
              : "bg-lightGrey text-black/60"
          }`}
          onClick={() => setSelectedButton((prevState) => (prevState = 9))}
        >
          4X-Large
        </button>
      </div>
    </div>
  );
};

export default SizeFilter;
