import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { setReservation, addReservation } from "@/lib/crud";
export default function PaymentTicket({ setPage, bookingInfo, resId }) {
  const [reservate, setReservate] = useState(false);
  async function makeReservation() {
    /*  await setReservation(resId); */
    /*   await addReservation(bookingInfo); */
  }

  useEffect(() => {
    if (reservate) {
      setPage(6);
      makeReservation();
    }
  }, [reservate]);
  return (
    <div>
      <p>Credit card</p>
      <Button
        onClick={() => {
          setReservate(true);
        }}
        variant="defaultline"
        size="lg"
        className="w-fit">
        Confirm booking
      </Button>
    </div>
  );
}
