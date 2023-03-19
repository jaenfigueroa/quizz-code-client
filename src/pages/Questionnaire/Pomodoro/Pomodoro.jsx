import React, { useState, useEffect } from 'react'
import './Pomodoro.css'

/////////////////////////////////////////
export function Pomodoro({ setProcessStatus }) {
  const [seconds, setSeconds] = useState(30)
  const [color, setColor] = useState('blue')

  useEffect(() => {
    seconds <= 10 && setColor('red')

    if (seconds >= 0) {
      setTimeout(() => setSeconds(seconds - 1), 1000)
    } else {
      setProcessStatus('validation')
      // console.log("¡El temporizador ha finalizado!");
    }

  }, [seconds])

  /////////////////////////////////////////
  return (
    <div
      className={`section-question__contador ${seconds<= 10 ? 'palpitar': ''}`}
      style={{
        background: `conic-gradient(var(--${color}) calc( ${seconds}/30 * 100%), var(--gray-4) calc(${seconds}/30 * 100%))`
      }}
      data-number={seconds}
      >
      {/* <p>{seconds}</p> */}
      {/* <span>s.</span> */}
    </div>
  )
}
