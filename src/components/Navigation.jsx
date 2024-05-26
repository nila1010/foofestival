import { buttonVariants } from "@/components/ui/button";
import { Link } from "next-view-transitions";
import Burger from "./Burger";
export default function Navigation() {
  return (
    <section className="flex justify-between items-center sm:py-2">
      <nav>
        <ul className="hidden gap-5 lg:grid">
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
              href="/#playingnow"
              className={`${buttonVariants({ variant: "defaultline", size: "lg" })}`}>
              Playing now
            </Link>
          </li>
        </ul>
        <div className="flex w-[100svw] items-center justify-between sm:justify-end px-5 py-2 lg:hidden">
          <p className="font-semibold sm:hidden text-2xl ml-5">FooFestival</p>
          <Burger />
        </div>
      </nav>
    </section>
  );
}
