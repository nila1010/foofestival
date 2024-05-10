import { Open_Sans } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";

const openSans = Open_Sans({ subsets: ["latin"], weight: ["300", "400", "500", "700", "800"] });

export const metadata = {
  title: "FooFestival, where the vibrant energy of youth converges with the electrifying beats",
  description: "Set against the backdrop of exhilarating performances and a dynamic atmosphere, FooFestival is the ultimate celebration of youth culture and the power of music. Join us as we ignite the stage with unforgettable performances, foster new connections, and create lasting memories.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${openSans.className} font-light text-md bg-bgprim text-textprim`}>
        <header className="z-10 relative bg-bgprim/10">
          <Navigation />
        </header>
        <main>{children}</main>
        <footer></footer>
      </body>
    </html>
  );
}
