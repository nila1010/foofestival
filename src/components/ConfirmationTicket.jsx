import Link from "next/link";
import Heading from "./Headings";
import { buttonVariants } from "@/components/ui/button";
export default function ConfirmationTicket({ btnLink, btnText }) {
  return (
    <article>
      <Heading
        as="h1"
        size="2xl">
        Perfect, we are looking forward to see you
      </Heading>
      <p>An confirmation email has been sent to your email, with practical information</p>
      <Heading
        as="h2"
        size="xl">
        Now its time to plan what you are gonna see
      </Heading>
      <Link
        href={btnLink}
        className={buttonVariants({ variant: "defaultline", size: "xl" })}>
        {btnText}
      </Link>
    </article>
  );
}
