import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "./ui/button";
import Heading from "./Headings";
import { addBooking } from "@/lib/crud";
import { useEffect, useState } from "react";

export default function FormTicket({ vipTickets, regTickets, setInfo, setPage, setBookingInfo }) {
  const [totalTickets, setTotalTickets] = useState();

  useEffect(() => {
    setTotalTickets(() => {
      let sumTotal;
      if (regTickets === 0) {
        sumTotal = vipTickets;
      } else {
        sumTotal = regTickets;
      }
      const newArray = [];

      for (let i = newArray.length; i < sumTotal; i++) {
        newArray.push("");
      }
      return newArray;
    });
  }, []);

  async function handleSumbmit(e) {
    setPage(4);
    e.preventDefault();
    let info = {};
    let extraPersons = [];
    const formData = new FormData(e.target);
    info.billingfullname = formData.get("fullname");
    info.address = formData.get("addres");
    info.city = formData.get("city");
    info.zip = formData.get("postcode");
    info.email = formData.get("email");
    info.tel = formData.get("phone");
    totalTickets.forEach((extra, i) => {
      extraPersons.push(formData.get(`extraname${i}`));
    });

    info.extrapersons = extraPersons;
    info.userid = self.crypto.randomUUID();
    setBookingInfo((o) => {
      return { ...o, userid: info.userid };
    });
    await addBooking(info);
    setInfo(info);
  }
  return (
    <form
      onSubmit={handleSumbmit}
      className="min-w-[300px">
      <Label htmlFor="form_fullname">Full name</Label>
      <Input
        className="max-w-80"
        type="text"
        id="form_fullname"
        name="fullname"
        placeholder=" "
        minLength="4"
        pattern=".*\s+.*"
        required
        aria-errormessage="errname"
      />
      <p className="errname error text-red-500">You need to enter your first and lastname</p>
      <Label htmlFor="form_address">Address</Label>
      <Input
        className="max-w-80"
        type="text"
        id="form_addres"
        name="addres"
        minLength="4"
        aria-errormessage="erraddress"
        required
        placeholder=" "
      />
      <p className="erraddress error text-red-500">You need to enter your address</p>

      <div className="flex gap-5">
        <div>
          <Label htmlFor="form_city">City</Label>
          <Input
            className="max-w-42"
            type="text"
            id="form_city"
            name="city"
            aria-errormessage="errcity"
            required
            placeholder=" "
          />
          <p className="errcity error text-red-500">You need to enter your city</p>
        </div>
        <div>
          <Label htmlFor="form_postcode">Postcode</Label>
          <Input
            className="max-w-[115px]"
            type="text"
            id="form_postcode"
            name="postcode"
            aria-errormessage="errpostcode"
            pattern="^\d+$"
            required
            placeholder=" "
          />
          <p className="errpostcode error text-red-500">You need to enter your postcode</p>
        </div>
      </div>
      <Label htmlFor="form_email">Email</Label>
      <Input
        className="max-w-80"
        type="email"
        id="form_email"
        name="email"
        aria-errormessage="erremail"
        required
        placeholder=" "
      />
      <p className="erremail error text-red-500">You need to enter your email</p>
      <Label htmlFor="form_city">Phone</Label>
      <Input
        className="max-w-60"
        type="tel"
        id="form_phone"
        name="phone"
        required
        aria-errormessage="errtel"
        pattern="^\d+$"
        placeholder=" "
      />
      <p className="errtel error text-red-500">You need to enter your phone number</p>
      {totalTickets && totalTickets.length > 1 && (
        <div>
          <Heading
            as="h3"
            size="lg"
            customClass="font-thin mt-5">
            Extra attendees
          </Heading>
          {totalTickets.map((nu, i) => {
            return (
              i >= 1 && (
                <div key={i}>
                  <Label htmlFor={`form_extraname${i}`}>Extra attendees full name</Label>
                  <Input
                    className="max-w-80"
                    type="text"
                    id={`form_extraname${i}`}
                    name={`extraname${i}`}
                    aria-errormessage={`errperson${i}`}
                    required
                    minLength="4"
                    pattern=".*\s+.*"
                    placeholder=" "
                  />
                  <p className={`errperson${i} error text-red-500`}>You need to enter both first and last name</p>
                </div>
              )
            );
          })}
        </div>
      )}

      <Button
        className="mt-5 w-fit"
        variant="defaultline">
        Sumbit
      </Button>
    </form>
  );
}
