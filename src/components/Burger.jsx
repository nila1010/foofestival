"use client";
import { useState } from "react";
import Hamburger from "hamburger-react";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

import "animate.css";

function Burger() {
  const [isOpen, setOpen] = useState(false);

  function closeMenu() {
    setOpen(false);
  }
  return (
    <>
      {isOpen && (
        <ul
          onClick={closeMenu}
          className="absolute w-full top-8 justify-end bg-backgound-color-secondary grid gap-2 pt-10 px-8 pb-12 rounded-b animate__bounceInDown animate__animated">
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
      )}

      <Hamburger
        size={40}
        color={"oklch(93.114% 0.19848 123.3)"}
        toggled={isOpen}
        toggle={setOpen}
      />
    </>
  );
}

export default Burger;
