import React, { useState, useEffect } from "react";
import './Pomodoro.css'

/////////////////////////////////////////
export function Pomodoro({setInProcess}) {
  const [seconds, setSeconds] = useState(20);

  useEffect(() => {
    if (seconds > 0) {
      setTimeout(() => setSeconds(seconds - 1), 1000);
    } else {
      setInProcess('finish')
      // console.log("¡El temporizador ha finalizado!");
    }
  }, [seconds]);

  /////////////////////////////////////////
  return (
    <h1 className="contador">{seconds}</h1>
  );
}
