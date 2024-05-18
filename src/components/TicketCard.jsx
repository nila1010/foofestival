import Heading from "./Headings";
import { Label } from "@/components/ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useRef } from "react";

export default function TicketCard({ title, price, description, label, inputId, setRegTickets, setVipTickets, setPage }) {
  const inputValue = useRef();
  function setValue() {
    setPage(1);
    const numTickets = inputValue.current.value;
    if (title === "Regular ticket") {
      setRegTickets((o) => (o = numTickets));
    } else {
      setVipTickets((o) => (o = numTickets));
    }
  }

  return (
    <article className="bg-bgsecon outline-textprim outline rounded max-w-fit grid gap-5 place-items-center p-5">
      <div className="grid place-items-center">
        <Heading as="h2" size="xl">
          {title}
        </Heading>
        <Heading as="h3" size="xl">
          {price}
        </Heading>
      </div>
      <p className="max-w-[25ch] text-center">{description}</p>
      <Label htmlFor={inputId} className="sr-only">
        {label}
      </Label>
      <Input ref={inputValue} type="text" inputMode="numeric" placeholder="0" id={inputId} className=" max-w-16 text-center mt-3 text-md" />
      <Button onClick={setValue} variant="default">
        Buy ticket
      </Button>
    </article>
  );
}
