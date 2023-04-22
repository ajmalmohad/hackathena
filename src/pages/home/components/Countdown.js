import React, { useState, useEffect } from 'react';
import './Countdown.css';

const CountdownTimer = () => {
  // const [secondsLeft, setSecondsLeft] = useState(2 * 24 * 60 * 60);
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const deadline = "24 april 2023 12:30:00";

  useEffect(() => {
    const timerId = setInterval(() => {
      const time = Date.parse(deadline) - Date.now();
      setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
      setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
      setMinutes(Math.floor((time / 1000 / 60) % 60));
      setSeconds(Math.floor((time / 1000) % 60));
      // setSecondsLeft(secondsLeft => secondsLeft - 1);
    }, 1000);

    return () => clearInterval(timerId);
  }, []);

  // const days = Math.floor(secondsLeft / (24 * 60 * 60));
  // const hours = Math.floor((secondsLeft % (24 * 60 * 60)) / 3600);
  // const minutes = Math.floor((secondsLeft % 3600) / 60);
  // const seconds = secondsLeft % 60;

  return (
    <div className="countdown-timer">
      <h2>Countdown Timer</h2>
      <div className="countdown-timer-display">
        <div className="countdown-timer-unit">
          <div className="countdown-timer-value">{days}</div>
          <div className="countdown-timer-label">Days</div>
        </div>
        <div className="countdown-timer-unit">
          <div className="countdown-timer-value">{hours}</div>
          <div className="countdown-timer-label">Hours</div>
        </div>
        <div className="countdown-timer-unit">
          <div className="countdown-timer-value">{minutes}</div>
          <div className="countdown-timer-label">Minutes</div>
        </div>
        <div className="countdown-timer-unit">
          <div className="countdown-timer-value">{seconds}</div>
          <div className="countdown-timer-label">Seconds</div>
        </div>
      </div>
    </div>
  );
}

export default CountdownTimer;