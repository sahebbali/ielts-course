"use client";
import React from "react";

interface Props {
  text: string;
  url: string;
}

const CTA: React.FC<Props> = ({ text,  }) => {
  return (
    <a
    //   href={url}
      className="inline-block w-full text-center bg-[#1cab55] text-white py-3 rounded-lg font-semibold"
    >
      {text || "Enroll Now (৳1000)"}
    </a>
  );
};

export default CTA;
