import { Glory } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Image from "next/image";
import { ViewTransitions } from "next-view-transitions";

const glory = Glory({ subsets: ["latin"], weight: ["300", "400", "500", "700", "800"] });

export const metadata = {
  title: "FooFestival, where the vibrant energy of youth converges with the electrifying beats",
  description: "Set against the backdrop of exhilarating performances and a dynamic atmosphere, FooFestival is the ultimate celebration of youth culture and the power of music. Join us as we ignite the stage with unforgettable performances, foster new connections, and create lasting memories.",
};

export default function RootLayout({ children }) {
  return (
    <ViewTransitions>
      <html lang="en">
        <body className={`${glory.className}relative max-w-[1600px] mx-auto font-light text-md text-textprim bg-transparent`}>
          <header className="absolute right-0 lg:fixed top-0 lg:right-0 h-[48px] z-10 lg:py-10 pr-5 sm:order-1 lg:h-[100svh]">
            <Navigation />
          </header>
          <aside className="z-10 sm:fixed p-3 hidden sm:grid pt-10 max-h-[100svh] gap-14">
            <p className="font-bold text-xl md:text-2xl lg:text-3xl [writing-mode:vertical-lr] mx-auto">FooFestival</p>
            <p className=" font-semibold text-lg [writing-mode:vertical-lr] mx-auto">All year festival</p>
            <Image
              className="mx-auto"
              src="/logo/logowhite.svg"
              width={80}
              height={200}
              alt="festival logo"></Image>
          </aside>
          <main className="change relative h-[100svh] p-5 lg:py-10 mt-14 sm:mt-16 lg:mt-0 sm:pl-[135px] lg:pr-64">{children}</main>

          <footer></footer>
        </body>
      </html>
    </ViewTransitions>
  );
}
