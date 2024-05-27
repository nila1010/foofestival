"use client";
import CampsiteCard from "@/components/CampsiteCard";
import ChooseTents from "@/components/ChooseTents";
import ConfirmationTicket from "@/components/ConfirmationTicket";
import FormTicket from "@/components/FormTicket";
import Heading from "@/components/Headings";
import PaymentTicket from "@/components/PaymentTicket";
import SummeryAside from "@/components/SummeryAside";
import TicketCard from "@/components/TicketCard";
import TimeOut from "@/components/TimeOut";
import { getSpots } from "@/lib/crud";
import { useState, useEffect } from "react";

export default function Ticket() {
  const [regTickets, setRegTickets] = useState(0);
  const [vipTickets, setVipTickets] = useState(0);
  const [totalTickets, setTotalTickets] = useState(0);
  const [campSitePick, setCampSitePick] = useState();
  const [totalPrice, setTotalPrice] = useState(99);
  const [availableSpots, setAvailableSpots] = useState();
  const [resId, setResId] = useState();
  const [info, setInfo] = useState();
  const [page, setPage] = useState(5);
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
    <section>
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
          <section className={`grid ${page === 4 || page === 5 ? "grid-cols-[1fr]" : "grid-cols-[1fr] md:grid-cols-[1fr_1fr] tb:grid-cols-[3fr_2fr]"}  gap-10`}>
            <article className={`${page === 4 ? "hidden" : "block"}`}>
              {page === 1 && (
                <div className={page === 1 ? "fade-in" : ""}>
                  <Heading
                    as="h2"
                    size="2xl">
                    Accomidation
                  </Heading>
                  <p>Choose a campesite</p>
                  {availableSpots && (
                    <div className="flex gap-5 flex-wrap justify-center sm:justify-start mt-5">
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
                <div className={`trans ${page === 2 ? "fade-in" : ""}`}>
                  <Heading
                    as="h2"
                    size="2xl">
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
                <div className={page === 3 ? "fade-in" : ""}>
                  <Heading
                    as="h2"
                    size="2xl">
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
              {page === 5 && (
                <div className={page === 5 ? "fade-in" : ""}>
                  <Heading
                    as="h2"
                    size="2xl">
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
            {page !== 5 && (
              <div className={page !== 5 ? "fade-in" : ""}>
                <SummeryAside
                  resId={resId}
                  setTimeOut={setTimeOut}
                  regTickets={regTickets}
                  vipTickets={vipTickets}
                  campSitePick={campSitePick}
                  setGreenOpt={setGreenOpt}
                  tents={tents}
                  page={page}
                  setPage={setPage}
                  totalPrice={totalPrice}
                  info={info}
                />
              </div>
            )}
          </section>
        </section>
      )}
      {page === 6 && (
        <div className={page === 1 ? "fade-in" : ""}>
          <ConfirmationTicket
            btnLink="/program"
            btnText="See program"
            btnLink2="/artists"
            btnText2="See artists"
          />
        </div>
      )}
      {timeOut && (
        <div className={timeOut ? "fade-in" : ""}>
          <TimeOut
            setTimeOut={setTimeOut}
            setPage={setPage}
            btnText="Buy tickets"
          />
        </div>
      )}
    </section>
  );
}
