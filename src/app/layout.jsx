import { Glory } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Image from "next/image";

const glory = Glory({ subsets: ["latin"], weight: ["300", "400", "500", "700", "800"] });

export const metadata = {
  title: "FooFestival, where the vibrant energy of youth converges with the electrifying beats",
  description: "Set against the backdrop of exhilarating performances and a dynamic atmosphere, FooFestival is the ultimate celebration of youth culture and the power of music. Join us as we ignite the stage with unforgettable performances, foster new connections, and create lasting memories.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${glory.className} grid grid-cols-1 sm:grid-cols-[1fr_10fr_1fr] font-light text-md text-textprim h-[100svh] overflow-auto`}>
        <header className="relative h-[48px] z-10 sm:py-10 pr-5 sm:order-1 sm:h-[100svh]">
          <Navigation />
        </header>
        <main className="overflow-auto p-5 sm:p-10">{children}</main>
        <aside className=" p-3 hidden sm:grid pt-10 max-h-[100svh] -order-1">
          <p className="font-bold text-xl md:text-2xl lg:text-3xl [writing-mode:vertical-lr] mx-auto">FooFestival</p>
          <p className=" font-semibold text-lg [writing-mode:vertical-lr] mx-auto">All year festival</p>{" "}
          <Image
            className="mx-auto"
            src="/logo/logowhite.svg"
            width={80}
            height={200}
            alt="festival logo"></Image>
        </aside>
        <footer className="order-2">
          <p>Her er footter</p>
        </footer>
      </body>
    </html>
  );
}
