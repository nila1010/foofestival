import { Link } from "next-view-transitions";
import Heading from "./Headings";
import { buttonVariants } from "@/components/ui/button";
export default function ConfirmationTicket({ btnLink, btnText, btnLink2, btnText2, resId }) {
  return (
    <article className="grid justify-center gap-5 mt-10 max-w-[65ch] mx-auto">
      <Heading
        as="h1"
        size="xl"
        customClass="max-w-[30ch] text-center mx-auto">
        Perfect, Your booking has been confirmed, and we are looking forward to see you
      </Heading>
      <p className="text-center">A confirmation email has been sent to your email, with practical information</p>
      <p className="text-center -mt-4">Your resevation number is: {resId.id}</p>
      <Heading
        as="h2"
        size="xl"
        customClass="mx-auto mt-5 text-center">
        Now its time to plan what you are gonna see or find your favorit artists.
      </Heading>
      <div className="flex flex-wrap gap-5 max-w-fit mx-auto">
        <Link
          href={btnLink}
          className={buttonVariants({ variant: "defaultline", size: "xl", className: "max-w-fit mx-auto" })}>
          {btnText}
        </Link>
        <Link
          href={btnLink2}
          className={buttonVariants({ variant: "defaultline", size: "xl", className: "max-w-fit mx-auto" })}>
          {btnText2}
        </Link>
      </div>
    </article>
  );
}
