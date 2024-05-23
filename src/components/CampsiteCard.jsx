import { useEffect, useState } from "react";
import Heading from "./Headings";
import { Button } from "./ui/button";
import Image from "next/image";
import { getReservation } from "@/lib/crud";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

export default function CampsiteCard({ title, description, spots, setCampSitePick, numOfTickets, setResId, setPage, setBookingInfo, imgPath }) {
  const [site, setSite] = useState();

  const btnStyle = "mx-auto max-h-[50px] max-w-fit rounded px-4 relative z-[1] overflow-hidden text-textsecon before:bg-primary before:content-[''] before:w-full before:h-full before:absolute before:inset-0 before:z-[-2] after:z-[-1] after:content-[''] after:w-0 after:h-full after:absolute after:top-0 after:left-[-40%] after:skew-x-[50deg] after:bg-secondary after:transition-all after:ease-out after:duration-700 hover:text-primary hover:after:w-[200%]";

  async function getResId() {
    const response = await getReservation(title, numOfTickets);
    setResId(response);
  }

  function setCamp(site) {
    setPage(2);
    setCampSitePick(site);
    getResId();
    setBookingInfo((o) => {
      return { ...o, campsite: title };
    });
  }
  function setNoCamp(site) {
    setPage(3);
    setCampSitePick(site);
    getResId();
    setBookingInfo((o) => {
      return { ...o, campsite: title };
    });
  }
  /* useEffect(() => {
    if (site) {
      setPage(2);
      setCampSitePick(site);
      getResId();
    }
  }, [site]); */
  return (
    <article className="grid rounded max-w-fit">
      <Image
        className="col-start-1 row-start-1"
        src={imgPath}
        width={228}
        height={494}
        alt="Picture of the campesite"></Image>
      <div className="col-start-1 row-start-1 grid z-10 justify-center">
        <div>
          <Heading
            as="h3"
            size="xl"
            customClass="mx-auto my-2">
            {title}
          </Heading>
          <p className="max-w-[25ch] text-center text-sm">{description}</p>
        </div>
        <p className="text-xl text-center">
          <span>{spots} </span>spots left
        </p>
        <Popover data-side="top">
          <PopoverTrigger className={`${btnStyle}`}>Pick site</PopoverTrigger>
          <PopoverContent>
            <p className="text-center text-lg">You want us to set up your camp?</p>
            <p className="text-center text-sm">You can choose to buy tents and we will prepair them for you </p>
            <div className="flex gap-5 justify-center mt-3">
              <Button
                onClick={() => {
                  setCamp(title);
                }}
                variant="defaultline">
                Yes
              </Button>
              <Button
                onClick={() => {
                  setNoCamp(title);
                }}
                variant="defaultline">
                No
              </Button>
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </article>
  );
}
