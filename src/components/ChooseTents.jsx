import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";

export default function ChooseTents({ regTickets, vipTickets, setTents, setPage, setBookingInfo }) {
  const [twoTent, setTwoTent] = useState(0);
  const [threeTent, setThreeTent] = useState(0);
  const [totalTents, setTotalTents] = useState(0);
  const [disThree, setDisThree] = useState(false);
  const [disAll, setDisAll] = useState(false);
  const totalTickets = parseInt(regTickets) + parseInt(vipTickets);

  useEffect(() => {
    setTotalTents(() => {
      const total = twoTent * 2 + threeTent * 3;
      return total;
    });
  }, [twoTent, threeTent]);

  useEffect(() => {
    /*  if (totalTents > 0) {
      if (3 % totalTents === 0) {
        setDisThree(false);
      } else {
        setDisThree(true);
      }
      if (2 % totalTents === 0) {
        setDisAll(false);
      } else {
        setDisAll(true);
      }
    } */

    if (totalTents === totalTickets - 1) {
      setDisThree(true);
    } else {
      setDisThree(false);
    }

    if (totalTents === totalTickets + 1 || totalTents === totalTickets) {
      setDisAll(true);
    } else {
      setDisAll(false);
    }

    setTents((o) => {
      return (o = { opt1: twoTent, opt2: threeTent });
    });

    setBookingInfo((o) => {
      return { ...o, tent2pers: twoTent, tent3pers: threeTent };
    });
  }, [totalTents]);

  return (
    <>
      <div className="flex flex-wrap gap-x-10 justify-center sm:justify-start">
        <div className="flex items-center">
          <Button
            onClick={() => {
              setTwoTent((o) => {
                if (o < 1) {
                  return (o = 0);
                } else {
                  return o - 1;
                }
              });
            }}
            variant="ghost"
            className="self-end w-fit z-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="currentColor"
              className="bi bi-dash-square"
              viewBox="0 0 16 16">
              <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
              <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
            </svg>
          </Button>
          <div className="grid justify-items-center ml-[-40px]">
            <Label
              htmlFor="2person"
              className="text-md mb-3">
              2 persons tent 299,-
              <p className="text-sm font-thin text-center">price per tent</p>
            </Label>
            <Input
              value={twoTent}
              readOnly
              className="w-[45px] text-center [-moz-appearance:_textfield] [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
              type="number"
              id="2person"
              name="2person"
              placeholder="0"
            />
          </div>
          {!disAll && (
            <Button
              onClick={() => {
                setTwoTent((o) => o + 1);
              }}
              variant="ghost"
              className="self-end ml-[-40px] w-fit">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                className="bi bi-plus-square"
                viewBox="0 0 16 16">
                <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
              </svg>
            </Button>
          )}
        </div>

        <div className="flex">
          <Button
            onClick={() => {
              setThreeTent((o) => {
                if (o < 1) {
                  return (o = 0);
                } else {
                  return o - 1;
                }
              });
            }}
            variant="ghost"
            className="self-end w-fit z-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="currentColor"
              className="bi bi-dash-square"
              viewBox="0 0 16 16">
              <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
              <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
            </svg>
          </Button>
          <div className="grid justify-items-center ml-[-40px]">
            <Label
              htmlFor="3person"
              className="text-md mb-3 w-fit">
              3 persons tent 399,-
              <p className="text-sm font-thin text-center">price per tent</p>
            </Label>
            <Input
              value={threeTent}
              readOnly
              className="w-[45px] text-center [-moz-appearance:_textfield] [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
              type="number"
              id="3person"
              name="3person"
              placeholder="0"
            />
          </div>

          {!disThree && !disAll && (
            <Button
              onClick={() => {
                setThreeTent((o) => o + 1);
              }}
              variant="ghost"
              className="self-end ml-[-40px] w-fit">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                className="bi bi-plus-square"
                viewBox="0 0 16 16">
                <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
              </svg>
            </Button>
          )}
        </div>
      </div>
      {disAll && (
        <Button
          variant="defaultline"
          className="mt-10 w-fit mx-auto sm:mx-0"
          onClick={() => {
            setPage(3);
          }}>
          Confirm choices
        </Button>
      )}
    </>
  );
}
