"use client";
import CampsiteCard from "@/components/CampsiteCard";
import ChooseTents from "@/components/ChooseTents";
import ConfirmationTicket from "@/components/ConfirmationTicket";
import CountdownTimer from "@/components/CountdownTimer";
import FormTicket from "@/components/FormTicket";
import Heading from "@/components/Headings";
import HeroComponent from "@/components/HeroComponent";
import PaymentTicket from "@/components/PaymentTicket";
import SummeryTicket from "@/components/SummeryTicket";
import TicketCard from "@/components/TicketCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { getSpots } from "@/lib/crud";
import { useState, useEffect } from "react";
export default function Ticket() {
  const [regTickets, setRegTickets] = useState(3);
  const [vipTickets, setVipTickets] = useState(0);
  const [totalTickets, setTotalTickets] = useState(0);
  const [campSitePick, setCampSitePick] = useState();
  const [totalPrice, setTotalPrice] = useState(99);
  const [availableSpots, setAvailableSpots] = useState();
  const [resId, setResId] = useState();
  const [info, setInfo] = useState();
  const [page, setPage] = useState(2);
  const [greenOpt, setGreenOpt] = useState(false);
  const [tents, setTents] = useState();
  const [bookingInfo, setBookingInfo] = useState({});
  const [timeOut, setTimeOut] = useState(false);

  async function getAvailableSpots() {
    const spots = await getSpots();
    setAvailableSpots(spots);
  }

  useEffect(() => {
    if (timeOut) {
      setRegTickets(0);
      setVipTickets(0);
      setCampSitePick();
      setTotalPrice(99);
      setResId();
      setInfo();
      setGreenOpt(false);
      setTents();
      setBookingInfo({});
    }
  }, [timeOut]);

  useEffect(() => {
    setTotalTickets(() => {
      const total = parseInt(regTickets) + parseInt(vipTickets);
      return total;
    });
    getAvailableSpots();
  }, [regTickets, vipTickets]);

  useEffect(() => {
    setTotalPrice(() => {
      if (greenOpt && tents) {
        const newPrice = 99 + regTickets * 799 + vipTickets * 1299 + 249 + tents.opt1 * 299 + tents.opt2 * 399;
        return newPrice;
      }
      if (greenOpt) {
        const newPrice = 99 + regTickets * 799 + vipTickets * 1299 + 249;
        return newPrice;
      }
      if (tents) {
        const newPrice = 99 + regTickets * 799 + vipTickets * 1299 + tents.opt1 * 299 + tents.opt2 * 399;
        return newPrice;
      }
      const newPrice = 99 + regTickets * 799 + vipTickets * 1299;
      return newPrice;
    });
  }, [regTickets, vipTickets, greenOpt, tents]);

  useEffect(() => {
    if (resId) {
      console.log("Set Timer");
    }
  }, [resId]);

  return (
    <section className="mt-5 sm:mt-0">
      {page === 0 && (
        <section className="grid place-items-center">
          <Heading
            as="h1"
            size="2xl">
            Tickets
          </Heading>
          <p className="max-w-prose text-center">Experience the thrill of live music and the excitement of unforgettable events with our exclusive ticket offerings!</p>
          <div className="flex gap-10 pt-16 flex-wrap place-content-center">
            <TicketCard
              setBookingInfo={setBookingInfo}
              setPage={setPage}
              setRegTickets={setRegTickets}
              title="Regular ticket"
              price="799,-"
              description="Unlock the gateway to unforgettable experiences with our regular tickets!"
              label="Number of regular tickets"
              inputId="regTicket"
            />
            <TicketCard
              setBookingInfo={setBookingInfo}
              setPage={setPage}
              setVipTickets={setVipTickets}
              title="VIP ticket"
              price="1299,-"
              description="Elevate your experience to the next level with our VIP tickets! Gain exclusive access to premium perks, priority entry, VIP lounges and more."
              label="Number of vip tickets"
              inputId="vipTicket"
            />
          </div>
        </section>
      )}
      {page >= 1 && page < 6 && !timeOut && (
        <section>
          <div className={`bg-textprim flex ${resId ? "justify-between" : "justify-end"} items-center`}>
            {resId && <CountdownTimer setTimeOut={setTimeOut} />}
            <ol className="text-bgprim flex gap-3 px-10 py-10">
              <li>1 Shop</li>
              <li>2 Checkout</li>
              <li>3 Payment</li>
            </ol>
          </div>

          <section className="grid grid-cols-[2fr_1fr] gap-10">
            <article className="ml-10">
              <ol className="flex gap-5 py-5">
                <li className={page < 3 ? "text-btntextsecon" : ""}>Accomidation</li>
                <li className={page === 3 ? "text-btntextsecon" : ""}>Information</li>
                <li className={page === 4 ? "text-btntextsecon" : ""}>Summery</li>
                <li className={page === 5 ? "text-btntextsecon" : ""}>Payment</li>
              </ol>
              <Separator className="w-[80%]" />
              {page === 1 && (
                <div className="mt-5">
                  <Heading
                    as="h2"
                    size="lg">
                    Accomidation
                  </Heading>
                  <p>Choose a campesite</p>
                  {availableSpots && (
                    <div className="flex gap-5 flex-wrap mt-5">
                      {availableSpots[0].available >= totalTickets && (
                        <CampsiteCard
                          imgPath="/img/campsite.png"
                          setBookingInfo={setBookingInfo}
                          setPage={setPage}
                          setResId={setResId}
                          numOfTickets={totalTickets}
                          setCampSitePick={setCampSitePick}
                          title="Svartheim"
                          description="Svartheim offers a tranquil oasis for festival-goers seeking a peaceful retreat."
                          spots={availableSpots[0].available}
                        />
                      )}
                      {availableSpots[1].available >= totalTickets && (
                        <CampsiteCard
                          imgPath="/img/campsite2.png"
                          setBookingInfo={setBookingInfo}
                          setPage={setPage}
                          setResId={setResId}
                          numOfTickets={totalTickets}
                          setCampSitePick={setCampSitePick}
                          title="Nilfheim"
                          description="Svartheim offers a tranquil oasis for festival-goers seeking a peaceful retreat."
                          spots={availableSpots[1].available}
                        />
                      )}
                      {availableSpots[2].available >= totalTickets && (
                        <CampsiteCard
                          imgPath="/img/campsite3.png"
                          setBookingInfo={setBookingInfo}
                          setPage={setPage}
                          setResId={setResId}
                          numOfTickets={totalTickets}
                          setCampSitePick={setCampSitePick}
                          title="Helheim"
                          description="Svartheim offers a tranquil oasis for festival-goers seeking a peaceful retreat."
                          spots={availableSpots[2].available}
                        />
                      )}
                      {availableSpots[3].available >= totalTickets && (
                        <CampsiteCard
                          imgPath="/img/campsite4.png"
                          setBookingInfo={setBookingInfo}
                          setPage={setPage}
                          setResId={setResId}
                          numOfTickets={totalTickets}
                          setCampSitePick={setCampSitePick}
                          title="Muspelheim"
                          description="Step into a realm of luxury and comfort at Vanaheim, where every camper is treated like royalty."
                          spots={availableSpots[3].available}
                        />
                      )}
                      {availableSpots[4].available >= totalTickets && (
                        <CampsiteCard
                          imgPath="/img/campsite2.png"
                          setBookingInfo={setBookingInfo}
                          setPage={setPage}
                          setResId={setResId}
                          numOfTickets={totalTickets}
                          setCampSitePick={setCampSitePick}
                          title="Alfheim"
                          description="Dare to venture into the wild and rugged terrain of Jotunheim, where adventure awaits around every corner."
                          spots={availableSpots[4].available}
                        />
                      )}
                    </div>
                  )}
                </div>
              )}
              {page === 2 && (
                <div className="mt-5">
                  <Heading
                    as="h2"
                    size="lg">
                    Choose tents
                  </Heading>
                  <p className="mb-5">Numbers of tent must match tickets purchased</p>
                  <ChooseTents
                    setBookingInfo={setBookingInfo}
                    setPage={setPage}
                    setTents={setTents}
                    regTickets={regTickets}
                    vipTickets={vipTickets}
                  />
                </div>
              )}
              {page === 3 && (
                <div className="mt-5">
                  <Heading
                    as="h2"
                    size="lg">
                    Billing person
                  </Heading>
                  <p className="mb-5">Fill out the form to complete the resevation</p>
                  <FormTicket
                    setBookingInfo={setBookingInfo}
                    setPage={setPage}
                    setInfo={setInfo}
                    regTickets={regTickets}
                    vipTickets={vipTickets}
                  />
                </div>
              )}
              {page === 4 && (
                <div className="mt-5">
                  <Heading
                    as="h2"
                    size="lg">
                    Summery personal information
                  </Heading>
                  <SummeryTicket info={info} />
                </div>
              )}
              {page === 5 && (
                <div className="mt-5">
                  <Heading
                    as="h2"
                    size="lg">
                    Payment
                  </Heading>
                  <PaymentTicket
                    setPage={setPage}
                    bookingInfo={bookingInfo}
                    resId={resId}
                  />
                </div>
              )}
            </article>
            <article className="bg-textprim text-bgprim rounded-bl grid auto-rows-max justify-end pr-10">
              <Heading
                as="h2"
                size="lg"
                customClass="ml-auto">
                Summery
              </Heading>
              <p className="text-right">
                {regTickets > 0 ? "Regular ticket" : "VIP ticket"} x <span>{regTickets > 0 ? regTickets : vipTickets}</span>
              </p>
              <p className="text-right">
                Campsite <span>{campSitePick}</span>
              </p>
              <div className="flex gap-5 justify-end items-center">
                <Label htmlFor="option1">Green camping option 249,-</Label>
                <Input
                  onChange={() => {
                    setGreenOpt((o) => (o = !o));
                  }}
                  className="h-9 w-fit"
                  type="checkbox"
                  name="option1"
                  id="option1"></Input>
              </div>
              {tents && (
                <div className="text-right">
                  {tents.opt1 > 0 && <p>2 persons tent x {tents.opt1}</p>}
                  {tents.opt2 > 0 && <p>3 persons tent x {tents.opt2}</p>}
                </div>
              )}
              <p className="text-right">Fixed booking fee 99,-</p>
              <div className="flex gap-5 my-3 justify-end items-center">
                {page === 4 && (
                  <Button
                    onClick={() => {
                      setPage(5);
                    }}
                    variant="default">
                    Payment
                  </Button>
                )}
                <p className="font-bold text-right">
                  Total: <span>{totalPrice}</span>,-
                </p>
              </div>
            </article>
          </section>
        </section>
      )}
      {page === 6 && (
        <ConfirmationTicket
          btnLink="/program"
          btnText="See program"
        />
      )}
      {timeOut && <div>Timeout</div>}
    </section>
  );
}
