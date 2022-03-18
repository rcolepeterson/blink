import React, { useEffect, useState } from "react";
import { blinkDontInit } from "../components/blinkDont";

const Blink = ({
  startTrackingBlink,
  onBlinkStarted,
  onUserLoses,
  onLoadedHandler,
  reset,
}) => {
  const videoRef = React.useRef();
  const running = React.useRef(0);
  const initializedRef = React.useRef(false);
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

  const dispatchLoaded = () => {
    onLoadedHandler();
  };

  const onLoaded = () => {
    if (!initializedRef.current) {
      console.log("we are initialized");
      dispatchLoaded(true);
      setInitialized(true);
      initializedRef.current = true;
    }
  };

  const init = async () => {
    blinkDontInit(onUserBlinks, onLoaded);
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

  useEffect(() => {
    setShowProfile(true);
  }, [reset]);

  return (
    <div className="flex mx-auto  md:p-0 overflow-hidden relative">
      {!initialized && (
        <h3 className=" text-orange-400 w-full text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          loading ...
        </h3>
      )}
      {userBlinked && !running.current && (
        <h3 className=" text-white w-full text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ml-2 uppercase">
          You blinked!
        </h3>
      )}
      <video
        style={{ opacity: showProfile ? "1" : "0" }}
        className="video-circle"
        id="blinkVideo"
        ref={videoRef}
        playsInline
        muted
      ></video>
    </div>
  );
};

export default Blink;
