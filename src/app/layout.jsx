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
      <body className={`${glory.className} grid grid-cols-1 sm:grid-cols-[1fr_10fr_1fr] font-light text-md text-textprim h-[100svh] overflow-auto`}>{children}</body>
    </html>
  );
}
