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
    await setReservation(resId);
    await addReservation(bookingInfo);
  }

  useEffect(() => {
    if (reservate) {
      setPage(6);
      makeReservation();
    }
  }, [reservate]);

  async function handleForm(e) {
    e.preventDefault();
    setReservate(true);
  }
  return (
    <div>
      <div className="flex gap-x-10 items-center flex-wrap">
        <div className="grid mt-5">
          <Cards
            number={state.number}
            expiry={state.expiry}
            cvc={state.cvc}
            name={state.name}
            focused={state.focus}
          />
        </div>
        <form
          className="mt-5"
          onSubmit={handleForm}>
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
            aria-errormessage="errname"
            minLength="4"
            pattern=".*\s+.*"
          />
          <p className="errndata error text-red-500">You need to enter full name</p>
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
                minLength="16"
                maxLength="16"
                pattern="^\d+$"
                required
                aria-errormessage="errnumber"
              />
              <p className="errnumber error text-red-500">Only numbers 16 needed</p>
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
                minLength="4"
                maxLength="4"
                pattern="^\d+$"
                required
                aria-errormessage="errdata"
              />
              <p className="errndata error text-red-500">Only numbers 4 needed</p>
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
            minLength="3"
            maxLength="3"
            pattern="^\d+$"
            required
            aria-errormessage="errcvc"
          />
          <p className="errncvc error text-red-500">Only numbers 3 needed</p>
          <Button
            variant="defaultline"
            size="lg"
            className="w-fit mt-10">
            Confirm booking
          </Button>
        </form>
      </div>
    </div>
  );
}
