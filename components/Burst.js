// components/terminal-component
import mojs from "@mojs/core";
import React from "react";

function TerminalComponent({ play }) {
  React.useEffect(() => {
    console.log("ok dude");
    const burst = new mojs.Burst({
      radius: { 0: 600 },
      count: 10,
      children: {
        shape: "polygon",
        points: 5,
        fill: { cyan: "yellow" },
        rotate: { 360: 0 },
        duration: 500,
        delay: "stagger( rand(0, 200) )",
      },
    });
  }, [play]);

  // Add logic around `term`
  return <></>;
}

export default TerminalComponent;
