import Heading from "./Headings";
import { Label } from "@/components/ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useState } from "react";

export default function TicketCard({ title, price, description, label, inputId, setRegTickets, setVipTickets, setPage, setBookingInfo }) {
  const [selectedTickets, setSelectedTickets] = useState();
  const [error, setError] = useState(false);

  function setValue(e) {
    e.preventDefault();

    if (!selectedTickets || selectedTickets <= 0) {
      setError(true);
    } else {
      setPage(1);

      if (title === "Regular ticket") {
        setRegTickets((o) => (o = selectedTickets));
        setBookingInfo((o) => {
          return { ...o, regtickets: selectedTickets };
        });
      } else {
        setVipTickets((o) => (o = selectedTickets));
        setBookingInfo((o) => {
          return { ...o, viptickets: selectedTickets };
        });
      }
    }
  }

  return (
    <article className="bg-bgsecon outline-textprim outline rounded max-w-fit grid gap-5 place-items-center p-5">
      <div className="grid place-items-center">
        <Heading
          as="h2"
          size="xl">
          {title}
        </Heading>
        <Heading
          as="h3"
          size="xl">
          {price}
        </Heading>
      </div>
      <p className="max-w-[25ch] text-center">{description}</p>

      <form onSubmit={setValue}>
        <div className="flex items-center gap-5">
          <Button
            className="max-w-fit"
            variant="default">
            Buy ticket
          </Button>
          <Label
            htmlFor={inputId}
            className="sr-only">
            {label}
          </Label>
          <Input
            onChange={(e) => setSelectedTickets(e.target.value)}
            type="text"
            inputMode="numeric"
            placeholder="0"
            id={inputId}
            className=" max-w-16 text-center text-md"
          />
        </div>
        {error && <p className="mt-3 text-red-400">You need to select a no. of tickets</p>}
      </form>
    </article>
  );
}
