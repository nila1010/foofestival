"use client";
import { useState, useEffect } from "react";
export default function CountdownTimer({ setTimeOut }) {
  const [seconds, setSeconds] = useState(300);

  const displaySeconds = seconds % 60;
  const displayMinutes = Math.floor(seconds / 60);

  useEffect(() => {
    let timer;
    if (seconds > 0) {
      timer = setTimeout(() => {
        setSeconds((o) => o - 1);
      }, 1000);
    } else {
      setTimeOut(true);
      return clearTimeout(timer);
    }
  }, [seconds]);

  return (
    <p className="text-bold text-lg text-bgprim">
      Time to complete 0{displayMinutes}:{displaySeconds < 10 ? "0" : ""}
      {displaySeconds}
    </p>
  );
}
