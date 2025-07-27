"use client";
import React from "react";

interface Instructor {
  name: string;
  image: string;
  description: string;
  has_instructor_page?: boolean;
  slug?: string;
}

interface Props {
  title: string;
  instructors: Instructor[];
}

const InstructorsSection: React.FC<Props> = ({ title, instructors }) => (
  <section className="mb-8">
    <h2 className="text-xl font-semibold mb-3">{title}</h2>
    <div className="space-y-4">
      {instructors.map((inst) => (
        <div
          key={inst.name}
          className="flex items-center gap-4 bg-white border border-gray-200 rounded-xl p-4"
        >
          <img
            src={inst.image}
            alt={inst.name}
            className="w-14 h-14 rounded-full object-cover bg-yellow-100"
          />
          <div>
            <div className="font-semibold text-gray-900 flex items-center gap-1">
              {inst.has_instructor_page && inst.slug ? (
                <a
                  href={`/instructors/${inst.slug}`}
                  className="hover:underline flex items-center gap-1"
                >
                  {inst.name}
                  <span aria-hidden>›</span>
                </a>
              ) : (
                inst.name
              )}
            </div>
            <div
              className="text-gray-700 text-sm mt-1"
              dangerouslySetInnerHTML={{ __html: inst.description }}
            />
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default InstructorsSection;
