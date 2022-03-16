import React from "react";
import Logo from "../components/Logo";
import Link from "next/link";
import Image from "next/image";

const Home = () => {
  return (
    <div>
      <div className="p-6 pb-0">
        <Logo />
      </div>
      <div className="text-center w-full mx-auto max-w-sm bg-transparent flex flex-col justify-center items-center px-4 font-Raleway">
        <div className="rounded-full relative w-[200px] ">
          <Image
            src="/dontblink_poc.png"
            alt="dont blink"
            layout="responsive"
            width={382}
            height={440}
          />
        </div>
        {/* <div className="font-myfont shadRed">
          <h1 className="uppercase">The Don&apos;t</h1>
          <h1 className="uppercase -mt-3">Blink Break</h1>
        </div> */}
        <p className="text-xl pt-6">
          Introducing the World’s first International Staring Contest.
        </p>
        <p className="pt-4 mb-6 text-sm">
          Take a break in your day to test your will. See how long you can last
          without blinking and how you stack up against your fellow time
          wasters.
        </p>
        <Link href="/start">
          <a className="btn rounded-full bg-opacity-80 bg-black">
            Get started
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 ml-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
        </Link>
      </div>
    </div>
  );
};
export default Home;
