import React from "react";
import Social from "../components/Social";
import { NextSeo } from "next-seo";
import Logo from "../components/Logo";
const Element = () => {
  return (
    <>
      <NextSeo
        title="The Don't Blink Break | Level #11"
        canonical="https://blink-git-blink-dev-rcolepeterson.vercel.app/level-eleven/"
        openGraph={{
          url: "https://blink-git-blink-dev-rcolepeterson.vercel.app/level-eleven/",
          images: [
            {
              url: "https://blink-git-blink-dev-rcolepeterson.vercel.app/SocialImage_11.png",
              width: 748,
              height: 392,
              alt: "dont-blink-break-kitkat-level-eleven",
              type: "image/jpeg",
            },
          ],
        }}
      />
      <div className="p-6 pb-0 desktop-only">
        <Logo />
      </div>
      <Social
        level={"Level #11"}
        pagename={"level-eleven"}
        animalname={"owl"}
        headerImage={"/SocialImage_11.png"}
        headerImageDesktop={"/DesktopShare_11.png"}
      />
    </>
  );
};
export default Element;
