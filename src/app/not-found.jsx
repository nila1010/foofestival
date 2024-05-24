import Heading from "@/components/Headings";
import { Link } from "next-view-transitions";
import { buttonVariants } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section>
      <Heading
        as="h1"
        size="2xl"
        customClass="mx-auto">
        The pages want not found
      </Heading>
      <p className="text-center max-w-[30ch] mb-10 mx-auto">Seams like tha page isnt available, try refresh or go back by pushing the button below</p>
      <Link
        href="/"
        className={buttonVariants({ variant: "defaultline", size: "lg" })}>
        Refresh
      </Link>
    </section>
  );
}
