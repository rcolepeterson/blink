import React, { useRef, useState } from "react";
import Blink from "../components/Blink";
const PATH_TO_VIDEO = "/";
const VIDEO_WINNING = "WinningMessaging_2.mp4";
const VIDEO_LOSING = "LosingMessaging_2.mp4";
const VIDEO_PLAYING = "StaringContestants_v1d.mp4";
// d00a2c
const RivalVideo = () => {
  const videoRef = useRef(null);
  const [gameStarted, setGameStarted] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const [videoPlaying, setVideoPlaying] = useState(
    PATH_TO_VIDEO + VIDEO_PLAYING
  );

  const onBlinkStarted = () => {
    console.log("onBlinkStarted cole");
    setShowVideo(true);
    videoRef.current.play();
  };

  const videoEnded = () => {
    console.log("videoEnded lets update");
    setVideoPlaying(PATH_TO_VIDEO + VIDEO_WINNING);

    // var thePromise = videoRef.current.play();

    // if (thePromise != undefined) {
    //   thePromise.then(function (_) {
    //     // item.pause();
    //     // item.currentTime = 0;
    //   });
    // }

    setTimeout(() => {
      videoRef.current.play();
    }, 500);
  };

  return (
    <div className="relative rival">
      <div className="rc">
        <div id="blackcircle">
          <div id="whitecircle">
            <video
              src={videoPlaying}
              className="video-circle"
              width="500"
              ref={videoRef}
              height="500"
              style={{ visibility: !showVideo ? "hidden" : "visible" }}
              muted
              onEnded={() => videoEnded()}
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
