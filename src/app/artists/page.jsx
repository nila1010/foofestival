import { getData, getLikes } from "@/lib/crud";
import Inner from "./Inner";

export default async function Page() {
  const { data, likes } = await fetchData();

  async function fetchData() {
    const data = await getData("bands");
    const likes = await getLikes("Nicolai");
    return { data, likes };
  }

  return (
    <Inner
      data={data}
      liked={likes}
    />
  );
}
