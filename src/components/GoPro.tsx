import React from "react";
import proIcon from "../assets/pro-icon.png";

const GoPro = () => {
  return (
    <div className="bg-secondary flex gap-5 items-center py-7 relative">
      <figure className="ml-5">
        <img src={proIcon} alt="Pro Icon" />
      </figure>
      <p className="text-primary_dark font-semibold">Go Pro Upgrade Now</p>
      <p className="absolute bg-primary_dark text-secondary text-xl p-4 top-0 right-8">
        $1
      </p>
    </div>
  );
};

export default GoPro;
