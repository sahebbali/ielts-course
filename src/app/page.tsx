import React from "react";
import { Metadata } from "next";
import TitleAndDescription from "./components/TitleAndDescription";
import SectionBlock from "./components/SectionBlock";
import Trailer from "./components/Trailer";
import Checklist from "./components/Checklist";
import CTA from "./components/CTA";

async function fetchProductData(lang: string = "en") {
  const res = await fetch(
    `https://api.10minuteschool.com/discovery-service/api/v1/products/ielts-course?lang=${lang}`,
    {
      headers: {
        "X-TENMS-SOURCE-PLATFORM": "web",
        accept: "application/json",
      },
      next: { revalidate: 60 },
    }
  );
  return res.json();
}

export const metadata: Metadata = {
  title: "IELTS Course | 10 Minute School",
};

export default async function ProductPage() {
  const response = await fetchProductData();
  const data = response.data; // Access the nested data property
  
  console.log("Product Data:", data);
  
  if (!data || !data.sections) {
    return (
      <main className="p-4 max-w-7xl mx-auto">
        <p className="text-red-500">
          Failed to load course data. Please try again later.
        </p>
      </main>
    );
  }

  // Correct section filtering based on actual API response
  const instructors = data.sections.filter((s: any) => s.type === "instructors");
  const features = data.sections.filter((s: any) => s.type === "features");
  const pointers = data.sections.filter((s: any) => s.type === "pointers");
  const about = data.sections.filter((s: any) => s.type === "about");
  
  // Correct media filtering
  const trailer = data.media.find((m: any) => m.resource_type === "video");
console.log("data.checklist:", data.checklist);
  return (
    <main className="p-4 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2">
        <TitleAndDescription
          title={data.title}
          description={data.description}
        />

        {instructors.length > 0 && (
          <SectionBlock title="Instructors" sections={instructors} />
        )}
        
        {features.length > 0 && (
          <SectionBlock title="How the course is laid out" sections={features} />
        )}
        
        {pointers.length > 0 && (
          <SectionBlock title="What you will learn" sections={pointers} />
        )}
        
        {about.length > 0 && (
          <SectionBlock title="Course Details" sections={about} />
        )}
      </div>

      <div className="space-y-6">
        {trailer && <Trailer url={trailer.resource_value} />}
        <CTA text={data.cta_text?.value || "Enroll Now"} />
        <Checklist items={data.checklist} />
      </div>
    </main>
  );
}