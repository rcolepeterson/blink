import blink from "./blinkdetection";

var raf;
export const blinkDontInit = async (cb, onLoaded) => {
  console.log("ok lets start");

  await blink.loadModel();
  const videoElement = document.getElementById("blinkVideo");

  console.log("ok lets start", videoElement);
  await blink.setUpCamera(videoElement);

  // let blinkIndicator = document.getElementById('blink-indicator');

  const predict = async () => {
    let result = await blink.getBlinkPrediction();
    onLoaded();
    if (result) {
      if (result.blink) {
        console.log("we are blinking");
        if (cb) {
          cb();
        }
      } else {
        // blinkIndicator.style.color = 'green';
      }
      if (result.longBlink) {
        // toggleMode();
      }
    }
    raf = requestAnimationFrame(predict);
  };
  predict();
};
