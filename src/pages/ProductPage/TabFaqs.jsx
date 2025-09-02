import React, { useState } from "react";

const TabFaqs = () => {
  const [isOpen, setIsOpen] = useState(0);
  return (
    <div>
      <h4 className="mb-5 text-xl md:text-2xl font-bold">
        Frequently Asked Questions
      </h4>
      <div className="py-4 border-b border-black/10">
        <div
          className="flex items-center justify-between"
          onClick={() => {
            isOpen === 1 ? setIsOpen(0) : setIsOpen(1);
          }}
        >
          <strong className="text-sm">
            What is the material of the t-shirt?
          </strong>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={`size-4 duration-300 ${
              isOpen === 1 ? "rotate-180" : ""
            }`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
        </div>
        <p
          className={`overflow-hidden duration-200 text-sm ${
            isOpen === 1 ? "max-h-20 opacity-100 mt-4" : "max-h-0 opacity-0"
          }`}
        >
          Our t-shirts are made from a breathable blend of cotton and linen,
          ensuring comfort and durability.
        </p>
      </div>
      <div className="py-4 border-b border-black/10">
        <div
          className="flex items-center justify-between"
          onClick={() => {
            isOpen === 2 ? setIsOpen(0) : setIsOpen(2);
          }}
        >
          <strong className="text-sm">
            How should I wash and care for my purchase?
          </strong>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={`size-4 duration-300 ${
              isOpen === 2 ? "rotate-180" : ""
            }`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
        </div>
        <p
          className={`overflow-hidden duration-200 text-sm ${
            isOpen === 2 ? "max-h-20 opacity-100 mt-4" : "max-h-0 opacity-0"
          }`}
        >
          We recommend checking the care label for each item. Generally, machine
          wash in cold water, avoid bleach, and tumble dry on low for best
          results.
        </p>
      </div>
      <div className="py-4 border-b border-black/10">
        <div
          className="flex items-center justify-between"
          onClick={() => {
            isOpen === 3 ? setIsOpen(0) : setIsOpen(3);
          }}
        >
          <strong className="text-sm">Do you offer size guides?</strong>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={`size-4 duration-300 ${
              isOpen === 3 ? "rotate-180" : ""
            }`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
        </div>
        <p
          className={`overflow-hidden duration-200 text-sm ${
            isOpen === 3 ? "max-h-20 opacity-100 mt-4" : "max-h-0 opacity-0"
          }`}
        >
          Yes! Each product page includes a detailed size chart to help you
          choose the perfect fit.
        </p>
      </div>
      <div className="py-4 border-b border-black/10">
        <div
          className="flex items-center justify-between"
          onClick={() => {
            isOpen === 4 ? setIsOpen(0) : setIsOpen(4);
          }}
        >
          <strong className="text-sm">
            What is your return and exchange policy?
          </strong>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={`size-4 duration-300 ${
              isOpen === 4 ? "rotate-180" : ""
            }`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
        </div>
        <p
          className={`overflow-hidden duration-200 text-sm ${
            isOpen === 4 ? "max-h-20 opacity-100 mt-4" : "max-h-0 opacity-0"
          }`}
        >
          We offer hassle-free returns and exchanges within 14 days of delivery,
          as long as the item is unused and in its original packaging.
        </p>
      </div>
      <div className="py-4 border-b border-black/10">
        <div
          className="flex items-center justify-between"
          onClick={() => {
            isOpen === 5 ? setIsOpen(0) : setIsOpen(5);
          }}
        >
          <strong className="text-sm">Do you ship internationally?</strong>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={`size-4 duration-300 ${
              isOpen === 5 ? "rotate-180" : ""
            }`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
        </div>
        <p
          className={`overflow-hidden duration-200 text-sm ${
            isOpen === 5 ? "max-h-20 opacity-100 mt-4" : "max-h-0 opacity-0"
          }`}
        >
          Yes, we ship worldwide. International shipping times vary depending on
          the destination.
        </p>
      </div>
    </div>
  );
};

export default TabFaqs;
