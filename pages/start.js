import React, { useEffect, useState } from "react";
import RivalVideo from "../components/RivalVideo";
import Timer from "../components/Timer";
import Logo from "../components/Logo";
import Modal from "../components/modal";
import LeftBar from "../components/LeftBar";

// this function returns a random number between 1000 and 10,000
function getRandomNumber() {
  return Math.floor(Math.random() * (10000 - 1000 + 1)) + 1000;
}

const Home = () => {
  const [startTimer, setStartTimer] = useState(false);
  const [score, setScore] = useState(0);
  const [ranking, setRanking] = useState(0);
  const [blinkloaded, setBlinkLoaded] = useState(false);
  const [ended, setEnded] = useState(false);

  const onBlinkStarted = () => {
    setStartTimer(true);
    setRunning(true);
    setRunLevel(true);
    setEnded(false);
  };

  const onBlinkEnded = () => {
    console.log("onBlinkEnded");
    setStartTimer(false);
    setRunning(false);
    setRunLevel(false);
    setRanking(getRandomNumber());
    setEnded(true);
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

  const onLoadedHandler = () => {
    console.log("OMG we have loaded", blinkloaded);
    setBlinkLoaded(true);
  };

  const resetEverything = () => {
    console.log("lets rest everything");
    setStartTimer(false);
    setScore(0);
    setRunLevel(false);
    setBlinkLoaded(true);
    setEnded(false);
    setLevel(1);
    // onBlinkStarted();
  };

  return (
    <div>
      <Modal isLoaded={blinkloaded}>
        <h5 className="text-center mt-4 font-Raleway">How to Play</h5>
        <p className="text-lg py-6 text-center font-Raleway">
          Just position your face in the circle, blink to test it out, then
          click &apos;Start Staring Contest&apos; when you&apos;re ready to
          rock.
        </p>
      </Modal>
      <div className="p-6 pb-0">
        <Logo />
      </div>
      <div id="burst-target-level-holder" className=""></div>
      <div className="flex flex-col items-center w-full">
        <RivalVideo
          onStarted={onBlinkStarted}
          onEnded={onBlinkEnded}
          onLoadedHandler={onLoadedHandler}
          retry={resetEverything}
        />
        {!ended && (
          <div className="mt-6 md:mt-8 w-full flex justify-center">
            <Timer doRun={startTimer} />
          </div>
        )}
        {!ended && <LeftBar score={score} level={level} />}
      </div>
      {ended && (
        <div className="mt-6">
          <p className="text-center w-full text-lg mb-2">
            {" "}
            Your Global Ranking:
          </p>
          <h3 className="text-center w-full numbers mb-2">{ranking}</h3>
          <p className="text-center w-full uppercase text-xl mb-1"> Out of</p>
          <h4 className="text-center w-full numbers">300,345</h4>
        </div>
      )}
    </div>
  );
};
export default Home;
