import React, { useRef, useState } from "react";
import Blink from "../components/Blink";
const PATH_TO_VIDEO = "/";
const VIDEO_WINNING = "WinningMessaging3.mp4";
const VIDEO_LOSING = "LoserMessaging_2.mp4";
const VIDEO_PLAYING = "Square4.mp4";
const RivalVideo = ({ onStarted, onEnded, onLoadedHandler }) => {
  const videoRef = useRef(null);
  const ref = useRef(0); //

  const onBlinkEndedRef = useRef(0); //
  onBlinkEndedRef.current = onEnded;

  const [gameStarted, setGameStarted] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const [videoPlaying, setVideoPlaying] = useState(
    PATH_TO_VIDEO + VIDEO_PLAYING
  );

  const onBlinkStarted = () => {
    console.log("on Blink Started");
    ref.current = 1;
    if (onStarted) {
      onStarted();
    }
    setShowVideo(true);
    videoRef.current.play();
  };

  const videoEnded = () => {
    console.log("videoEnded");
  };

  const onUserLoses = () => {
    console.log("onUserLoses");
    if (ref.current !== 0) {
      if (videoRef.current.currentTime > 10) {
        setVideoPlaying(PATH_TO_VIDEO + VIDEO_WINNING);
      } else {
        setVideoPlaying(PATH_TO_VIDEO + VIDEO_LOSING);
      }
      onBlinkEndedRef.current();
      ref.current = 0;
      setTimeout(() => {
        videoRef.current.play();
      }, 500);
    }
  };

  return (
    <div className="relative rival">
      <video
        src={videoPlaying}
        playsInline
        className="video-circle"
        ref={videoRef}
        style={{ visibility: !showVideo ? "hidden" : "visible" }}
        muted
        onEnded={() => videoEnded()}
      ></video>
      <div className="absolute top-0 flex justify-center w-full">
        <Blink
          startTrackingBlink={gameStarted}
          onBlinkStarted={onBlinkStarted}
          onUserLoses={onUserLoses}
          onLoadedHandler={onLoadedHandler}
        />
      </div>

      <button
        style={{ display: gameStarted ? "none" : "block" }}
        onClick={() => {
          setGameStarted(true);
        }}
        className="btn-lg bg-black rounded-full whitespace-nowrap font-bold no-animation text-sm absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-24 uppercase"
      >
        Start Staring contest
      </button>

      <button
        style={{
          display:
            videoPlaying === PATH_TO_VIDEO + VIDEO_LOSING ||
            videoPlaying === PATH_TO_VIDEO + VIDEO_WINNING
              ? "block"
              : "none",
        }}
        onClick={() => {
          window.location.reload();
        }}
        className="btn-lg bg-black rounded-full  font-bold no-animation text-sm absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-24 uppercase "
      >
        Try Again
      </button>
    </div>
  );
};

export default RivalVideo;
