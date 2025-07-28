"use client";

import { Suspense } from "react";

import { useSearchParams } from "next/navigation";

function Custom404ClientComponent() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q");

  return <div>Query: {query}</div>;
}

export default function NotFoundPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Custom404ClientComponent />
    </Suspense>
  );
}
