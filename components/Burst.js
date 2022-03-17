// components/terminal-component
import mojs from "@mojs/core";
import React, { useRef, useState, useEffect, useCallback } from "react";

function TerminalComponent({ play, duration = 1000 }) {
  const animDom = useRef();
  const bouncyCircle = useRef();
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    // Prevent multiple instansiations on hot reloads
    if (bouncyCircle.current) return;

    // Assign a Shape animation to a ref
    // bouncyCircle.current = new mojs.Shape({
    //   parent: animDom.current,
    //   shape: "circle",
    //   fill: { "#FC46AD": "#F64040" },
    //   radius: { 50: 200 },
    //   duration: duration,
    //   isShowStart: true,
    //   easing: "elastic.inout",
    //   onStart() {
    //     setIsAnimating(true);
    //   },
    //   onComplete() {
    //     setIsAnimating(false);
    //   },
    // });
    bouncyCircle.current = new mojs.Burst({
      parent: animDom.current,
      shape: "polygon",
      fill: { "#FC46AD": "#F64040" },
      rotate: { 360: 0 },
      radius: { 0: 100 },
      count: 10,
      duration: duration,
      isShowStart: true,
      delay: "stagger(0, 100)",
      easing: "elastic.inout",
      onStart() {
        setIsAnimating(true);
      },
      onComplete() {
        setIsAnimating(false);
      },
    });
  });

  // Update the animation values when the prop changes
  useEffect(() => {
    if (!bouncyCircle.current) return;
    bouncyCircle.current.tune({ duration: duration });
    isOpen
      ? bouncyCircle.current.replayBackward()
      : bouncyCircle.current.replay();
    setIsOpen(!isOpen);
  }, [duration]);

  const clickHandler = useCallback(() => {
    // If the "modal" is open, play the animation backwards, else play it forwards
    isOpen ? bouncyCircle.current.playBackward() : bouncyCircle.current.play();
    setIsOpen(!isOpen);
  }, [isOpen]);

  return (
    <div ref={animDom} className="MojsExample">
      <div className="content">
        <h1>MoJS React Example</h1>
        <p>Using hooks</p>
        <button className="button" onClick={clickHandler}>
          {isAnimating && isOpen ? "Animating" : isOpen ? "Close" : "Open"}
        </button>
      </div>
    </div>
  );
}

export default TerminalComponent;
