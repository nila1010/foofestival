"use client";
import CampsiteCard from "@/components/CampsiteCard";
import FormTicket from "@/components/FormTicket";
import Heading from "@/components/Headings";
import HeroComponent from "@/components/HeroComponent";
import TicketCard from "@/components/TicketCard";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { getSpots } from "@/lib/crud";
import { useState, useEffect } from "react";
export default function Ticket() {
  const [regTickets, setRegTickets] = useState(4);
  const [vipTickets, setVipTickets] = useState(0);
  const [campSitePick, setCampSitePick] = useState();
  const [totalPrice, setTotalPrice] = useState(99);
  const [availableSpots, setAvailableSpots] = useState();
  const [resId, setResId] = useState();
  const [info, setInfo] = useState();

  async function getAvailableSpots() {
    const spots = await getSpots();
    setAvailableSpots(spots);
  }

  useEffect(() => {
    getAvailableSpots();
  }, []);

  useEffect(() => {
    setTotalPrice(() => {
      const newPrice = 99 + regTickets * 799 + vipTickets * 1299;
      return newPrice;
    });
  }, [regTickets, vipTickets]);

  useEffect(() => {
    if (resId) {
      console.log("Set Timer");
    }
  }, [resId]);

  return (
    <section>
      {regTickets === 0 && vipTickets === 0 && (
        <section className="grid place-items-center">
          <HeroComponent imgPath="/img/headerindex.png" btnText="Program" btnLink="/program" btn2Text="Artists" btn2Link="/artists" />
          <Heading as="h1" size="2xl">
            Tickets
          </Heading>
          <p className="max-w-prose text-center">Experience the thrill of live music and the excitement of unforgettable events with our exclusive ticket offerings!</p>
          <div className="flex gap-10 pt-16 flex-wrap place-content-center">
            <TicketCard setRegTickets={setRegTickets} title="Regular ticket" price="799,-" description="Unlock the gateway to unforgettable experiences with our regular tickets!" label="Number of regular tickets" inputId="regTicket" />
            <TicketCard setVipTickets={setVipTickets} title="VIP ticket" price="1299,-" description="Elevate your experience to the next level with our VIP tickets! Gain exclusive access to premium perks, priority entry, VIP lounges and more." label="Number of vip tickets" inputId="vipTicket" />
          </div>
        </section>
      )}
      {(regTickets > 0 || vipTickets > 0) && (
        <section>
          <ol className="bg-textprim text-bgprim flex gap-3 justify-end px-10 py-10">
            <li>1 Shop</li>
            <li>2 Checkout</li>
            <li>3 Payment</li>
          </ol>
          <section className="grid grid-cols-[2fr_1fr] gap-10">
            <article className="ml-10">
              <ol className="flex gap-5 py-5">
                <li className={!resId && "text-btntextsecon"}>Accomidation</li>
                <li className={resId && "text-btntextsecon"}>Information</li>
                <li>Summery</li>
              </ol>
              <Separator className="w-[80%]" />
              {!campSitePick && (
                <div className="mt-5">
                  <Heading as="h2" size="lg">
                    Accomidation
                  </Heading>
                  <p>Choose a campesite</p>
                  {availableSpots && (
                    <div className="flex gap-5 flex-wrap mt-5">
                      <CampsiteCard setResId={setResId} numOfTickets={regTickets > 0 ? regTickets : vipTickets} setCampSitePick={setCampSitePick} title="Svartheim" description="Svartheim offers a tranquil oasis for festival-goers seeking a peaceful retreat." spots={availableSpots[0].available} />
                      <CampsiteCard setResId={setResId} numOfTickets={regTickets > 0 ? regTickets : vipTickets} setCampSitePick={setCampSitePick} title="Nilfheim" description="Svartheim offers a tranquil oasis for festival-goers seeking a peaceful retreat." spots={availableSpots[1].available} />
                      <CampsiteCard setResId={setResId} numOfTickets={regTickets > 0 ? regTickets : vipTickets} setCampSitePick={setCampSitePick} title="Helheim" description="Svartheim offers a tranquil oasis for festival-goers seeking a peaceful retreat." spots={availableSpots[2].available} />
                      <CampsiteCard setResId={setResId} numOfTickets={regTickets + vipTickets} setCampSitePick={setCampSitePick} title="Muspelheim" description="Step into a realm of luxury and comfort at Vanaheim, where every camper is treated like royalty." spots={availableSpots[3].available} />
                      <CampsiteCard setResId={setResId} numOfTickets={regTickets + vipTickets} setCampSitePick={setCampSitePick} title="Alfheim" description="Dare to venture into the wild and rugged terrain of Jotunheim, where adventure awaits around every corner." spots={availableSpots[4].available} />
                    </div>
                  )}
                </div>
              )}
              {resId && !info && (
                <div className="mt-5">
                  <Heading as="h2" size="lg">
                    Billing person
                  </Heading>
                  <p className="mb-5">Fill out the form to complete the resevation</p>
                  <FormTicket setInfo={setInfo} regTickets={regTickets} vipTickets={vipTickets} />
                </div>
              )}
              {info && <div>Summery</div>}
            </article>
            <article className="bg-textprim text-bgprim rounded-bl grid auto-rows-max justify-end pr-10">
              <Heading as="h2" size="lg" customClass="ml-auto">
                Summery
              </Heading>
              <p className="text-right">
                {regTickets > 0 ? "Regular ticket" : "VIP ticket"} x <span>{regTickets > 0 ? regTickets : vipTickets}</span>
              </p>
              <p className="text-right">
                Campsite <span>{campSitePick}</span>
              </p>
              <Heading as="h3" size="sm" customClass="ml-auto">
                Optional
              </Heading>
              <p className="text-right">Fixed booking fee 99,-</p>
              <div className="flex gap-5 my-3 items-center">
                {info && <Button variant="default">Payment</Button>}
                <p className="font-bold text-right">
                  Total: <span>{totalPrice}</span>,-
                </p>
              </div>
            </article>
          </section>
        </section>
      )}
    </section>
  );
}
