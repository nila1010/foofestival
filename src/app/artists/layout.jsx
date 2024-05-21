import Navigation from "@/components/Navigation";
import Image from "next/image";
export default function DashboardLayout({ children }) {
  return (
    <>
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
    </>
  );
}
