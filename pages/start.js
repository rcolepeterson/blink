import React, { useEffect, useState } from "react";
import RivalVideo from "../components/RivalVideo";
import Timer from "../components/Timer";
import Logo from "../components/Logo";
import Modal from "../components/modal";
import LeftBar from "../components/LeftBar";
import FireWorks from "../components/Fireworks";

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
      <div className="absolute top-0 left-0 w-full z-0">
        <FireWorks />
      </div>
      <Modal>
        <h5 className="text-center mt-4">How to Play</h5>
        <p className="text-lg py-6 text-center">
          Just position your face in the circle, blink to test it out, then
          click &apos;Start Staring Contest&apos; when you&apos;re ready to
          rock.
        </p>
      </Modal>
      <div className="p-6">
        <Logo />
      </div>
      <div className="flex flex-col items-center w-full">
        <RivalVideo onStarted={onBlinkStarted} onEnded={onBlinkEnded} />
        <div className="mt-8 w-full flex justify-center">
          <Timer doRun={startTimer} />
        </div>
        <LeftBar score={score} level={level} />
      </div>
    </div>
  );
};
export default Home;
