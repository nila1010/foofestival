import Heading from "@/components/Headings";
import Image from "next/image";
import { endPoint, getData } from "@/lib/crud";
import combinedData from "@/lib/combineData";

export async function generateStaticParams() {
  const data = await getData("bands");
  return data.map((oneBand) => ({
    slug: oneBand.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = params;
  const fetchData = await getData("bands");
  const filterData = fetchData.filter((oneBand) => oneBand.slug === slug);
  const data = filterData[0];
  if (!data) return NotFound();
  return {
    title: `${data.name} - FooFestival, where the vibrant energy of youth converges with the electrifying beats"`,
  };
}

export default async function OneBand({ params }) {
  const { slug } = params;
  const fetchData = await combinedData();
  const filterData = Object.entries(fetchData).map((venue) => {
    const filtered = Object.entries(venue[1]).map((oneDay) => oneDay[1].filter((band) => band.slug === slug));
    return filtered;
  });

  const dataFlattend = filterData.flat(Infinity);
  const data = dataFlattend[0];
  const dayFullName = {
    mon: "Monday",
    tue: "Tuesday",
    wed: "Wednesday",
    thu: "Thursday",
    fri: "Friday",
    sat: "Saturday",
    sun: "Sunday",
  };

  if (!data) return NotFound();

  return (
    <section>
      <Heading
        as="h1"
        size="3xl">
        {data.act}
      </Heading>
      <Heading
        as="h2"
        size="lg">
        Playing at
      </Heading>
      <div className="flex items-end gap-5">
        <p>{data.venue}</p>
        <p>{dayFullName[data.day]}</p>{" "}
        <p>
          {data.start}-{data.end}
        </p>
      </div>
      <Image
        className="rounded w-full object-cover aspect-video mt-3"
        src={!data.logo.startsWith("https") ? `${endPoint}/logos/${data.logo}` : data.logo}
        alt="Picture of the band"
        width={1600}
        height={800}
      />
      <div className="max-w-prose mt-5">
        <Heading
          as="h2"
          size="lg"
          customClass="mb-3">
          Members
        </Heading>
        <div className="flex flex-wrap gap-2 mb-10 w-fit">
          {data.members.map((member) => {
            return (
              <p
                className="leading-5"
                key={member}>
                {member}
              </p>
            );
          })}
        </div>
      </div>
      <Heading
        as="h3"
        size="lg"
        customClass="mt-10 mb-3 ">
        Insterested about the band?
      </Heading>
      <p className="max-w-prose">{data.bio}</p>
    </section>
  );
}
