import React, { useState } from "react";

const FilterColor = () => {
  const [selected, setSelected] = useState(1);
  const [isColorMenuOpen, setIsColorMenuOpen] = useState(true);
  const toggleColorMenu = () => {
    setIsColorMenuOpen((prevState) => !prevState);
  };
  return (
    <>
      <div className="flex justify-between" onClick={toggleColorMenu}>
        <strong className="text-xl">Color</strong>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={`size-6 duration-500 ${
            isColorMenuOpen ? "" : "-rotate-180"
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
        className={`flex flex-wrap gap-4  justify-items-center items-center overflow-hidden duration-300 ${
          isColorMenuOpen ? "max-h-40 pt-4 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <button
          className={`size-9 bg-green-600 border-2 border-black/10 rounded-full`}
          onClick={() => setSelected((prevState) => (prevState = 1))}
        >
          {selected === 1 && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={3}
              stroke="currentColor"
              className="size-4 m-auto text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 12.75 6 6 9-13.5"
              />
            </svg>
          )}
        </button>
        <button
          className={`size-9 bg-red-600 border-2 border-black/10 rounded-full`}
          onClick={() => setSelected((prevState) => (prevState = 2))}
        >
          {selected === 2 && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={3}
              stroke="currentColor"
              className="size-4 m-auto text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 12.75 6 6 9-13.5"
              />
            </svg>
          )}
        </button>
        <button
          className={`size-9 bg-yellow-300 border-2 border-black/10 rounded-full`}
          onClick={() => setSelected((prevState) => (prevState = 3))}
        >
          {selected === 3 && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={3}
              stroke="currentColor"
              className="size-4 m-auto text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 12.75 6 6 9-13.5"
              />
            </svg>
          )}
        </button>
        <button
          className={`size-9 bg-orange-600 border-2 border-black/10 rounded-full`}
          onClick={() => setSelected((prevState) => (prevState = 4))}
        >
          {selected === 4 && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={3}
              stroke="currentColor"
              className="size-4 m-auto text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 12.75 6 6 9-13.5"
              />
            </svg>
          )}
        </button>
        <button
          className={`size-9 bg-blue-300 border-2 border-black/10 rounded-full`}
          onClick={() => setSelected((prevState) => (prevState = 5))}
        >
          {selected === 5 && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={3}
              stroke="currentColor"
              className="size-4 m-auto text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 12.75 6 6 9-13.5"
              />
            </svg>
          )}
        </button>
        <button
          className={`size-9 bg-blue-700 border-2 border-black/10 rounded-full`}
          onClick={() => setSelected((prevState) => (prevState = 6))}
        >
          {selected === 6 && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={3}
              stroke="currentColor"
              className="size-4 m-auto text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 12.75 6 6 9-13.5"
              />
            </svg>
          )}
        </button>
        <button
          className={`size-9 bg-violet-500 border-2 border-black/10 rounded-full`}
          onClick={() => setSelected((prevState) => (prevState = 7))}
        >
          {selected === 7 && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={3}
              stroke="currentColor"
              className="size-4 m-auto text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 12.75 6 6 9-13.5"
              />
            </svg>
          )}
        </button>
        <button
          className={`size-9 bg-pink-500 border-2 border-black/10 rounded-full`}
          onClick={() => setSelected((prevState) => (prevState = 8))}
        >
          {selected === 8 && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={3}
              stroke="currentColor"
              className="size-4 m-auto text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 12.75 6 6 9-13.5"
              />
            </svg>
          )}
        </button>
        <button
          className={`size-9 bg-white border-2 border-black/10 rounded-full`}
          onClick={() => setSelected((prevState) => (prevState = 9))}
        >
          {selected === 9 && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={3}
              stroke="currentColor"
              className="size-4 m-auto text-black"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 12.75 6 6 9-13.5"
              />
            </svg>
          )}
        </button>
        <button
          className={`size-9 bg-black border-2 border-white/30 rounded-full`}
          onClick={() => setSelected((prevState) => (prevState = 10))}
        >
          {selected === 10 && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={3}
              stroke="currentColor"
              className="size-4 m-auto text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 12.75 6 6 9-13.5"
              />
            </svg>
          )}
        </button>
      </div>
    </>
  );
};

export default FilterColor;
