import React from "react";
import { Metadata } from "next";
import TitleAndDescription from "./components/TitleAndDescription";
import SectionBlock from "./components/SectionBlock";
import Trailer from "./components/Trailer";
import Checklist from "./components/Checklist";
import CTA from "./components/CTA";
import VideoGallery from "./components/VideoGallery";
import FeaturesSection from "./components/FeaturesSection";
import InstructorsSection from "./components/InstructorsSection";
import GroupJoinEngagement from "./components/GroupJoinEngagement";
import PointersSection from "./components/PointersSection";
import FeatureExplanationsSection from "./components/FeatureExplanationsSection";

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
  const instructors = data.sections.filter(
    (s: any) => s.type === "instructors"
  );
  const features = data.sections.filter((s: any) => s.type === "features");
  const pointers = data.sections.filter((s: any) => s.type === "pointers");
  const about = data.sections.filter((s: any) => s.type === "about");
  const featureExplanations = data.sections.filter(
    (s: any) => s.type === "feature_explanations"
  );

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
          <InstructorsSection
            title={instructors[0].name}
            instructors={instructors[0].values}
          />
        )}

        {features.length > 0 && (
          <FeaturesSection
            title={features[0].name}
            features={features[0].values}
          />
        )}
        {data.sections
          .filter((s: any) => s.type === "group_join_engagement")
          .map((section: any) =>
            section.values.map((value: any) => (
              <GroupJoinEngagement key={value.id} value={value} />
            ))
          )}

        {pointers.length > 0 && (
          <PointersSection
            title={pointers[0].name}
            pointers={pointers[0].values}
          />
        )}

        {about.length > 0 && (
          <SectionBlock title={about[0].name} sections={about} />
        )}

        {featureExplanations.length > 0 && (
          <FeatureExplanationsSection
            title={featureExplanations[0].name}
            features={featureExplanations[0].values}
          />
        )}
      </div>

      <div className="border-2 border-gray-200 p-2 h-fit bg-white">
        {trailer && <VideoGallery media={data.media} />}
        <CTA text={data.cta_text?.name || "Enroll Now"} />
        <Checklist items={data.checklist} />
      </div>
    </main>
  );
}
