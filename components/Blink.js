import React, { useEffect, useState } from "react";
import { blinkDontInit } from "../components/blinkDont";

const Blink = ({
  startTrackingBlink,
  onBlinkStarted,
  showUser = true,
  onUserLoses,
}) => {
  const requestRef = React.useRef();
  const videoRef = React.useRef();
  const running = React.useRef(0);
  const [showProfile, setShowProfile] = useState(true);
  const [initialized, setInitialized] = useState(false);
  const [userBlinked, setUserBlinked] = useState(false);

  const predict = async () => {
    // let result = await blinkdetection.getBlinkPrediction();
    console.log("we are predicting");

    if (!running.current) {
      running.current = true;

      onBlinkStarted();
      setShowProfile(false);
    }
  };

  const onUserBlinks = () => {
    setUserBlinked(true);
    setTimeout(() => {
      setUserBlinked(false);
    }, 500);
    onUserLoses();
  };
  const onLoaded = () => {
    console.log("we have initialized");
    setInitialized(true);
  };

  const init = async () => {
    blinkDontInit(onUserBlinks, onLoaded);
    // await blinkdetection.loadModel();
    // await blinkdetection.setUpCamera(videoRef.current);
  };

  const startPrediction = () => {
    console.log("start prediction");
    predict();
  };

  const stopPrediction = () => {
    console.log("stop prediction", startTrackingBlink);
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
    <div>
      {!initialized && (
        <h1 className=" text-orange-400 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
          loading
        </h1>
      )}
      {userBlinked && (
        <h1 className=" text-orange-400 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
          You blinked!
        </h1>
      )}
      <video
        style={{ opacity: showProfile ? "1" : "0" }}
        className="video-circle"
        id="blinkVideo"
        ref={videoRef}
        playsInline
      ></video>
    </div>
  );
};

export default Blink;
