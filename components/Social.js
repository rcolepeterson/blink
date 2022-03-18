import React from "react";
import Logo from "../components/Logo";
import Router from "next/router";
import Image from "next/image";
import { NextSeo } from "next-seo";
import Link from "next/link";
import SEO from "../next-seo.config";

const Social = ({
  level = "Level #1",
  pagename = "level-one",
  animalname = "cat",
  headerImage = "/dont-blink-kit-kat-level-eleven.png",
  headerImageDesktop = "/dont-blink-kit-kat-level-eleven.png",
}) => {
  const URL = SEO.openGraph.url + "/" + pagename;
  const title = `Well, that was a successful waste of time. @kitkat just helped me take a break for a staring contest. I was eventually defeated by this ${animalname}! 👁 👁 😵‍💫 `;
  const hashtags = "blinkbreak,kitkat,staringcontest";
  const shareOnTwitter = () => {
    let l = `https://twitter.com/share?url=${URL}&text=${title}&hashtags=${hashtags}`;
    window.open(l, "_blank");
  };

  function shareOnFacebook() {
    const navUrl = `https://www.facebook.com/sharer/sharer.php?u=${URL}`;
    window.open(navUrl, "_blank");
  }
  return (
    <div className="max-w-sm w-full mx-auto">
      <div className="w-full">
        <Link href={"/"}>
          <Image
            src={headerImage}
            layout="responsive"
            objectFit="contain"
            alt="dont blink kit kat level eleven"
            width={748}
            height={392}
          />
        </Link>
        <Link href={"/"}>
          <Image
            src={headerImageDesktop}
            layout="responsive"
            objectFit="contain"
            alt="dont blink kit kat level eleven"
            width={748}
            height={392}
          />
        </Link>
      </div>
      <div className="text-center w-full mx-auto  bg-transparent flex flex-col justify-center items-center px-4 ">
        <p className="text-center w-full text-xl py-4">
          Congratulations on reaching:
        </p>
        <div className="flex w-full justify-center items-center gap-4">
          <h3 className="text-center numbers">{level}</h3>
        </div>
        <p className="text-center w-full text-base my-5 font-Raleway">
          Take a break and share how long you lasted without blinking and how
          you stacked up against your fellow time wasters.
        </p>
      </div>

      <div className="mx-auto flex w-full justify-center px-4 pb-8">
        <button
          className="inline-flex items-center justify-center w-[70px] h-[70px]  mr-2 text-white bg-opacity-50 transition-colors duration-150 bg-black rounded-full focus:shadow-outline hover:bg-opacity-75"
          onClick={shareOnTwitter}
          id="twitter"
        >
          <img src="/iconmonstr-twitter-1.svg" alt="twitter" width="40px" />
        </button>
        <button
          className="inline-flex items-center justify-center w-[70px] h-[70px] mr-2 text-white bg-opacity-50 transition-colors duration-150 bg-black rounded-full focus:shadow-outline hover:bg-opacity-75"
          onClick={shareOnFacebook}
          id="twitter"
        >
          <img src="/iconmonstr-facebook-1.svg" alt="twitter" width="40px" />
        </button>
      </div>
      <Link href={"/start"}>
        <div className="flex w-full justify-center">
          <a className="btn-md bg-black rounded-full  no-animation text-sm uppercase flex gap-4 justify-center items-center ">
            Play Blink Break
          </a>
        </div>
      </Link>
    </div>
  );
};
export default Social;
