import React, { useState, useEffect } from 'react';
import './Countdown.css';

const CountdownTimer = () => {
  const [secondsLeft, setSecondsLeft] = useState(2 * 24 * 60 * 60);

  useEffect(() => {
    const timerId = setInterval(() => {
      setSecondsLeft(secondsLeft => secondsLeft - 1);
    }, 1000);

    return () => clearInterval(timerId);
  }, []);

  const days = Math.floor(secondsLeft / (24 * 60 * 60));
  const hours = Math.floor((secondsLeft % (24 * 60 * 60)) / 3600);
  const minutes = Math.floor((secondsLeft % 3600) / 60);
  const seconds = secondsLeft % 60;

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