import React from "react";
import Social from "../components/Social";
import { NextSeo } from "next-seo";
import Logo from "../components/Logo";
const Element = () => {
  return (
    <>
      <NextSeo
        title="The Don't Blink Break | Level #16"
        canonical="https://blink-git-blink-dev-rcolepeterson.vercel.app/level-sixteen/"
        openGraph={{
          url: "https://blink-git-blink-dev-rcolepeterson.vercel.app/level-sixteen/",
          images: [
            {
              url: "https://blink-git-blink-dev-rcolepeterson.vercel.app/SocialImage_16.png",
              width: 748,
              height: 392,
              alt: "dont-blink-break-kitkat-level-sixteen",
              type: "image/jpeg",
            },
          ],
        }}
      />
      <div className="p-6 pb-0 desktop-only">
        <Logo />
      </div>
      <Social
        level={"Level #16"}
        pagename={"level-sixteen"}
        animalname={"elk"}
        headerImage={"/SocialImage_16.png"}
        headerImageDesktop={"/DesktopShare_16.png"}
      />
    </>
  );
};
export default Element;
