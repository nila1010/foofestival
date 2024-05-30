import combinedData from "@/lib/combineData";
import Inner from "./Inner";
export default async function Page() {
  const data = await combinedData();
  return <Inner data={data} />;
}
