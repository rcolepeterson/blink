import React, { useRef, useEffect, useState, useCallback } from "react";
import dynamic from "next/dynamic";
const BurstComponent = dynamic(() => import("./BurstButton"), {
  ssr: false,
});

const FireWorks = ({ level }) => {
  return <BurstComponent level={level} />;
};

export default FireWorks;

//https://www.kirilv.com/canvas-confetti/
