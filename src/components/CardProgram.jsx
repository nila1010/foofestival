import Image from "next/image";
import { Separator } from "@/components/ui/separator";

export default function CardProgram({ band }) {
  return (
    <>
      <div className="h-[200px] py-3 grid place-items-center">
        {band.act === "break" ? "" : <Image className="row-start-1 col-start-1 rounded object-cover aspect-square" src={band.logo && !band.logo.startsWith("https") ? `http://localhost:8080/logos/${band.logo}` : band.logo} alt="Picture of the band" width={160} height={160} />}
        <p className="row-start-1 col-start-1">{band.act === "break" ? "" : band.act}</p>
      </div>
      <Separator />
    </>
  );
}
