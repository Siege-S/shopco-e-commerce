import React from "react";

const TabProductDetails = () => {
  return (
    <div>
      <h4 className="mb-5 text-xl md:text-2xl font-bold">Product Details</h4>
      <div className="space-y-8">
        <div className="flex items-center">
          <p className="text-black/60 w-1/3 text-sm">Material Compositon</p>
          <span className="text-sm font-bold">70% Cotton, 30% Linen</span>
        </div>
        <div className="flex items-center">
          <p className="text-black/60 w-1/3 text-sm">Care Instruction</p>
          <span className="text-sm font-bold">Machine wash cold, line dry</span>
        </div>
        <div className="flex items-center">
          <p className="text-black/60 w-1/3 text-sm">Fit type</p>
          <span className="text-sm font-semibold">Relaxed Fit</span>
        </div>

        <div className="flex items-center">
          <p className="text-black/60 w-1/3 text-sm">Pattern</p>
          <span className="text-sm font-semibold">Plain</span>
        </div>
      </div>
    </div>
  );
};

export default TabProductDetails;
