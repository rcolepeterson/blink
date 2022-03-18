import React from "react";
import Logo from "../components/Logo";
import { NextSeo } from "next-seo";

const Home = () => {
  const URL =
    "https://paint-ui-git-speaking-in-color-version-two-rcolepeterson.vercel.app/";
  const title = "this is the post title";
  const hashtags = "kitkat";
  const shareOnTwitter = () => {
    let l = `https://twitter.com/share?url=${URL}&text=${title}&hashtags=${hashtags}`;

    window.open(URL, "_blank");
  };

  function shareOnFacebook() {
    const navUrl = `https://www.facebook.com/sharer/sharer.php?u=${URL}`;
    window.open(navUrl, "_blank");
  }
  return (
    <div>
      <div className="p-6 pb-0">
        <Logo />
      </div>
      <div className="text-center w-full mx-auto max-w-sm bg-transparent flex flex-col justify-center items-center px-4 font-Raleway">
        <h1 className="text-xl pt-6">Congrats on getting to level 1</h1>
        <p className="pt-4 mb-6 text-lg">
          Take a break and share how long you lasted without blinking and how
          you stacked up against your fellow time wasters.
        </p>
      </div>
      <div className="mx-auto flex w-full justify-center p-4">
        <button
          className="inline-flex items-center justify-center w-[70px] h-[70px] md:w-[120px] md:h-[120px] mr-2 text-white bg-opacity-50 transition-colors duration-150 bg-black rounded-full focus:shadow-outline hover:bg-opacity-75"
          onClick={shareOnTwitter}
          id="twitter"
        >
          <img src="/iconmonstr-twitter-1.svg" alt="twitter" width="40px" />
        </button>
        <button
          className="inline-flex items-center justify-center w-[70px] h-[70px] md:w-[120px] md:h-[120px] mr-2 text-white bg-opacity-50 transition-colors duration-150 bg-black rounded-full focus:shadow-outline hover:bg-opacity-75"
          onClick={shareOnFacebook}
          id="twitter"
        >
          <img src="/iconmonstr-facebook-1.svg" alt="twitter" width="40px" />
        </button>
      </div>
    </div>
  );
};
export default Home;
