"use client";
import combinedData from "@/lib/combineData";
import { useState, useEffect } from "react";
import Heading from "@/components/Headings";
import { Button } from "@/components/ui/button";
import CardProgram from "@/components/CardProgram";
import { Separator } from "@/components/ui/separator";

export default function Program() {
  const [midgard, setMidgard] = useState([]);
  const [vanaheim, setVanaheim] = useState([]);
  const [jotunheim, setJotunheim] = useState([]);
  const [day, setDay] = useState("mon");
  const [fullDay, setFullDay] = useState("Monday");

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

  return (
    <section className="grid auto-rows-max">
      <Heading
        as="h1"
        size="3xl"
        customClass="justify-self-center mb-5">
        Program
      </Heading>
      <div className="flex justify-center flex-wrap">
        <Button
          className="max-w-fit"
          onClick={() => {
            setDay("mon");
          }}
          variant="link">
          Monday
        </Button>
        <Button
          className="max-w-fit"
          onClick={() => {
            setDay("tue");
          }}
          variant="link">
          Tuesday
        </Button>
        <Button
          className="max-w-fit"
          onClick={() => {
            setDay("wed");
          }}
          variant="link">
          Wednesday
        </Button>
        <Button
          className="max-w-fit"
          onClick={() => {
            setDay("thu");
          }}
          variant="link">
          Thursday
        </Button>
        <Button
          className="max-w-fit"
          onClick={() => {
            setDay("fri");
          }}
          variant="link">
          Friday
        </Button>
        <Button
          className="max-w-fit"
          onClick={() => {
            setDay("sat");
          }}
          variant="link">
          Saturday
        </Button>
        <Button
          className="max-w-fit"
          onClick={() => {
            setDay("sun");
          }}
          variant="link">
          Sunday
        </Button>
      </div>
      <Heading
        as="h2"
        size="2xl"
        customClass="justify-self-center py-5">
        {fullDay}
      </Heading>
      <article className="grid grid-cols-1">
        <Heading
          as="h3"
          size="xl">
          Midgard
        </Heading>
        <Separator />
        <div className="overflow-auto">
          <div className="flex">
            {midgard.map((act) => {
              return (
                <CardProgram
                  key={act.logo}
                  band={act}
                />
              );
            })}
          </div>
        </div>
        <Heading
          customClass="mt-5"
          as="h3"
          size="xl">
          Vanaheim
        </Heading>
        <Separator />
        <div className="overflow-auto">
          <div className="flex">
            {vanaheim.map((act) => {
              return (
                <CardProgram
                  key={act.logo}
                  band={act}
                />
              );
            })}
          </div>
        </div>
        <Heading
          customClass="mt-5"
          as="h3"
          size="xl">
          Jotunheim
        </Heading>
        <Separator />
        <div className="overflow-auto">
          <div className="flex">
            {jotunheim.map((act) => {
              return (
                <CardProgram
                  key={act.logo}
                  band={act}
                />
              );
            })}
          </div>
        </div>
      </article>
    </section>
  );
}
