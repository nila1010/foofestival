"use client";
import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <section className="grid justify-center mt-5 sm:block sm:mt-0">
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
