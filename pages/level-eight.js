import React from "react";
import Social from "../components/Social";
import { NextSeo } from "next-seo";
import Logo from "../components/Logo";
const Element = () => {
  return (
    <>
      <NextSeo
        title="The Don't Blink Break | Level #8"
        canonical="https://blink-git-blink-dev-rcolepeterson.vercel.app/level-eight/"
        openGraph={{
          url: "https://blink-git-blink-dev-rcolepeterson.vercel.app/level-eight/",
          images: [
            {
              url: "https://blink-git-blink-dev-rcolepeterson.vercel.app/SocialImage_8.png",
              width: 748,
              height: 392,
              alt: "dont-blink-break-kitkat-level-eight",
              type: "image/jpeg",
            },
          ],
        }}
      />
      <div className="p-6 pb-0 desktop-only">
        <Logo />
      </div>
      <Social
        level={"Level #8"}
        pagename={"level-eight"}
        animalname={"tiger"}
        headerImage={"/SocialImage_8.png"}
        headerImageDesktop={"/DesktopShare_8.png"}
      />
    </>
  );
};
export default Element;
