import { useState, useEffect } from "react";

export const useCountdownTimer = (initialMinutes, stop) => {
  const [minutes, setMinutes] = useState(initialMinutes);
  const [seconds, setSeconds] = useState(initialMinutes * 60);

  useEffect(() => {
    // Update the timer every second
    const timerInterval = setInterval(() => {
      setSeconds((prevSeconds) => {
        if (prevSeconds > 0) {
          return prevSeconds - 1;
        } else {
          clearInterval(timerInterval);
          return 0;
        }
      });
    }, 1000);

    // Cleanup the interval on component unmount
    return () => {
      clearInterval(timerInterval);
    };
  }, [stop]);

  // Calculate minutes and remaining seconds
  const remainingMinutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  return { remainingMinutes, remainingSeconds };
};
