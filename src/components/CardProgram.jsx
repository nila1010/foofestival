import Image from "next/image";
import Link from "next/link";

export default function CardProgram({ band }) {
  return (
    <>
      {band.act === "break" && (
        <div className="h-[200px] min-w-[200px] grid place-items-center">
          <p className="-mt-1">
            {band.start}-{band.end}
          </p>
          <p className="row-start-2 col-start-1 max-w-[150px] self-center text-center">Break and beer time</p>
          <Image
            src="/beer.svg"
            alt="logo of a beer"
            width={50}
            height={50}
          />
        </div>
      )}
      {band.act !== "break" && (
        <Link href={`/artists/${band.slug}`}>
          <div className="h-[200px] min-w-[200px] grid place-items-center">
            <p>
              {band.start}-{band.end}
            </p>

            <Image
              className="row-start-2 col-start-1 rounded object-cover aspect-square"
              src={band.logo && !band.logo.startsWith("https") ? `http://localhost:8080/logos/${band.logo}` : band.logo}
              alt="Picture of the band"
              width={140}
              height={140}
            />
            <div className="col-start-1 row-start-2 bg-stone-900/60 w-[140px] h-[140px] rounded-sm"></div>
            <p className="row-start-2 col-start-1 max-w-[150px] self-center text-center">{band.act}</p>
          </div>
        </Link>
      )}
    </>
  );
}
