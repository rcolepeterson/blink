// import React, { useState, useEffect } from "react";

// import { useElapsedTime } from "use-elapsed-time";

// const easing = (t, b, c, d) => {
//   return c * ((t = t / d - 1) * t * t + 1) + b;
// };

// const isPlaying = true;
// const start = 0; // count from
// const end = 3000; // count to
// const duration = 13; // for 3 seconds
// const options = { isPlaying, duration };

// function msToTime(duration) {
//   var milliseconds = parseInt((duration % 1000) / 100),
//     seconds = Math.floor((duration / 1000) % 60),
//     minutes = Math.floor((duration / (1000 * 60)) % 60),
//     hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

//   hours = hours < 10 ? "0" + hours : hours;
//   minutes = minutes < 10 ? "0" + minutes : minutes;
//   seconds = seconds < 10 ? "0" + seconds : seconds;

//   return hours + ":" + minutes + ":" + seconds + "." + milliseconds;
// }

// const Clock = ({ dispatch, inProgress, ticksElapsed }) => {
//   React.useEffect(() => {
//     const progressTimer = setInterval(function () {
//       inProgress && dispatch({ type: "CLOCK_RUN" });
//     }, 500);
//     return () =>
//       //inprogress is stale so when it WAS true
//       //  it must now be false for the cleanup to
//       //  be called
//       inProgress && clearInterval(progressTimer);
//   }, [dispatch, inProgress]);

//   return <h1>{ticksElapsed}</h1>;
// };

// const CountUpComponent = () => {
//   const { elapsedTime } = useElapsedTime(options);
//   const currentValue = easing(elapsedTime, start, end - start, duration);

//   return (
//     <div style={{ fontSize: 76 }}>{msToTime(Math.round(currentValue))}</div>
//   );
// };

// function App() {
//   const [key, setKey] = useState("0");

//   useEffect(() => {
//     document.addEventListener("keyup", () => {
//       setKey(new Date().getTime());
//     });
//   }, []);

//   return (
//     <div style={{ textAlign: "center" }}>
//       <CountUpComponent key={key} />
//     </div>
//   );
// }

// export default App;

import React, { useState, useEffect } from "react";

const Stopwatch = ({ doRun = false, onUpdate }) => {
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
    <div className="stopwatch">
      <div className="numbers font-extrabold text-8xl mt-2">
        <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
        <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
        <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
      </div>
      {/* <div className="buttons">
        <button onClick={() => setRunning(true)}>Start</button>
        <button onClick={() => setRunning(false)}>Stop</button>
        <button onClick={() => setTime(0)}>Reset</button>
      </div> */}
    </div>
  );
};

export default Stopwatch;
