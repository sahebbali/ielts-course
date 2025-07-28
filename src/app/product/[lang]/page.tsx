import React from "react";
import { Metadata } from "next";
import TitleAndDescription from "../../components/TitleAndDescription";
import SectionBlock from "../../components/SectionBlock";

import Checklist from "../../components/Checklist";
import CTA from "../../components/CTA";
import VideoGallery from "../../components/VideoGallery";
import FeaturesSection from "../../components/FeaturesSection";
import InstructorsSection from "../../components/InstructorsSection";
import GroupJoinEngagement from "../../components/GroupJoinEngagement";
import PointersSection from "../../components/PointersSection";
import FeatureExplanationsSection from "../../components/FeatureExplanationsSection";
import { fetchProductData } from "../../services/productService";

export async function generateMetadata({
  params,
}: {
  params: { lang: "en" | "bn" };
}): Promise<Metadata> {
  const response = await fetchProductData(params.lang);
  const seo = response.data?.seo || {};

  return {
    title:
      seo.title || "Best IELTS Preparation Course by Munzereen Shahid [2025]",
    description: seo.description,
    keywords: seo.keywords,
    openGraph: {
      title: seo.title,
      description: seo.description,
      images: [
        {
          url: "/10mslogo-svg.svg",
          width: 120,
          height: 40,
          alt: "10 Minute School Logo",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: seo.title,
      description: seo.description,
      images: ["/10mslogo-svg.svg"],
    },
  };
}

export default async function ProductPage({
  params,
}: {
  params: { lang: "en" | "bn" };
}) {
  const response = await fetchProductData(params.lang);
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
  // console.log("data.checklist:", data.checklist);
  console.log("seo", data.seo.defaultMeta);
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
