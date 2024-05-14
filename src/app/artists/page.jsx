"use client";
import Link from "next/link";
import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import HeroComponent from "@/components/HeroComponent";
import Heading from "@/components/Headings";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { addLikes, getData, getLikes } from "@/lib/crud";
import { useState, useEffect } from "react";
import HeartRadioBtn from "@/components/HeartRadioBtn";

export default function Page() {
  const [artists, setArtists] = useState([]);
  const [filteredArtists, setFilteredArtists] = useState("");
  const [userLiked, setUserLiked] = useState([]);

  function setLike(parm) {
    setUserLiked((old) => {
      if (old.filter((o) => o === parm).length > 0) {
        const newArray = old.filter((o) => o !== parm);
        addLikes(newArray, "2fe80c15-d5b5-4904-ad31-32f08068880f");
        return newArray;
      }
      addLikes([...old, parm], "2fe80c15-d5b5-4904-ad31-32f08068880f");
      return [...old, parm];
    });
  }

  async function fetchData() {
    const data = await getData("bands");
    const likes = await getLikes("Nicolai");
    setArtists(data);
    setUserLiked(likes);
  }
  let filtered = artists;
  const genres = [...new Set(artists.map((band) => band.genre))];

  useEffect(() => {
    fetchData();
  }, []);

  if (filteredArtists) {
    filtered = artists.filter((artist) => artist.genre === filteredArtists);
  }

  return (
    <section>
      <HeroComponent imgPath="/img/artistheader.png" btnText="But tickets" btnLink="/tickets" />
      <article className="grid place-items-center">
        <Heading as="h1" size="2xl">
          Artists
        </Heading>
        <p className="max-w-prose text-center">Prepare to be captivated by a lineup of extraordinary artists who will ignite the stage with their talent and passion. From chart-topping headliners to emerging indie sensations, our diverse roster promises something for every musical palate.</p>
      </article>
      <div className="ml-10 mt-10">
        <Select onValueChange={setFilteredArtists}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select genre" />
          </SelectTrigger>
          <SelectContent>
            {genres.map((oneGenre) => {
              return (
                <SelectItem key={oneGenre} value={oneGenre}>
                  {oneGenre}
                </SelectItem>
              );
            })}
          </SelectContent>
        </Select>
      </div>

      <section className="px-10 mt-5 grid grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] gap-5">
        {filtered.map((oneArtist) => {
          return (
            <Card key={oneArtist.name}>
              <CardHeader>
                <CardTitle>{oneArtist.name}</CardTitle>
                <CardDescription>
                  <span className="font-medium">Genre - </span>
                  {oneArtist.genre}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Image className="rounded w-full object-cover aspect-video" src={!oneArtist.logo.startsWith("https") ? `http://localhost:8080/logos/${oneArtist.logo}` : oneArtist.logo} height={100} width={100} alt="logo of the artist" />
              </CardContent>
              <CardFooter>
                <Link prefetch={false} href={`/artists/${oneArtist.slug}`} className={`${buttonVariants({ variant: "link", size: "md" })} mb-6 mt-2`}>
                  Read about artist
                </Link>
                <HeartRadioBtn setLike={setLike} oneArtist={oneArtist.name} check={userLiked.filter((one) => one === oneArtist.name)} />
              </CardFooter>
            </Card>
          );
        })}
      </section>
    </section>
  );
}
