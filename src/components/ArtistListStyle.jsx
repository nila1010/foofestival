import Image from "next/image";
export default function ArtistListStyle({ oneArtist, i }) {
  let style = "";
  if (i <= 10) {
    style = "text-xl";
  } else if (i > 10 && i < 20) {
    style = "text-lg";
  } else {
    style = "text-sm";
  }

  return (
    <>
      <li
        className={`${style} flex gap-5`}
        style={{
          display: i > 50 ? "none" : "",
        }}>
        {oneArtist.name}
        {i < 10 && (
          <Image
            src="/star.svg"
            alt="spacer star"
            width={20}
            height={20}
          />
        )}
        {i > 10 && i < 50 && (
          <Image
            src="/star.svg"
            alt="spacer star"
            width={10}
            height={10}
          />
        )}
      </li>
      {(i === 10 || i === 19) && <div style={{ height: "1.5rem", width: "100%" }} />}
    </>
  );
}
