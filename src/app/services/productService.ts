export async function fetchProductData(lang: string = "en") {
  console.log("Fetching product data for language:", lang);
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
