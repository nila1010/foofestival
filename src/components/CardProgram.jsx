import Image from "next/image";

export default function CardProgram({ band }) {
  return (
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
      <p className="row-start-2 col-start-1 max-w-[150px]">{band.act}</p>
    </div>
  );
}
