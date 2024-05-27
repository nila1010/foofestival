import Heading from "./Headings";
import { Button } from "./ui/button";

export default function TimeOut({ setTimeOut, setPage, btnText }) {
  function resetBooking() {
    setPage(0);
    setTimeOut(false);
  }
  return (
    <article className="grid justify-center gap-5 mt-10">
      <Heading
        as="h1"
        size="xl"
        customClass="max-w-[30ch] text-center mx-auto">
        Your reservation has been cancled
      </Heading>
      <Heading
        as="h2"
        size="lg"
        customClass="mx-auto mt-5 text-center">
        Unfortunatly your reservations time has ran out. Please click on the butten below and try again.
      </Heading>
      <div className="flex flex-wrap gap-5 max-w-fit mx-auto">
        <Button
          onClick={resetBooking}
          variant="defaultline"
          size="xl"
          className="max-w-fit mx-auto">
          {btnText}
        </Button>
      </div>
    </article>
  );
}
