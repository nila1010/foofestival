import Inner from "./Inner";
import { getSpots } from "@/lib/crud";

export default async function Page() {
  const spots = await getSpots();
  return <Inner spots={spots} />;
}
