import React, { useEffect, useState } from "react";
import blinkdetection from "../components/blinkdetection.js";

const Blink = ({ start, onBlinkStarted }) => {
  const requestRef = React.useRef();
  const videoRef = React.useRef();
  const running = React.useRef(0);

  // this function returns a random color value
  const getRandomColor = () => {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  // const predict = async () => {
  //   let result = await blinkdetection.getBlinkPrediction();
  //   console.log("we are predicting");

  //   if (!running.current) {
  //     running.current = true;
  //     onBlinkStarted();
  //   }

  //   if (result) {
  //     // console.log("Blink Result: ", result.blink); // will return an object indicating the booleans for different states
  //     if (result.blink) {
  //       // setState((prev) => ({
  //       //   ...prev,
  //       //   myColor: getRandomColor(),
  //       //   blinkCount: prev.blinkCount + 1,
  //       // }));
  //       console.log("Did Blink: ", result.blink); // will return an object indicating the booleans for different states
  //     }
  //   }
  //   requestRef.current = requestAnimationFrame(predict);
  // };

  const predict = async () => {
    console.log("predict", start);
    let result = await blinkdetection.getBlinkPrediction();

    console.log("lets go", start);
    if (!running.current) {
      running.current = true;
      onBlinkStarted();
    }
    console.log("lets go 2", start);
    if (result) {
      // console.log("Blink Result: ", result.blink); // will return an object indicating the booleans for different states
      if (result.blink) {
        // setState((prev) => ({
        //   ...prev,
        //   myColor: getRandomColor(),
        //   blinkCount: prev.blinkCount + 1,
        // }));
        console.log("Did Blink: ", result.blink); // will return an object indicating the booleans for different states
      }
    }
    if (start) {
      console.log("requesting animation frame", start);
      requestRef.current = requestAnimationFrame(predict);
    }
  };

  const init = async () => {
    await blinkdetection.loadModel();
    await blinkdetection.setUpCamera(videoRef.current);
    console.log("we have initialized");
  };

  const startPrediction = () => {
    console.log("start prediction");
    predict();
  };

  const stopPrediction = () => {
    console.log("stop prediction", start);
    // blinkdetection.stopPrediction();
    // cancelAnimationFrame(requestRef.current);
    // running.current = false;
  };

  useEffect(() => {
    console.log("we are watching start", start);
    if (start) {
      startPrediction();
    } else {
      stopPrediction();
    }
  }, [start]);

  useEffect(() => {
    init();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div>
        <div className="flex flex-col items-center justify-center w-20 h-20">
          <h4>BLINK</h4>
        </div>
      </div>
      {/* <video ref={videoRef} playsInline></video> */}
      <div className="relative w-[500px]">
        <video
          className="rounded-full border-8  border-red-600 shadow-md"
          ref={videoRef}
          playsInline
        ></video>
      </div>
    </div>
  );
};

export default Blink;
