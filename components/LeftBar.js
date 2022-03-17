import FireWorks from "./Fireworks";
import React from "react";
const LeftBar = ({ score = "2,390,927", level = "1", ranking = "0" }) => {
  const logo = "/logo.png";

  return (
    <div className="flex pt-4 md:pt-6 gap-16 numbers">
      <div id="burst-target-level" className="burst-target-level">
        <h5 className="text-2xl">Level:</h5>
        <h2 className="text-center text-2xl">{level}</h2>
        {/* <div className="">
          <FireWorks level={level} />
        </div> */}
      </div>

      <div>
        <h5 className="text-2xl">Current Score:</h5>
        <h2 className="text-center text-2xl">
          {score.toLocaleString("en-US")}
        </h2>
      </div>
    </div>
  );
};

export default LeftBar;
