import Link from "next/link";
import Heading from "./Headings";
import { buttonVariants } from "@/components/ui/button";
export default function ConfirmationTicket({ btnLink, btnText }) {
  return (
    <article className="grid justify-center gap-5">
      <Heading
        as="h1"
        size="2xl"
        customClass="max-w-[20ch] text-center">
        Perfect, Your booking has been confirmed, and we are looking forward to see you
      </Heading>
      <p className="text-center">An confirmation email has been sent to your email, with practical information</p>
      <Heading
        as="h2"
        size="xl"
        customClass="mx-auto mt-5">
        Now its time to plan what you are gonna see
      </Heading>
      <Link
        href={btnLink}
        className={buttonVariants({ variant: "defaultline", size: "xl", className: "max-w-fit mx-auto" })}>
        {btnText}
      </Link>
    </article>
  );
}
