export default function HeartRadioBtn({ check }) {
  return (
    <>
      <label htmlFor="likeicon" className="sr-only">
        Like icon
      </label>
      <input defaultChecked={!check ? true : false} className="appearance-none relative cursor-pointer left-[25%] opacity-40 checked:opacity-100 transition duration-500 ease-in before:absolute before:content-[''] before:left-[31px] before:w-5 before:h-8 before:bg-[oklch(93.114%_0.19848_123.3)] before:rotate-45 before:rounded-[40px_40px_2px_2px] after:absolute after:content-[''] after:left-[22px] after:w-5 after:h-8 after:bg-[oklch(93.114%_0.19848_123.3)] after:-rotate-45 after:rounded-[40px_40px_2px_2px] " type="checkbox" name="likeicon" id="likeicon" />
    </>
  );
}
