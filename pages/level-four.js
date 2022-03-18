import React from "react";
import Social from "../components/Social";
import { NextSeo } from "next-seo";
import Logo from "../components/Logo";
const Element = () => {
  const pageName = "level-one";
  return (
    <>
      <NextSeo
        title="The Don't Blink Break | Level #4"
        canonical="https://blink-git-blink-dev-rcolepeterson.vercel.app/level-four/"
        openGraph={{
          url: "https://blink-git-blink-dev-rcolepeterson.vercel.app/level-four/",
          images: [
            {
              url: "https://blink-git-blink-dev-rcolepeterson.vercel.app/SocialImage_4.png",
              width: 748,
              height: 392,
              alt: "dont-blink-break-kitkat-level-four",
              type: "image/jpeg",
            },
          ],
        }}
      />
      <div className="p-6 pb-0 desktop-only">
        <Logo />
      </div>
      <Social
        level={"Level #4"}
        pagename={"level-four"}
        animalname={"cat"}
        headerImage={"/SocialImage_4.png"}
        headerImageDesktop={"/DesktopShare_4.png"}
      />
    </>
  );
};
export default Element;
