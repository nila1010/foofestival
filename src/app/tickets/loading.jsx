"use client";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Heading from "@/components/Headings";

export default function Loading() {
  return (
    <>
      <section className="grid place-items-center">
        <Heading
          as="h1"
          size="2xl">
          Tickets
        </Heading>
        <p className="max-w-prose text-center">Experience the thrill of live music and the excitement of unforgettable events with our exclusive ticket offerings!</p>
      </section>
      <div className="grid gap-5 justify-center mt-5 grid-cols-1 sm:grid-cols-[250px,_250px]">
        <Skeleton
          className="h-[300px]"
          baseColor="oklch(37.896% 0.1009 290.58 / 0.501)"
          highlightColor="oklch(93.114% 0.19848 123.3)"
          duration={2.5}
        />
        <Skeleton
          className="h-[300px]"
          baseColor="oklch(37.896% 0.1009 290.58 / 0.501)"
          highlightColor="oklch(93.114% 0.19848 123.3)"
          duration={2.5}
        />
      </div>
    </>
  );
}
