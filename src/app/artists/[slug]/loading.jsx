"use client";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Heading from "@/components/Headings";

export default function Loading() {
  return (
    <section>
      <Skeleton
        baseColor="oklch(37.896% 0.1009 290.58 / 0.501)"
        highlightColor="oklch(93.114% 0.19848 123.3)"
        duration={2.5}
        className="max-w-[65ch] h-14 mb-8"
      />
      <Skeleton
        baseColor="oklch(37.896% 0.1009 290.58 / 0.501)"
        highlightColor="oklch(93.114% 0.19848 123.3)"
        duration={2.7}
        className="max-w-[40ch]"></Skeleton>

      <Skeleton
        baseColor="oklch(37.896% 0.1009 290.58 / 0.501)"
        highlightColor="oklch(93.114% 0.19848 123.3)"
        duration={3.5}
        className="h-[400px] mt-3"
      />
      <p className="text-[10px]">Credit:</p>
      <div className="max-w-prose mt-5">
        <Heading
          as="h2"
          size="lg"
          customClass="mb-3">
          Members
        </Heading>
      </div>
      <Heading
        as="h3"
        size="lg"
        customClass="mt-10 mb-3 ">
        Insterested about the band?
      </Heading>
    </section>
  );
}
