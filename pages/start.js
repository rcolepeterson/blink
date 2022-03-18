import React, { useEffect, useState } from "react";
import RivalVideo from "../components/RivalVideo";
import Timer from "../components/Timer";
import Logo from "../components/Logo";
import Modal from "../components/modal";
import LeftBar from "../components/LeftBar";
import Ranking from "../components/Ranking";
import { useRouter } from "next/router";

// this function returns a random number between 1000 and 10,000
function getRandomNumber() {
  return Math.floor(Math.random() * (10000 - 1000 + 1)) + 1000;
}

const Home = () => {
  const router = useRouter();
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

  // this function coverts a number to the letter number
  const getLevel = (num) => {
    switch (num) {
      case 1:
        return "/level-one";
      case 2:
        return "/level-two";
      case 3:
        return "/level-three";
      case 4:
        return "/level-four";
      case 5:
        return "/level-five";
      case 6:
        return "/level-six";
      case 7:
        return "/level-seven";
      case 8:
        return "/level-eight";
      case 9:
        return "/level-nine";
      case 10:
        return "/level-ten";
      case 11:
        return "/level-eleven";
      case 12:
        return "/level-twelve";
      case 13:
        return "/level-thirteen";
      case 14:
        return "/level-fourteen";
      case 15:
        return "/level-fifteen";
      case 16:
        return "/level-sixteen";

      default:
        return "";
    }
  };

  const getlevel = () => {
    console.log("Hey colr Get the Level", level);

    return level;
  };

  const goToSharePage = () => {
    let pageName = getLevel(level);
    console.log();
    router.push(pageName);
  };

  return (
    <div>
      <Modal isLoaded={blinkloaded}>
        <h5 className="text-center mt-4 font-Raleway">How to Play</h5>
        <ul className="list-decimal px-8 pt-6">
          <li>Wearing glasses? Remove them.</li>
          <li>Position your face in the circle</li>
          <li>Blink to test it out then hit start!</li>
        </ul>
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
          onShareHandler={goToSharePage}
          getlevel={getlevel}
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
          <Ranking score={score} />
        </div>
      )}
    </div>
  );
};
export default Home;
