import React, { useEffect, useState } from "react";
import Blink from "../components/Blink";
import RivalVideo from "../components/RivalVideo";
import AnimatedNumber from "react-animated-number";
import { useCountUp } from "react-countup";
import Timer from "../components/Timer";
import LeftBar from "../components/LeftBar";

const getRandomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const Home = () => {
  const [startBlink, setStartBlink] = useState(false);
  const [startTimer, setStartTimer] = useState(false);
  const [loader, setLoader] = useState(false);
  const [score, setScore] = useState(getRandomInt(10, 1000));
  const [gameStarted, setGameStarted] = useState(false);

  const time = new Date();
  time.setSeconds(time.getSeconds() + 4);
  const onExpire = () => {
    updateNumber();
    setStart(false);
  };

  const updateNumber = () => {
    setScore(getRandomInt(10, 1000));
  };

  const onBlinkStarted = () => {
    // setLoader(false);
    console.log("ok dude, lets start", startTimer);
    setStartTimer(true);
  };

  const onBlinkEnded = () => {
    // setLoader(false);
    console.log("ok dude, lets end", startTimer);
    setStartTimer(false);
  };

  return (
    <div>
      <div className="absolute p-10 top-0 left-0">
        <LeftBar />
      </div>
      <div className="flex flex-col items-center justify-center w-full h-screen mb-12">
        <RivalVideo onStarted={onBlinkStarted} onEnded={onBlinkEnded} />
        {/* <div className="absolute top-0">
          <Blink showUser={!gameStarted} />
        </div> */}
        <div className="mt-8">
          <Timer doRun={startTimer} />
        </div>
      </div>
    </div>
    // <div className="flex flex-col items-center justify-center w-full h-screen">
    //   {loader && <h1 className="absolute text-pink-600">LOADING</h1>}
    //   <AnimatedNumber
    //     value={Number(score)}
    //     style={{
    //       transition: "0.8s ease-out",
    //       fontSize: 58,
    //       fontWeight: 900,
    //     }}
    //     duration={1000}
    //     formatValue={(n) => n.toFixed(2)}
    //   />
    //   {/* <Blink start={startBlink} onBlinkStarted={onBlinkStarted} /> */}
    //   <nav className="flex justify-center p-4">
    //     <button
    //       className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    //       onClick={() => {
    //         setLoader(true);
    //         setStart(true);
    //         // updateNumber();
    //       }}
    //     >
    //       Start
    //     </button>
    //   </nav>
    //   <div>
    //     <div ref={countUpRef} />
    //     <button onClick={start}>Start</button>
    //     <button onClick={reset}>Reset</button>
    //     <button onClick={pauseResume}>Pause/Resume</button>
    //     <button onClick={() => update(2000)}>Update to 2000</button>
    //   </div>
    //   {/* <MyTimer
    //     expiryTimestamp={time}
    //     onExpire={onExpire}
    //     doStart={startTimer}
    //   /> */}
    // </div>
  );
};
export default Home;
