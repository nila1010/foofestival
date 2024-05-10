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
        className={`${style}`}
        style={{
          marginBlockEnd: i === 10 || i === 19 ? "1.5rem" : "",
          flexBasis: i === 10 || i === 19 ? "100%" : "",
        }}
      >
        {oneArtist.name}
      </li>
    </>
  );
}
