import React from "react";
import Social from "../components/Social";
import { NextSeo } from "next-seo";
import Logo from "../components/Logo";
const Element = () => {
  return (
    <>
      <NextSeo
        title="The Don't Blink Break | Level #14"
        canonical="https://blink-git-blink-dev-rcolepeterson.vercel.app/level-fourteen/"
        openGraph={{
          url: "https://blink-git-blink-dev-rcolepeterson.vercel.app/level-fourteen/",
          images: [
            {
              url: "https://blink-git-blink-dev-rcolepeterson.vercel.app/SocialImage_14.png",
              width: 748,
              height: 392,
              alt: "dont-blink-break-kitkat-level-fourteen",
              type: "image/jpeg",
            },
          ],
        }}
      />
      <div className="p-6 pb-0 desktop-only">
        <Logo />
      </div>
      <Social
        level={"Level #14"}
        pagename={"level-fourteen"}
        animalname={"turtle"}
        headerImage={"/SocialImage_14.png"}
        headerImageDesktop={"/DesktopShare_14.png"}
      />
    </>
  );
};
export default Element;
