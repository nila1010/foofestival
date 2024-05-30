"use client";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Heading from "@/components/Headings";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default function Loading() {
  return (
    <section className="grid auto-rows-max">
      <Heading
        as="h1"
        size="3xl"
        customClass="justify-self-center mb-5">
        Program
      </Heading>
      <div className="flex justify-center flex-wrap">
        <Button
          className="max-w-fit"
          onClick={() => {
            setDay("mon");
          }}
          variant="link">
          Monday
        </Button>
        <Button
          className="max-w-fit"
          onClick={() => {
            setDay("tue");
          }}
          variant="link">
          Tuesday
        </Button>
        <Button
          className="max-w-fit"
          onClick={() => {
            setDay("wed");
          }}
          variant="link">
          Wednesday
        </Button>
        <Button
          className="max-w-fit"
          onClick={() => {
            setDay("thu");
          }}
          variant="link">
          Thursday
        </Button>
        <Button
          className="max-w-fit"
          onClick={() => {
            setDay("fri");
          }}
          variant="link">
          Friday
        </Button>
        <Button
          className="max-w-fit"
          onClick={() => {
            setDay("sat");
          }}
          variant="link">
          Saturday
        </Button>
        <Button
          className="max-w-fit"
          onClick={() => {
            setDay("sun");
          }}
          variant="link">
          Sunday
        </Button>
      </div>
      <div className="h-32"></div>

      <article className="grid grid-cols-1">
        <Heading
          as="h3"
          size="xl">
          Midgard
        </Heading>
        <Separator />
        <div className="overflow-auto">
          <div className="grid grid-cols-4 gap-10">
            <Skeleton
              className="h-20 sm:h-40"
              baseColor="oklch(37.896% 0.1009 290.58 / 0.501)"
              highlightColor="oklch(93.114% 0.19848 123.3)"
              duration={2.5}
            />
            <Skeleton
              className="h-20 sm:h-40"
              baseColor="oklch(37.896% 0.1009 290.58 / 0.501)"
              highlightColor="oklch(93.114% 0.19848 123.3)"
              duration={2.7}
            />
            <Skeleton
              className="h-20 sm:h-40"
              baseColor="oklch(37.896% 0.1009 290.58 / 0.501)"
              highlightColor="oklch(93.114% 0.19848 123.3)"
              duration={2.5}
            />
            <Skeleton
              className="h-20 sm:h-40"
              baseColor="oklch(37.896% 0.1009 290.58 / 0.501)"
              highlightColor="oklch(93.114% 0.19848 123.3)"
              duration={2.7}
            />
          </div>
        </div>
        <Heading
          customClass="mt-5"
          as="h3"
          size="xl">
          Vanaheim
        </Heading>
        <Separator />
        <div className="overflow-auto">
          <div className="grid grid-cols-4 gap-10">
            <Skeleton
              className="h-20 sm:h-40"
              baseColor="oklch(37.896% 0.1009 290.58 / 0.501)"
              highlightColor="oklch(93.114% 0.19848 123.3)"
              duration={2.5}
            />
            <Skeleton
              className="h-20 sm:h-40"
              baseColor="oklch(37.896% 0.1009 290.58 / 0.501)"
              highlightColor="oklch(93.114% 0.19848 123.3)"
              duration={2.7}
            />
            <Skeleton
              className="h-20 sm:h-40"
              baseColor="oklch(37.896% 0.1009 290.58 / 0.501)"
              highlightColor="oklch(93.114% 0.19848 123.3)"
              duration={2.5}
            />
            <Skeleton
              className="h-20 sm:h-40"
              baseColor="oklch(37.896% 0.1009 290.58 / 0.501)"
              highlightColor="oklch(93.114% 0.19848 123.3)"
              duration={2.7}
            />
          </div>
        </div>
        <Heading
          customClass="mt-5"
          as="h3"
          size="xl">
          Jotunheim
        </Heading>
        <Separator />
        <div className="overflow-auto">
          <div className="grid grid-cols-4 gap-10">
            <Skeleton
              className="h-20 sm:h-40"
              baseColor="oklch(37.896% 0.1009 290.58 / 0.501)"
              highlightColor="oklch(93.114% 0.19848 123.3)"
              duration={2.5}
            />
            <Skeleton
              className="h-20 sm:h-40"
              baseColor="oklch(37.896% 0.1009 290.58 / 0.501)"
              highlightColor="oklch(93.114% 0.19848 123.3)"
              duration={2.7}
            />
            <Skeleton
              className="h-20 sm:h-40"
              baseColor="oklch(37.896% 0.1009 290.58 / 0.501)"
              highlightColor="oklch(93.114% 0.19848 123.3)"
              duration={2.5}
            />
            <Skeleton
              className="h-20 sm:h-40"
              baseColor="oklch(37.896% 0.1009 290.58 / 0.501)"
              highlightColor="oklch(93.114% 0.19848 123.3)"
              duration={2.7}
            />
          </div>
        </div>
      </article>
    </section>
  );
}
