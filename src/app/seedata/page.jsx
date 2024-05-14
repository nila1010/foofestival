import combinedData from "@/lib/combineData";

export default async function page() {
  const data = await combinedData();
  console.log({ data });
  return <div>page</div>;
}
