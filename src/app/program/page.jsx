"use client";
import { getData } from "@/lib/crud";
import combinedData from "@/lib/combineData";
import { useState, useRef, useEffect, Suspense } from "react";
import { Separator } from "@/components/ui/separator";
import Heading from "@/components/Headings";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Program() {
  const [midgard, setMidgard] = useState([]);
  const [vanaheim, setVanaheim] = useState([]);
  const [jotunheim, setJotunheim] = useState([]);
  const [day, setDay] = useState("mon");
  const [fullDay, setFullDay] = useState("Monday");
  const date = new Date();
  const hour = date.getHours();

  async function fetchData(parm) {
    const data = await combinedData();

    setMidgard(data.Midgard[parm]);
    setVanaheim(data.Vanaheim[parm]);
    setJotunheim(data.Jotunheim[parm]);
  }
  function convertToWeekDay(parm) {
    const dayFullName = {
      mon: "Monday",
      tue: "Tuesday",
      wed: "Wednesday",
      thu: "Thursday",
      fri: "Friday",
      sat: "Saturday",
      sun: "Sunday",
    };

    return dayFullName[parm];
  }

  useEffect(() => {
    fetchData(day);
    setFullDay(convertToWeekDay(day));
  }, [day]);

  const tableRef = useRef(null);

  useEffect(() => {
    const containerHeight = tableRef.current.clientHeight;

    const rowHeight = 100;

    const scrollToRow = parseInt(hour / 2 + 1);

    const scrollToPosition = parseInt(scrollToRow * rowHeight - containerHeight / 2);

    tableRef.current.scrollTop = scrollToPosition;
  }, [midgard]);

  return (
    <section className="px-10 grid">
      <Heading as="h1" size="2xl" customClass="justify-self-center mb-2">
        Program
      </Heading>
      <div className="flex justify-center flex-wrap">
        <Button
          onClick={() => {
            setDay("mon");
          }}
          variant="link"
        >
          Monday
        </Button>
        <Button
          onClick={() => {
            setDay("tue");
          }}
          variant="link"
        >
          Tuesday
        </Button>
        <Button
          onClick={() => {
            setDay("wed");
          }}
          variant="link"
        >
          Wednesday
        </Button>
        <Button
          onClick={() => {
            setDay("thu");
          }}
          variant="link"
        >
          Thursday
        </Button>
        <Button
          onClick={() => {
            setDay("fri");
          }}
          variant="link"
        >
          Friday
        </Button>
        <Button
          onClick={() => {
            setDay("sat");
          }}
          variant="link"
        >
          Saturday
        </Button>
        <Button
          onClick={() => {
            setDay("sun");
          }}
          variant="link"
        >
          Sunday
        </Button>
      </div>
      <Heading as="h2" size="2xl" customClass="justify-self-center py-10">
        {fullDay}
      </Heading>
      <div className="grid grid-cols-[100px,_repeat(auto-fit,_minmax(50px,_1fr))] border-b pb-3 gap-5 place-items-center">
        <Heading as="h2" size="ld">
          Time
        </Heading>
        <Heading as="h2" size="ld">
          Midgard
        </Heading>
        <Heading as="h2" size="ld">
          Vanaheim
        </Heading>
        <Heading as="h2" size="ld">
          Jotunheim
        </Heading>
      </div>
      <article ref={tableRef} className="h-[600px] overflow-scroll grid grid-cols-[100px,_repeat(auto-fit,_minmax(50px,_1fr))] text-center">
        <div>
          {midgard.map((time, i) => {
            return (
              <>
                <div key={time.start} className="h-[200px] py-3 grid">
                  <p className="">{time.start}</p>
                </div>
                <Separator className="self-end" />
              </>
            );
          })}
        </div>

        <div>
          {midgard.map((act, i) => {
            return (
              <>
                <div key={i} className="h-[200px] py-3 grid place-items-center">
                  {act.act === "break" ? "" : <Image className="row-start-1 col-start-1 rounded object-cover aspect-square" src={act.info && !act.info.startsWith("https") ? `http://localhost:8080/logos/${act.info}` : act.info} alt="Picture of the band" width={160} height={160} />}
                  <p className="row-start-1 col-start-1">{act.act === "break" ? "" : act.act}</p>
                </div>
                <Separator />
              </>
            );
          })}
        </div>
        <div>
          {vanaheim.map((act, i) => {
            return (
              <>
                <div key={i} className="h-[200px] py-3 grid place-items-center">
                  {act.act === "break" ? "" : <Image className="row-start-1 col-start-1 rounded object-cover aspect-square" src={act.info && !act.info.startsWith("https") ? `http://localhost:8080/logos/${act.info}` : act.info} alt="Picture of the band" width={160} height={160} />}
                  <p className="row-start-1 col-start-1">{act.act === "break" ? "" : act.act}</p>
                </div>
                <Separator />
              </>
            );
          })}
        </div>

        <div>
          {jotunheim.map((act, i) => {
            return (
              <>
                <div key={i} className="h-[200px] py-3 grid place-items-center">
                  {act.act === "break" ? "" : <Image className="row-start-1 col-start-1 rounded object-cover aspect-square" src={act.info && !act.info.startsWith("https") ? `http://localhost:8080/logos/${act.info}` : act.info} alt="Picture of the band" width={160} height={160} />}
                  <p className="row-start-1 col-start-1">{act.act === "break" ? "" : act.act}</p>
                </div>
                <Separator />
              </>
            );
          })}
        </div>
      </article>
    </section>
  );
}
