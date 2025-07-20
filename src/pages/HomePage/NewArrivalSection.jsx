import React from "react";
import test from "../../../php/uploads/T-shirt1.svg";
const NewArrivalSection = () => {
  return (
    <section className="container mx-auto px-4 py-12.5 xl-px-0">
      <h2 className="font-integralcf font-bold text-3xl text-center mb-8">
        NEW ARRIVALS
      </h2>

      <div className="flex overflow-scroll gap-4">
        <figure className="w-50">
          <div className="size-50 mb-2.5">
            <img className="rounded-xl" src={test} alt="" />
          </div>
          <div className="flex flex-col gap-y1">
            <figcaption className="font-bold">
              T-shirt with Tape Details
            </figcaption>
            <input type="range" min={0} max={5} />
            <span className="text-xl font-bold">$120</span>
          </div>
        </figure>
        <figure className="w-50">
          <div className="size-50 mb-2.5">
            <img className="rounded-xl" src={test} alt="" />
          </div>
          <div className="flex flex-col gap-y1">
            <figcaption className="font-bold">
              T-shirt with Tape Details
            </figcaption>
            <input type="range" min={0} max={5} />
            <span className="text-xl font-bold">$120</span>
          </div>
        </figure>
        <figure className="w-50">
          <div className="size-50 mb-2.5">
            <img className="rounded-xl" src={test} alt="" />
          </div>
          <div className="flex flex-col gap-y1">
            <figcaption className="font-bold">
              T-shirt with Tape Details
            </figcaption>
            <input type="range" min={0} max={5} />
            <span className="text-xl font-bold">$120</span>
          </div>
        </figure>
        <figure className="w-50">
          <div className="size-50 mb-2.5">
            <img className="rounded-xl" src={test} alt="" />
          </div>
          <div className="flex flex-col gap-y1">
            <figcaption className="font-bold">
              T-shirt with Tape Details
            </figcaption>
            <input type="range" min={0} max={5} />
            <span className="text-xl font-bold">$120</span>
          </div>
        </figure>
      </div>
    </section>
  );
};

export default NewArrivalSection;
