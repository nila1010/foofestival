"use client";
import { Link } from "next-view-transitions";
import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Heading from "@/components/Headings";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { addLikes, getData, getLikes } from "@/lib/crud";
import { useState, useEffect, Suspense } from "react";
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
    if (filteredArtists === "favorits") {
      filtered = artists.filter((artist) => userLiked.includes(artist.name));
    } else {
      filtered = artists.filter((artist) => artist.genre === filteredArtists);
    }
    if (filteredArtists === "showall") {
      filtered = artists;
    } else {
      filtered = artists.filter((artist) => artist.genre === filteredArtists);
    }
  }

  return (
    <section className="grid justify-center sm:block">
      <Heading
        customClass="mx-auto"
        as="h1"
        size="2xl">
        Artists
      </Heading>
      <p className="text-center max-w-[65ch] mx-auto">Here you find the full list of artists, and you can choose to login and save your favorit artists.</p>

      <div className="mt-10">
        <Select onValueChange={setFilteredArtists}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select genre" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value={"showall"}>Show all</SelectItem>
            <SelectItem value={"favorits"}>Favorits</SelectItem>
            {genres.map((oneGenre) => {
              return (
                <SelectItem
                  key={oneGenre}
                  value={oneGenre}>
                  {oneGenre}
                </SelectItem>
              );
            })}
          </SelectContent>
        </Select>
      </div>

      <section className="mt-5 grid grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] gap-5">
        {filtered.map((oneArtist) => {
          return (
            <Card
              key={oneArtist.name}
              className="max-w-[300px]">
              <CardHeader>
                <CardTitle>{oneArtist.name}</CardTitle>
                <CardDescription>
                  <span className="font-medium">Genre - </span>
                  {oneArtist.genre}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  className="rounded w-full object-cover aspect-video"
                  src={!oneArtist.logo.startsWith("https") ? `http://localhost:8080/logos/${oneArtist.logo}` : oneArtist.logo}
                  height={100}
                  width={100}
                  alt="logo of the artist"
                />
              </CardContent>
              <CardFooter className="flex">
                <Link
                  prefetch={false}
                  href={`/artists/${oneArtist.slug}`}
                  className={`${buttonVariants({ variant: "link", size: "md" })} mb-6 mt-2 max-w-fit`}>
                  Read about artist
                </Link>
                <HeartRadioBtn
                  setLike={setLike}
                  oneArtist={oneArtist.name}
                  check={userLiked.filter((one) => one === oneArtist.name)}
                />
              </CardFooter>
            </Card>
          );
        })}
      </section>
    </section>
  );
}
