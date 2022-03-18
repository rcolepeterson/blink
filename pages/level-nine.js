import React from "react";
import Social from "../components/Social";
import { NextSeo } from "next-seo";
import Logo from "../components/Logo";
const Element = () => {
  return (
    <>
      <NextSeo
        title="The Don't Blink Break | Level #9"
        canonical="https://blink-git-blink-dev-rcolepeterson.vercel.app/level-nine/"
        openGraph={{
          url: "https://blink-git-blink-dev-rcolepeterson.vercel.app/level-nine/",
          images: [
            {
              url: "https://blink-git-blink-dev-rcolepeterson.vercel.app/SocialImage_9.png",
              width: 748,
              height: 392,
              alt: "dont-blink-break-kitkat-level-nine",
              type: "image/jpeg",
            },
          ],
        }}
      />
      <div className="p-6 pb-0 desktop-only">
        <Logo />
      </div>
      <Social
        level={"Level #9"}
        pagename={"level-nine"}
        animalname={"ostrich"}
        headerImage={"/SocialImage_9.png"}
        headerImageDesktop={"/DesktopShare_9.png"}
      />
    </>
  );
};
export default Element;
