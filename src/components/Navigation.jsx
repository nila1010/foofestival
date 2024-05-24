import { buttonVariants } from "@/components/ui/button";
import { Link } from "next-view-transitions";
import Burger from "./Burger";
export default function Navigation() {
  return (
    <section className="flex justify-between items-center sm:py-2">
      <nav>
        <ul className="hidden gap-5 sm:grid">
          <li>
            <Link
              href="/tickets"
              className={buttonVariants({ variant: "defaultline", size: "lg" })}>
              Buy tickets
            </Link>
          </li>
          <li>
            <Link
              href="/program"
              className={buttonVariants({ variant: "defaultline", size: "lg" })}>
              Program
            </Link>
          </li>
          <li>
            <Link
              href="/artists"
              className={`${buttonVariants({ variant: "defaultline", size: "lg" })}`}>
              Artists
            </Link>
          </li>
          <li>
            <Link
              href="/"
              className={`${buttonVariants({ variant: "defaultline", size: "lg" })}`}>
              Line up
            </Link>
          </li>
          <li>
            <Link
              href="/"
              className={`${buttonVariants({ variant: "defaultline", size: "lg" })}`}>
              Playing now
            </Link>
          </li>
        </ul>
        <div className="flex w-[100svw] items-center justify-between px-5 py-2 bg-[#6D15C5] sm:hidden">
          <p className="font-semibold text-2xl">FooFestival</p>
          <Burger />
        </div>
      </nav>
    </section>
  );
}
