import React from "react";
import Social from "../components/Social";
import { NextSeo } from "next-seo";
import Logo from "../components/Logo";
const Element = () => {
  const pageName = "level-one";
  return (
    <>
      <NextSeo
        title="The Don't Blink Break | Level #5"
        canonical="https://blink-git-blink-dev-rcolepeterson.vercel.app/level-five/"
        openGraph={{
          url: "https://blink-git-blink-dev-rcolepeterson.vercel.app/level-five/",
          images: [
            {
              url: "https://blink-git-blink-dev-rcolepeterson.vercel.app/SocialImage_5.png",
              width: 748,
              height: 392,
              alt: "dont-blink-break-kitkat-level-five",
              type: "image/jpeg",
            },
          ],
        }}
      />
      <div className="p-6 pb-0 desktop-only">
        <Logo />
      </div>
      <Social
        level={"Level #5"}
        pagename={"level-five"}
        animalname={"squirrel"}
        headerImage={"/SocialImage_5.png"}
        headerImageDesktop={"/DesktopShare_5.png"}
      />
    </>
  );
};
export default Element;
