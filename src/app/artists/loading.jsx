"use client";
import { Skeleton } from "@/components/ui/skeleton";
import Heading from "@/components/Headings";

export default function Loading() {
  return (
    <section className="grid justify-center mt-5 sm:block sm:mt-0">
      <Heading
        customClass="mx-auto"
        as="h1"
        size="2xl">
        Artists
      </Heading>
      <p className="text-center w-[65ch] mx-auto">Here you find the full list of artists, and you can choose to login and save your favorit artists.</p>

      <div className="mt-10">
        <Skeleton className="w-[100px] h-[20px]" />
      </div>

      <section className="mt-5 grid grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] gap-5">
        <div className="flex flex-col space-y-3">
          <Skeleton className="h-[125px] w-[250px] rounded-xl" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-[250px]" />
            <Skeleton className="h-4 w-[200px]" />
          </div>
        </div>
      </section>
    </section>
  );
}
