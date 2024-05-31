import { getData, getLikes } from "@/lib/crud";

import Inner from "./Inner";

export default async function Page() {
  const data = await getData("bands");
  const likes = await getLikes("Nicolai");

  return (
    <Inner
      data={data}
      likes={likes}
    />
  );
}
