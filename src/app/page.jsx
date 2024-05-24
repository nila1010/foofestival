import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import Heading from "@/components/Headings";
import { getData } from "@/lib/crud";
import ArtistListStyle from "@/components/ArtistListStyle";

const data = await getData("bands");

export default function Home() {
  return (
    <section className="mt-5 sm:mt-0">
      <Heading
        as="h1"
        customClass="sr-only">
        Welcome to FooFestival
      </Heading>

      <article className="grid place-items-center">
        <Heading
          as="h2"
          size="3xl">
          Line up
        </Heading>

        <ul className="flex flex-wrap gap-x-5 text-center justify-center text-pretty py-5">
          {data.map((oneArtist, index) => {
            return (
              <ArtistListStyle
                key={oneArtist.name}
                oneArtist={oneArtist}
                i={index}
              />
            );
          })}
        </ul>
        <Link
          href="/artists"
          className={`${buttonVariants({ variant: "defaultline", size: "lg" })} max-w-fit mt-5`}>
          See all artists
        </Link>
        <Heading
          customClass="mt-20"
          as="h2"
          size="3xl">
          Playing now
        </Heading>
      </article>
    </section>
  );
}
