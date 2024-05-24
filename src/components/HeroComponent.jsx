import { buttonVariants } from "@/components/ui/button";
import { Link } from "next-view-transitions";
import Image from "next/image";
export default function HeroComponent({ imgPath, btnText, btnLink, btn2Text, btn2Link }) {
  return (
    <div className="grid mb-14">
      <Image
        className="mt-[-140px] col-start-1 row-start-1"
        src={imgPath}
        width={2000}
        height={600}
        alt="Img of people to a festival"
        priority></Image>
      <div className="mt-[10%] flex items-center justify-center gap-10 col-start-1 row-start-1">
        <Link
          href={btnLink}
          className={buttonVariants({ variant: "default", size: "xl" })}>
          {btnText}
        </Link>
        {btn2Link && (
          <Link
            href={btn2Link}
            className={buttonVariants({ variant: "default", size: "xl" })}>
            {btn2Text}
          </Link>
        )}
      </div>
    </div>
  );
}
