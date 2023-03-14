import React, { useState, useEffect } from "react";
import './Pomodoro.css'

/////////////////////////////////////////
export function Pomodoro({ setProcessStatus}) {
  const [seconds, setSeconds] = useState(60);

  useEffect(() => {
    if (seconds > 0) {
      setTimeout(() => setSeconds(seconds - 1), 1000);
    } else {
      setProcessStatus('validation')
      // console.log("¡El temporizador ha finalizado!");
    }
  }, [seconds]);

  /////////////////////////////////////////
  return (
    <h1 className="section-question__contador">{seconds} seg.</h1>
  );
}
