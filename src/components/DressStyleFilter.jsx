import React, { useState } from "react";

const DressStyleFilter = () => {
  const [isDressStyleMenuOpen, setIsDressStyleMenuOpen] = useState(true);
  const toggleDressStyleMenu = () => {
    setIsDressStyleMenuOpen((prevState) => !prevState);
  };
  return (
    <div>
      <div className="flex justify-between" onClick={toggleDressStyleMenu}>
        <strong className="text-xl">Dress Style</strong>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={`size-6 transform duration-300 cursor-pointer ${
            isDressStyleMenuOpen ? "" : "-rotate-180"
          }`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m4.5 15.75 7.5-7.5 7.5 7.5"
          />
        </svg>
      </div>

      <ul
        className={`space-y-5 overflow-hidden duration-300 ${
          isDressStyleMenuOpen
            ? "max-h-80 mt-5 opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >
        <li className="flex justify-between opacity-60 cursor-pointer">
          <span>Casual</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        </li>
        <li className="flex justify-between opacity-60 cursor-pointer">
          <span>Formal</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        </li>
        <li className="flex justify-between opacity-60 cursor-pointer">
          <span>Party</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        </li>
        <li className="flex justify-between opacity-60 cursor-pointer">
          <span>Gym</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        </li>
      </ul>
    </div>
  );
};

export default DressStyleFilter;
