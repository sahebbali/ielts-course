"use client";
import React from "react";

interface FeatureItem {
  id: string;
  icon: string;
  title: string;
  subtitle: string;
}

interface Props {
  title: string;
  features: FeatureItem[];
}

const FeaturesSection: React.FC<Props> = ({ title, features }) => (
  <section className="mb-8">
    <h2 className="text-xl font-semibold mb-3">{title}</h2>
    <div className="bg-[#101828] rounded-xl p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
      {features.map((item) => (
        <div key={item.id} className="flex items-start gap-4">
          <img
            src={item.icon}
            alt={item.title}
            className="w-10 h-10 rounded-full bg-white p-1 flex-shrink-0"
          />
          <div>
            <div className="text-white font-bold text-base mb-1">
              {item.title}
            </div>
            <div className="text-gray-200 text-sm">{item.subtitle}</div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default FeaturesSection;
