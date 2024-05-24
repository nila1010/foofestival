import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import CountdownTimer from "./CountdownTimer";
import Heading from "./Headings";
export default function SummeryAside({ resId, setTimeOut, regTickets, vipTickets, campSitePick, setGreenOpt, tents, setPage, page, totalPrice, info }) {
  console.log(info);
  return (
    <article className={`bg-textprim text-bgprim rounded-sm grid auto-rows-max p-5 ${page === 4 ? "grid-cols-2 justify-items-center" : ""} `}>
      <div>
        {resId && <CountdownTimer setTimeOut={setTimeOut} />}
        <Heading
          as="h2"
          size="xl">
          Summery
        </Heading>
        <Heading
          as="h3"
          size="md"
          customClass="mt-3">
          Tickets
        </Heading>
        <p>
          {regTickets > 0 ? "Regular ticket" : "VIP ticket"} x <span>{regTickets > 0 ? regTickets : vipTickets}</span>
        </p>
        <Heading
          as="h3"
          size="md"
          customClass={`${page < 3 ? "underline" : ""} mt-3`}>
          Accommodation
        </Heading>
        {campSitePick && (
          <>
            <p>
              Campsite <span>{campSitePick}</span>
            </p>
            {tents && (
              <div>
                {tents.opt1 > 0 && <p>2 persons tent x {tents.opt1}</p>}
                {tents.opt2 > 0 && <p>3 persons tent x {tents.opt2}</p>}
              </div>
            )}
            <div className="flex gap-5 items-center -mt-2">
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
          </>
        )}
      </div>
      <div className={`${page === 4 ? "mt-20" : ""}`}>
        <Heading
          as="h3"
          size="md"
          customClass={`${page === 3 ? "underline" : ""} mt-3`}>
          Personal information
        </Heading>
        {page === 4 && info && (
          <>
            <p className="underline">Billing person</p>
            <p>{info.billingfullname}</p>
            <p>{info.address}</p>
            <div className="flex gap-2">
              <p>{info.city}</p>
              <p>{info.zip}</p>
            </div>
            <p>{info.email}</p>
            <p>{info.tel}</p>
            <div>
              <p className="underline">Extra attendees</p>
              {info.extrapersons.map((person) => {
                return <p key={person}>{person}</p>;
              })}
            </div>
          </>
        )}
        <p className="mt-5">Fixed booking fee 99,-</p>
        <p className="font-bold">
          Total: <span>{totalPrice}</span>,-
        </p>
      </div>
      {page === 4 && (
        <Button
          className="w-fit self-center col-start-1 col-end-3 mx-auto mt-5"
          onClick={() => {
            setPage(5);
          }}
          variant="default"
          size="lg">
          Confirm and go to Payment
        </Button>
      )}
    </article>
  );
}
