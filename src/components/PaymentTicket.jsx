import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import Cards from "react-credit-cards-2";
import "react-credit-cards-2/dist/es/styles-compiled.css";

import { setReservation, addReservation } from "@/lib/crud";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
export default function PaymentTicket({ setPage, bookingInfo, resId }) {
  const [reservate, setReservate] = useState(false);
  const [state, setState] = useState({
    number: "",
    expiry: "",
    cvc: "",
    name: "",
    focus: "",
  });

  const handleInputChange = (evt) => {
    const { name, value } = evt.target;

    setState((prev) => ({ ...prev, [name]: value }));
  };

  const handleInputFocus = (evt) => {
    setState((prev) => ({ ...prev, focus: evt.target.name }));
  };

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
      <div className="flex gap-x-10 items-end flex-wrap">
        <div className="grid justify-start mt-5">
          <Cards
            number={state.number}
            expiry={state.expiry}
            cvc={state.cvc}
            name={state.name}
            focused={state.focus}
          />
        </div>
        <form className="mt-5">
          <Label htmlFor="form_name">Cardholder name</Label>
          <Input
            id="form_name"
            className="max-w-80"
            type="text"
            name="name"
            placeholder="Cardholder name"
            value={state.name}
            onChange={handleInputChange}
            onFocus={handleInputFocus}
          />
          <div className="flex gap-5">
            <div>
              <Label htmlFor="form_cardnumber">Card number</Label>
              <Input
                id="form_cardnumber"
                className="max-w-40"
                type="text"
                name="number"
                placeholder="Card Number"
                value={state.number}
                onChange={handleInputChange}
                onFocus={handleInputFocus}
              />
            </div>
            <div>
              <Label htmlFor="form_expire">Expire date</Label>
              <Input
                id="form_expire"
                className="max-w-20"
                type="text"
                name="expiry"
                placeholder="Expire date"
                value={state.expiry}
                onChange={handleInputChange}
                onFocus={handleInputFocus}
              />
            </div>
          </div>
          <Label htmlFor="form_cvc">CVC</Label>
          <Input
            id="form_cvc"
            className="max-w-14"
            type="text"
            name="cvc"
            placeholder="CVC"
            value={state.cvc}
            onChange={handleInputChange}
            onFocus={handleInputFocus}
          />
        </form>
      </div>
      <Button
        onClick={() => {
          setReservate(true);
        }}
        variant="defaultline"
        size="lg"
        className="w-fit mt-10">
        Confirm booking
      </Button>
    </div>
  );
}
