import Inner from "./Inner";
import combinedData from "@/lib/combineData";
import { getData } from "@/lib/crud";

export async function generateStaticParams() {
  const data = await getData("bands");
  return data.map((oneBand) => ({
    slug: oneBand.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = params;
  const fetchData = await getData("bands");
  const filterData = fetchData.filter((oneBand) => oneBand.slug === slug);
  const data = filterData[0];
  if (!data) return NotFound();
  return {
    title: `${data.name} - FooFestival, where the vibrant energy of youth converges with the electrifying beats"`,
  };
}

export default async function Page({ params }) {
  const { slug } = params;
  const fetchData = await combinedData();
  return (
    <Inner
      fetchData={fetchData}
      slug={slug}
    />
  );
}
