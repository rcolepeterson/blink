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
        className="btn-md bg-black rounded-full whitespace-nowrap font-bold no-animation text-sm absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-24 uppercase"
      >
        Start Staring contest
      </button>
      <div className="flex justify-between w-full absolute top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-2/2">
        <button
          style={{
            display:
              videoPlaying === PATH_TO_VIDEO + VIDEO_LOSING ||
              videoPlaying === PATH_TO_VIDEO + VIDEO_WINNING
                ? "flex"
                : "none",
          }}
          onClick={() => {
            window.location.reload();
          }}
          className="btn-md bg-black rounded-full  font-bold no-animation text-sm uppercase flex gap-4 justify-center items-center "
        >
          Retry
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
            />
          </svg>
        </button>
        <button
          style={{
            display:
              videoPlaying === PATH_TO_VIDEO + VIDEO_LOSING ||
              videoPlaying === PATH_TO_VIDEO + VIDEO_WINNING
                ? "flex"
                : "none",
          }}
          onClick={() => {
            window.location.reload();
          }}
          className="btn-md bg-black rounded-full  font-bold no-animation text-sm uppercase flex gap-4 justify-center items-center"
        >
          Share
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default RivalVideo;
