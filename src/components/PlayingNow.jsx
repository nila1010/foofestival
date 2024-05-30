import combinedData from "@/lib/combineData";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { Link } from "next-view-transitions";
import { buttonVariants } from "@/components/ui/button";
import { endPoint } from "@/lib/crud";

export default async function PlayingNow() {
  const date = new Date();
  const hour = date.getHours();
  const liveDay = date.getDay();

  const dayNamesShort = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
  console.log(hour);

  const liveHour = () => {
    if (hour % 2 === 0) {
      if (hour <= 9) {
        return `0${hour}:00`;
      } else {
        return `${hour}:00`;
      }
    } else {
      if (hour <= 9) {
        const newHour = hour + 1;
        return `0${newHour}:00`;
      } else {
        const newHour = hour + 1;
        return `${newHour}:00`;
      }
    }
  };

  const fetchData = await combinedData();

  const filterData = Object.entries(fetchData).map((venue) => {
    const filtered = Object.entries(venue[1]).map((oneDay) => oneDay[1].filter((band) => band.start === liveHour() && band.day === dayNamesShort[liveDay]));
    return filtered;
  });

  const data = filterData.flat(Infinity);

  return (
    <section
      id="playingnow"
      className="flex gap-5 flex-wrap justify-center mt-10">
      {data.length === 0 ? (
        <div className="grid place-items-center">
          <p>Noone is playing at the moment, so its beer time</p>
          <Image
            src="/beer.svg"
            alt="logo of a beer"
            width={100}
            height={100}
          />
        </div>
      ) : (
        data.map((one) => {
          return (
            <Card
              key={one.act}
              className="min-w-[250px] gap-10">
              <CardHeader>
                <CardTitle>{one.act}</CardTitle>
                <CardDescription className="grid">
                  <span className="font-medium">Playing at - {one.venue}</span>
                  <span>
                    {one.start} - {one.end}
                  </span>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  className="rounded w-full object-cover aspect-video"
                  src={!one.logo.startsWith("https") ? `${endPoint}/logos/${one.logo}` : one.logo}
                  height={100}
                  width={100}
                  alt="logo of the artist"
                />
              </CardContent>
              <CardFooter className="flex">
                <Link
                  prefetch={false}
                  href={`/artists/${one.slug}`}
                  className={`${buttonVariants({ variant: "link", size: "lg" })} py-0 px-0 mb-5 max-w-fit`}>
                  Read about artist
                </Link>
              </CardFooter>
            </Card>
          );
        })
      )}
    </section>
  );
}
