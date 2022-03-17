import React, { useRef, useEffect, useState } from "react";
import mojs from "@mojs/core"; // Currently there is a bug importing from npm, using external cdn version instead for now

// Declaration of the burst object
const burstObj = {
  className: "BurstExample",
  radius: { 0: 300 },
  count: 10,
  top: 0,
  left: 0,
  duration: 2000,
  children: {
    shape: ["circle", "polygon"],
    fill: ["#fff", "#eee", "#ddd", "#FC46AD", "#F64040"],
    angle: { 0: 10 },
    // rand string - generates random value for every child rand( min, max )
    degreeShift: "rand(-360, 360)",
    // stagger string( start, step ) for every child
    delay: "stagger(0, 25)",

    isSwirl: true, // Creates a swirl
    swirlSize: 10, // defines amplitude of the sine
    swirlFrequency: "rand( 3, 6 )", // defines frequency of the sine
    pathScale: "rand( .1, 1 )", // defines how much the total path length should be scaled
    direction: "rand( 1, -1 )", // direction of the sine could be 1 or -1
  },
};

// Create a burst object pooling array
// This is so that if the burst is not yet finisched animating,
// it want stop and replay. Instead we choose the next object in the pool array.
// This is a common technique in game development to prevent triggering garbage collection
// by contantly creating new objects instead of reusing already defined ones.
// You usually only need two object to prevent the first one to stop playing,
// but I asume you as a developer just tried to click as fast as you could,
// to see if it would breake, so I added 6 objects just in case ;)
// This will create a lot of DOM elements, so if you gonna have this effect on your site,
// make sure you only have one instance of this object pool, and refere to that all the time.
// That's why I have declared it outside the React Function, to be able to get the same
// buttonBurstsPool reference in all instances of <Button /> usage throughout the site.
// Maybe moving this array to a React context would also work fine?
const buttonBurstsPool = [
  new mojs.Burst(burstObj),
  new mojs.Burst(burstObj),
  new mojs.Burst(burstObj),
  new mojs.Burst(burstObj),
  new mojs.Burst(burstObj),
  new mojs.Burst(burstObj),
];

let burstIndex = 0;

const Button = ({ level = 0, ...props }) => {
  React.useEffect(() => {
    console.log("we should burst");
    doBurst();
  }, [level]);

  // this function returns the position x and y of a html element
  const getPositionXY = (el) => {
    return {
      cx: el.getBoundingClientRect().left,
      cy: el.getBoundingClientRect().top,
    };
  };

  const doBurst = () => {
    let { cx, cy } = getPositionXY(
      document.querySelector("#burst-target-level")
    );
    buttonBurstsPool[burstIndex]
      .tune({ x: cx + 40, y: cy })
      .generate()
      .replay();
    burstIndex = burstIndex >= buttonBurstsPool.length - 1 ? 0 : burstIndex + 1;
  };

  return (
    <div>
      {/* <button
          className="button"
          onClick={(e) => {
            doBurst(e);
          }}
        >
          Hi Shawn
        </button> */}
    </div>
  );
};

export default Button;

//https://codesandbox.io/s/mojs-react-example-kbikb?file=/src/MojsExample.js
