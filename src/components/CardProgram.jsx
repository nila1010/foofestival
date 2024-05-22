import Image from "next/image";

export default function CardProgram({ band }) {
  return (
    <div className="h-[200px] min-w-[200px] grid place-items-center gap-y-3 auto-rows-max">
      <p className="self-start mt-2">
        {band.start}-{band.end}
      </p>
      {band.act === "break" ? (
        <div className="mt-5">
          <p className="text-center">Break</p>
          <p className="text-center">and</p>
          <p className="text-center">beer time</p>
        </div>
      ) : (
        <>
          <Image
            className="row-start-2 col-start-1 rounded object-cover aspect-square"
            src={band.logo && !band.logo.startsWith("https") ? `http://localhost:8080/logos/${band.logo}` : band.logo}
            alt="Picture of the band"
            width={140}
            height={140}
          />
          <p className="row-start-2 col-start-1 max-w-[150px]">{band.act}</p>
        </>
      )}
    </div>
  );
}
