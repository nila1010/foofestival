"use client";
import Heading from "@/components/Headings";
import { Link } from "next-view-transitions";
import { buttonVariants } from "@/components/ui/button";

export default function Error() {
  return (
    <section>
      <Heading
        as="h1"
        size="2xl"
        customClass="mx-auto">
        An error has occured
      </Heading>
      <p className="text-center max-w-[30ch] mb-10 mx-auto">We are sorry for the inconviniens, it might be a glitch. Try refresh the site click the button below</p>
      <Link
        href="/"
        className={buttonVariants({ variant: "defaultline", size: "lg" })}>
        Refresh
      </Link>
    </section>
  );
}
