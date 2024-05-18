import { useEffect, useState } from "react";
import Heading from "./Headings";
import { Button } from "./ui/button";
import Image from "next/image";
import { getReservation } from "@/lib/crud";

export default function CampsiteCard({ title, description, spots, setCampSitePick, numOfTickets, setResId, setPage }) {
  const [site, setSite] = useState();

  async function getResId() {
    const response = await getReservation(title, numOfTickets);
    setResId(response);
  }
  useEffect(() => {
    if (site) {
      setPage(2);
      setCampSitePick(site);
      getResId();
    }
  }, [site]);
  return (
    <article className="grid rounded max-w-fit">
      <Image className="col-start-1 row-start-1" src="/img/campsite.png" width={228} height={494} alt="Picture of the campesite"></Image>
      <div className="col-start-1 row-start-1 grid z-10 justify-center">
        <div>
          <Heading as="h3" size="xl" customClass="mx-auto my-2">
            {title}
          </Heading>
          <p className="max-w-[25ch] text-center text-sm">{description}</p>
        </div>
        <p className="text-xl">
          <span>{spots} </span>spots left
        </p>
        <Button
          onClick={() => {
            setSite(title);
          }}
          variant="default"
          className="mx-auto"
        >
          Pick Site
        </Button>
      </div>
    </article>
  );
}
