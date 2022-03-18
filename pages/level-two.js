import React from "react";
import Social from "../components/Social";
import { NextSeo } from "next-seo";
import Logo from "../components/Logo";
const Element = () => {
  return (
    <>
      <NextSeo
        title="The Don't Blink Break | Level #2"
        canonical="https://blink-git-blink-dev-rcolepeterson.vercel.app/level-two/"
        openGraph={{
          url: "https://blink-git-blink-dev-rcolepeterson.vercel.app/level-two/",
          images: [
            {
              url: "https://blink-git-blink-dev-rcolepeterson.vercel.app/SocialImage_2.png",
              width: 748,
              height: 392,
              alt: "dont-blink-break-kitkat-level-two",
              type: "image/jpeg",
            },
          ],
        }}
      />
      <div className="p-6 pb-0 desktop-only">
        <Logo />
      </div>
      <Social
        level={"Level #2"}
        pagename={"level-two"}
        animalname={"snowy owl"}
        headerImage={"/SocialImage_2.png"}
        headerImageDesktop={"/DesktopShare_2.png"}
      />
    </>
  );
};
export default Element;
