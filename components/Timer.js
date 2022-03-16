import React, { useState, useEffect } from "react";

const Stopwatch = ({ doRun = false }) => {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(doRun);
  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else if (!running) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running]);

  useEffect(() => {
    setRunning(doRun);
  }, [doRun]);

  return (
    <div className="stopwatch w-full flex justify-center">
      <div className="numbers font-extrabold text-5xl md:text-7xl w-[250px] flex justify-center">
        <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
        <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
        <span className="">{("0" + ((time / 10) % 100)).slice(-2)}</span>
      </div>
    </div>
  );
};

export default Stopwatch;
