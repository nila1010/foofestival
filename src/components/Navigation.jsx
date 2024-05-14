import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
export default function Navigation() {
  return (
    <section className="flex justify-between items-center px-10 py-2">
      <p className="text-3xl font-black">FooFestival</p>
      <nav>
        <ul className="flex gap-5">
          <li>
            <Link href="/tickets" className={buttonVariants({ variant: "link" })}>
              Buy tickets
            </Link>
          </li>
          <li>
            <Link href="/program" className={buttonVariants({ variant: "link" })}>
              Program
            </Link>
          </li>
          <li>
            <Link href="/artists" className={buttonVariants({ variant: "link" })}>
              Artists
            </Link>
          </li>
        </ul>
      </nav>
    </section>
  );
}
