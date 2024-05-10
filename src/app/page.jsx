import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import Heading from "@/components/headings";
import getData from "@/lib/getData";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import ArtistListStyle from "@/components/ArtistListStyle";

const data = await getData("bands");

export default function Home() {
  return (
    <section>
      <div className="grid">
        <Image className="mt-[-25%] col-start-1 row-start-1" src="/img/headerindex.jpg" width={1600} height={800} alt="Img of people to a festival"></Image>
        <div className="mt-[10%] flex items-center justify-center gap-10 col-start-1 row-start-1">
          <Link href="/tickets" className={buttonVariants({ variant: "default", size: "xl" })}>
            Buy tickets
          </Link>
          <Link href="/artists" className={buttonVariants({ variant: "default", size: "xl" })}>
            Artists
          </Link>
        </div>
      </div>
      <article className="mt-14 grid place-items-center px-10 md:px-32">
        <Heading as="h2" size="xl" customClass="text-center max-w-[70%]">
          Welcome to FooFestival, where the vibrant energy of youth converges with the electrifying beats of rock music!
        </Heading>
        <div className="grid grid-cols-2 gap-20 mt-44">
          <div>
            <p className="mb-10">Set against the backdrop of exhilarating performances and a dynamic atmosphere, FooFestival is the ultimate celebration of youth culture and the power of music. Join us as we ignite the stage with unforgettable performances, foster new connections, and create lasting memories. Get ready to rock out and embrace the spirit of adventure at FooFestival!</p>
            <Link href="/tickets" className={buttonVariants({ variant: "defaultline", size: "lg" })}>
              Buy tickets
            </Link>
          </div>
          <Image className="self-stretch object-cover" src="/img/indexatmosfear.jpeg" width={800} height={400} alt="People cheering to a concert" />
        </div>
      </article>
      <article className="grid place-items-center mt-44">
        <Heading as="h2" size="2xl">
          Line up
        </Heading>
        <Link href="/artists" className={`${buttonVariants({ variant: "link", size: "md" })} mb-5`}>
          See all artist
        </Link>
        <ul className="flex flex-wrap gap-x-5 text-center justify-center text-pretty max-w-prose bg-bgsecon py-5 px-10 outline outline-primary rounded">
          {data.map((oneArtist, index) => {
            return <ArtistListStyle key={oneArtist.name} oneArtist={oneArtist} i={index} />;
          })}
        </ul>
      </article>
    </section>
  );
}
