"use client";

import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import HeroComponent from "@/components/HeroComponent";
import Heading from "@/components/Headings";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import getData from "@/lib/getData";
import { useState, useEffect, Suspense } from "react";
import HeartRadioBtn from "@/components/HeartRadioBtn";

export default function page() {
  const [artists, setArtists] = useState([]);
  const [filteredArtists, setFilteredArtists] = useState("");

  console.log(filteredArtists);
  async function fetchData() {
    const data = await getData("bands");
    setArtists(data);
  }
  let filtered = artists;
  const genres = [...new Set(artists.map((band) => band.genre))];

  let checkArray = [];
  useEffect(() => {
    fetchData();
    checkArray = ["Tool"];
  }, []);

  if (filteredArtists) {
    filtered = artists.filter((artist) => artist.genre === filteredArtists);
  }
  console.log(checkArray);

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
                <HeartRadioBtn check={checkArray.filter((one) => one === oneArtist.name)} />
                <CardTitle>{oneArtist.name}</CardTitle>
                <CardDescription>
                  <span className="font-medium">Genre - </span>
                  {oneArtist.genre}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <img className="rounded" src={oneArtist.logo} alt="test" />
                {/* <Image src={`/${oneArtist.logo}`} height={100} width={100} alt="logo of the artist" /> */}
              </CardContent>
              <CardFooter>
                {oneArtist.members.map((oneMember) => {
                  return (
                    <p className="inline max-w-fit mr-2" key={oneMember}>
                      {oneMember},
                    </p>
                  );
                })}
                <Link prefetch={false} href={oneArtist.slug} className={`${buttonVariants({ variant: "link", size: "md" })} mb-6 mt-2`}>
                  Read about artist
                </Link>
              </CardFooter>
            </Card>
          );
        })}
      </section>
    </section>
  );
}
