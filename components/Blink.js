import React, { useEffect, useState } from "react";
import blinkdetection from "../components/blinkdetection.js";

const Blink = ({ startTrackingBlink, onBlinkStarted, showUser = true }) => {
  const requestRef = React.useRef();
  const videoRef = React.useRef();
  const running = React.useRef(0);
  const [showProfile, setShowProfile] = useState(true);
  const [initialized, setInitialized] = useState(false);

  // this function returns a random color value
  const getRandomColor = () => {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const predict = async () => {
    // let result = await blinkdetection.getBlinkPrediction();
    console.log("we are predicting");

    if (!running.current) {
      running.current = true;

      onBlinkStarted();
      setShowProfile(false);
    }

    // if (result) {
    //   //console.log("Blink Result: ", result.blink); // will return an object indicating the booleans for different states
    //   if (result.blink) {
    //     // setState((prev) => ({
    //     //   ...prev,
    //     //   myColor: getRandomColor(),
    //     //   blinkCount: prev.blinkCount + 1,
    //     // }));
    //     console.log("________________Did Blink: ", result.blink); // will return an object indicating the booleans for different states
    //   }
    // }
    // requestRef.current = requestAnimationFrame(predict);
    // predict();
  };

  // const predict = async () => {
  //   // console.log("predict", startTrackingBlink);
  //   let result = await blinkdetection.getBlinkPrediction();

  //   if (!running.current) {
  //     running.current = true;
  //     onBlinkStarted();
  //   }

  //   if (result) {
  //     console.log("Blink Result: ", result.blink); // will return an object indicating the booleans for different states
  //     if (result.blink) {
  //       // setState((prev) => ({
  //       //   ...prev,
  //       //   myColor: getRandomColor(),
  //       //   blinkCount: prev.blinkCount + 1,
  //       // }));
  //       console.log("Did Blink: ", result.blink); // will return an object indicating the booleans for different states
  //     }
  //   }
  //   if (startTrackingBlink) {
  //     console.log("requesting animation frame", startTrackingBlink);
  //     requestRef.current = requestAnimationFrame(predict);
  //   }
  // };

  const init = async () => {
    await blinkdetection.loadModel();
    await blinkdetection.setUpCamera(videoRef.current);
    console.log("we have initialized");
    setInitialized(true);
  };

  const startPrediction = () => {
    console.log("start prediction");
    predict();
  };

  const stopPrediction = () => {
    console.log("stop prediction", startTrackingBlink);
    // blinkdetection.stopPrediction();
    // cancelAnimationFrame(requestRef.current);
    // running.current = false;
  };

  useEffect(() => {
    console.log("we are watching start", startTrackingBlink);
    if (startTrackingBlink) {
      startPrediction();
    } else {
      stopPrediction();
    }
  }, [startTrackingBlink]);

  useEffect(() => {
    init();
  }, []);

  return (
    // <div className="flex flex-col items-center justify-center w-full">
    //   <div className="relative w-[500px] mr-[10px] mt-[80px]">
    //     <video className="video-circle" ref={videoRef} playsInline></video>
    //   </div>
    // </div>
    <div>
      {!initialized && (
        <h1 className=" text-orange-400 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
          loading
        </h1>
      )}
      <video
        style={{ display: showProfile ? "block" : "none" }}
        className="video-circle"
        ref={videoRef}
        playsInline
      ></video>
    </div>
  );
};

export default Blink;
