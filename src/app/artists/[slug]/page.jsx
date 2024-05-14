import Heading from "@/components/Headings";
import Image from "next/image";
import { getData } from "@/lib/crud";

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
  /*   if (!data) return notFound(); */
  return {
    title: `Foofestival - ${data.name}`,
  };
}

export default async function OneBand({ params }) {
  const { slug } = params;
  const fetchData = await getData("bands");

  const filterData = fetchData.filter((oneBand) => oneBand.slug === slug);
  const data = filterData[0];
  /* 
  if (!data) return notFound(); */

  return (
    <section className="px-10">
      <section className="grid lg:grid-cols-[2fr,_1fr] gap-5">
        <Image className="rounded w-full object-cover aspect-video" src={!data.logo.startsWith("https") ? `http://localhost:8080/logos/${data.logo}` : data.logo} alt="Picture of the band" width={1600} height={800} />
        <div className="lg:pt-[10%]">
          <Heading as="h1" size="3xl" customClass="lg:ml-[-30%] lg:px-4">
            {data.name}
          </Heading>
          <div className="max-w-prose mt-5">
            <Heading as="h2" size="lg" customClass="mb-3">
              Members
            </Heading>
            <div className="flex flex-wrap gap-2 mb-10 w-fit">
              {data.members.map((member) => {
                return (
                  <p className="leading-5" key={member}>
                    {member}
                  </p>
                );
              })}
            </div>
            <Heading as="h2" size="lg">
              Playing at
            </Heading>
          </div>
        </div>
      </section>
      <Heading as="h3" size="lg" customClass="mt-10 mb-3 ">
        Insterested about the band?
      </Heading>
      <p className="max-w-prose">{data.bio}</p>
    </section>
  );
}
