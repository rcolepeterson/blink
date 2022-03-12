import React, { useEffect, useState } from "react";
import RivalVideo from "../components/RivalVideo";
import Timer from "../components/Timer";
// import LeftBar from "../components/LeftBar";
import Logo from "../components/Logo";
import DaisyModal from "../components/DaisyModal";
import Link from "next/link";

// // this function returns a random number between 1000 and 10,000
// function getRandomNumber() {
//   return Math.floor(Math.random() * (10000 - 1000 + 1)) + 1000;
// }

const Home = () => {
  //   const [startTimer, setStartTimer] = useState(false);
  //   const [score, setScore] = useState(0);
  //   const [ranking, setRanking] = useState(0);

  //   const onBlinkStarted = () => {
  //     setStartTimer(true);
  //     setRunning(true);
  //     setRunLevel(true);
  //   };

  //   const onBlinkEnded = () => {
  //     setStartTimer(false);
  //     setRunning(false);
  //     setRunLevel(false);
  //     setRanking(getRandomNumber());
  //   };

  //   const [running, setRunning] = useState(false);
  //   useEffect(() => {
  //     let interval;
  //     if (running) {
  //       interval = setInterval(() => {
  //         setScore((prevTime) => prevTime + 1243);
  //       }, 1000);
  //     } else if (!running) {
  //       clearInterval(interval);
  //     }
  //     return () => clearInterval(interval);
  //   }, [running]);

  //   const [runLevel, setRunLevel] = useState(false);
  //   const [level, setLevel] = useState(1);
  //   useEffect(() => {
  //     let interval;
  //     if (runLevel) {
  //       interval = setInterval(() => {
  //         setLevel((prevTime) => prevTime + 1);
  //       }, 10000);
  //     } else if (!running) {
  //       clearInterval(interval);
  //     }
  //     return () => clearInterval(interval);
  //   }, [runLevel]);

  return (
    <div>
      <div className="p-6">
        <Logo />
      </div>
      <div className="text-center w-full mx-auto max-w-sm">
        <div className="w-full flex justify-center mb-6">
          <div className="rounded-full w-10 h-10 p-16 bg-black bg-opacity-75"></div>
        </div>
        <div className="font-myfont shadRed">
          <h1 className="uppercase">The Don&apos;t</h1>
          <h1 className="uppercase -mt-3">Blink Break</h1>
        </div>
        <p className="text-xl pt-6 shadRed">
          Introducing the World’s first International Staring Contest.
        </p>
        <p className="pt-4">
          Take a break in your day to test your will. See how long you can last
          without blinking and how you stack up against your fellow time
          wasters.
        </p>
        <Link href="/start">
          <a className="btn rounded-full bg-opacity-80 bg-black mt-10">
            Get started
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 ml-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
        </Link>
      </div>
    </div>
  );
};
export default Home;
