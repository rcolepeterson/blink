import React, { useRef, useState } from "react";
import Blink from "../components/Blink";
const PATH_TO_VIDEO = "/";
// d00a2c
const RivalVideo = () => {
  const videoRef = useRef(null);
  const [gameStarted, setGameStarted] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

  const onBlinkStarted = () => {
    console.log("onBlinkStarted");
    setShowVideo(true);
    videoRef.current.play();
  };
  return (
    <div className="relative rival">
      <div className="rc">
        <div id="blackcircle">
          <div id="whitecircle">
            <video
              src={PATH_TO_VIDEO + "StaringContestants_v1d.mp4"}
              className="video-circle"
              width="500"
              ref={videoRef}
              height="500"
              style={{ visibility: !showVideo ? "hidden" : "visible" }}
              muted
              loop
            ></video>
            <div className="absolute top-0">
              <Blink
                startTrackingBlink={gameStarted}
                onBlinkStarted={onBlinkStarted}
              />
            </div>

            <button
              style={{ display: gameStarted ? "none" : "block" }}
              onClick={() => {
                setGameStarted(true);
              }}
              className="btn-lg bg-black no-animation text-2xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-40 "
            >
              Start Staring contest
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RivalVideo;
