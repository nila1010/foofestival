import Inner from "./Inner";
import combinedData from "@/lib/combineData";
import { getData } from "@/lib/crud";

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
