import React from "react";
import verified from "../../assets/icons/verified_icon.svg";
import starRate from "../../assets/icons/star_rate.svg";
import dot from "../../assets/icons/dot.svg";
const ReviewCard = ({ name, review, date }) => {
  return (
    <div className="p-6 border border-black/10 rounded-[20px] h-full">
      <div className="flex justify-between items-center mb-3.5">
        <img src={starRate} alt="rating" />
        <img src={dot} alt="menu" />
      </div>
      <div className="flex gap-1 items-center mb-2">
        <strong>{name}</strong>
        <img src={verified} alt="verified-icon" />
      </div>
      <p className="mb-1 text-black/60 text-sm">{`"${review}"`}</p>

      <span className="text-sm font-semibold text-black/60">
        {`Posted on ${date}`}
      </span>
    </div>
  );
};

export default ReviewCard;
