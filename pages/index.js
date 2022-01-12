import React, { useEffect, useState } from "react";
import RivalVideo from "../components/RivalVideo";
import Timer from "../components/Timer";
import LeftBar from "../components/LeftBar";

// this function returns a random number between 1000 and 10,000
function getRandomNumber() {
  return Math.floor(Math.random() * (10000 - 1000 + 1)) + 1000;
}

const Home = () => {
  const [startTimer, setStartTimer] = useState(false);
  const [score, setScore] = useState(0);
  const [ranking, setRanking] = useState(0);

  const onBlinkStarted = () => {
    setStartTimer(true);
    setRunning(true);
    setRunLevel(true);
  };

  const onBlinkEnded = () => {
    setStartTimer(false);
    setRunning(false);
    setRunLevel(false);
    setRanking(getRandomNumber());
  };

  const [running, setRunning] = useState(false);
  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setScore((prevTime) => prevTime + 1243);
      }, 1000);
    } else if (!running) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running]);

  const [runLevel, setRunLevel] = useState(false);
  const [level, setLevel] = useState(1);
  useEffect(() => {
    let interval;
    if (runLevel) {
      interval = setInterval(() => {
        setLevel((prevTime) => prevTime + 1);
      }, 10000);
    } else if (!running) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [runLevel]);

  return (
    <div>
      <div className="absolute p-10 top-0 left-0">
        <LeftBar score={score} level={level} ranking={ranking} />
      </div>
      <div className="flex flex-col items-center justify-center w-full h-screen mb-12">
        <RivalVideo onStarted={onBlinkStarted} onEnded={onBlinkEnded} />
        <div className="mt-8">
          <Timer doRun={startTimer} />
        </div>
      </div>
    </div>
  );
};
export default Home;
