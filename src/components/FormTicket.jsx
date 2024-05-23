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
      const sumTotal = vipTickets + regTickets;
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
    info.billingfirstname = formData.get("firstname");
    info.billinglastname = formData.get("lastname");
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
    /* await addBooking(info); */
    setInfo(info);
  }
  return (
    <form onSubmit={handleSumbmit}>
      <Label htmlFor="form_firstname">First name</Label>
      <Input
        className="max-w-60"
        type="text"
        id="form_firstname"
        name="firstname"
      />
      <Label htmlFor="form_lastname">Last name</Label>
      <Input
        className="max-w-60"
        type="text"
        id="form_lastname"
        name="lastname"
      />
      <Label htmlFor="form_address">Address</Label>
      <Input
        className="max-w-80"
        type="text"
        id="form_addres"
        name="addres"
      />
      <div className="flex gap-5">
        <div>
          <Label htmlFor="form_city">City</Label>
          <Input
            className="max-w-42"
            type="text"
            id="form_city"
            name="city"
          />
        </div>
        <div>
          <Label htmlFor="form_postcode">Postcode</Label>
          <Input
            className="max-w-[115px]"
            type="text"
            id="form_postcode"
            name="postcode"
          />
        </div>
      </div>
      <Label htmlFor="form_email">Email</Label>
      <Input
        className="max-w-80"
        type="email"
        id="form_email"
        name="email"
      />
      <Label htmlFor="form_city">Phone</Label>
      <Input
        className="max-w-60"
        type="tel"
        id="form_phone"
        name="phone"
      />
      {totalTickets && totalTickets.length > 1 && (
        <div>
          <Heading
            as="h3"
            size="lg"
            customClass="font-thin mt-5">
            Extra persons names
          </Heading>
          {totalTickets.map((nu, i) => {
            return (
              i >= 1 && (
                <div key={i}>
                  <Label htmlFor={`form_extraname${i}`}>Extra person full name</Label>
                  <Input
                    className="max-w-80"
                    type="text"
                    id={`form_extraname${i}`}
                    name={`extraname${i}`}
                  />
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
