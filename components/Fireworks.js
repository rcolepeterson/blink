import React, { useRef, useEffect, useState, useCallback } from "react";
import dynamic from "next/dynamic";
const BurstComponent = dynamic(() => import("./Burst"), {
  ssr: false,
});

const FireWorks = () => {
  return (
    <div className="">
      <BurstComponent />
    </div>
  );
};

export default FireWorks;
