import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import CountdownTimer from "./CountdownTimer";
import Heading from "./Headings";
export default function SummeryAside({ resId, setTimeOut, regTickets, vipTickets, campSitePick, setGreenOpt, tents, setPage, page, totalPrice, info }) {
  return (
    <article className={`bg-textprim text-bgprim rounded-sm grid auto-rows-max p-5 ${page === 4 ? "grid-cols-2 justify-items-center" : ""} mt-4 lg:mt-0 `}>
      <div>
        {resId && <CountdownTimer setTimeOut={setTimeOut} />}
        <Heading
          as="h2"
          size="xl">
          Summery
        </Heading>
        <div className="flex items-end">
          <Heading
            as="h3"
            size="md"
            customClass="mt-3">
            Tickets
          </Heading>
          <Button
            onClick={() => {
              setPage(0);
            }}
            variant="ghost"
            size="sm"
            className="max-w-fit">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-pencil-fill"
              viewBox="0 0 16 16">
              <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z" />
            </svg>
          </Button>
        </div>

        <p>
          {regTickets > 0 ? "Regular ticket" : "VIP ticket"} x <span>{regTickets > 0 ? regTickets : vipTickets}</span>
        </p>
        <div className="flex items-end">
          <Heading
            as="h3"
            size="md"
            customClass={`${page < 3 ? "underline" : ""} mt-3`}>
            Accommodation
          </Heading>
          <Button
            onClick={() => {
              setPage(1);
            }}
            variant="ghost"
            size="sm"
            className="max-w-fit">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-pencil-fill"
              viewBox="0 0 16 16">
              <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z" />
            </svg>
          </Button>
        </div>

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
        <div className="flex items-end">
          <Heading
            as="h3"
            size="md"
            customClass={`${page === 3 ? "underline" : ""} mt-3`}>
            Personal information
          </Heading>
          <Button
            onClick={() => {
              setPage(3);
            }}
            variant="ghost"
            size="sm"
            className="max-w-fit">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-pencil-fill"
              viewBox="0 0 16 16">
              <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z" />
            </svg>
          </Button>
        </div>
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
