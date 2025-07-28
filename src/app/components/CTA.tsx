"use client";
import React from "react";

interface Props {
  price?: number;
  oldPrice?: number;
  discountText?: string;
  buttonText?: string;
}

const CTA: React.FC<Props> = ({
  price = 3850,
  oldPrice = 5000,
  discountText = "১১৫০ ৳ ছাড়",
  buttonText = "Enroll",
}) => {
  return (
    <div className="m-3 ">
      <div className="flex gap-2 mb-4">
        <span className="text-2xl font-bold text-[#111]">৳{price}</span>
        <span className="text-lg text-gray-400 line-through">৳{oldPrice}</span>
        <span className="flex pl-2 items-center">
          <span className="w-2 h-2 bg-white rounded-full -mr-1 z-10"></span>
          <span className="relative flex items-center bg-[#ff7a4d] text-white text-xs font-semibold rounded px-3 py-1 ml-[-6px]">
            <svg
              width="8"
              height="24"
              viewBox="0 0 8 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute left-[-8px] top-0 h-full"
              style={{ display: "block" }}
            >
              <polygon points="8,0 0,12 8,24" fill="#ff7a4d" />
            </svg>
            <span className="relative z-10  text-[10px]">{discountText}</span>
          </span>
        </span>
      </div>
      <button
        className="block w-full text-center bg-[#18b157] hover:bg-[#159c48] transition-colors duration-200 text-white py-3 rounded-lg font-semibold text-base shadow"
        style={{ minHeight: "48px" }}
      >
        {buttonText}
      </button>
    </div>
  );
};

export default CTA;
