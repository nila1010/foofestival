import Inner from "./Inner";
import { getSpots } from "@/lib/crud";

export default async function Page() {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve("Operation successful");
    }, 8000); // Simulate a 2-second async operation
  });
  const spots = await getSpots();
  return <Inner spots={spots} />;
}
