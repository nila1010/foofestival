import { getData, getLikes } from "@/lib/crud";

import Inner from "./Inner";

export default async function Page() {
  /*   await new Promise((resolve) => {
    setTimeout(() => {
      resolve("Operation successful");
    }, 8000); // Simulate a 2-second async operation
  }); */
  const data = await getData("bands");
  const likes = await getLikes("Nicolai");

  return (
    <Inner
      data={data}
      likes={likes}
    />
  );
}
