import React, { useRef } from "react";
const PATH_TO_VIDEO = "/";
// d00a2c
const RivalVideo = () => {
  const videoRef = useRef(null);
  return (
    <div>
      {/* <video ref={videoRef} playsInline></video> */}
      <div className="relative w-[500px] h-[500px]">
        <div class="rc">
          {/* <div className="rounded-full border-[18px] border-[#d00a2c] w-[550px] h-[550px]">
            <div className="rounded-full border-8 border-white w-[516px] h-[516px]"> */}
          <video
            src={PATH_TO_VIDEO + "StaringContestants_v1d.mp4"}
            class="video-circle"
            width="500"
            height="500"
            autoPlay
            muted
            loop
          ></video>
          {/* </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default RivalVideo;
