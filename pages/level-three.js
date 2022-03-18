import React from "react";
import Social from "../components/Social";
import { NextSeo } from "next-seo";
import Logo from "../components/Logo";
const Element = () => {
  return (
    <>
      <NextSeo
        title="The Don't Blink Break | Level #3"
        canonical="https://blink-git-blink-dev-rcolepeterson.vercel.app/level-three/"
        openGraph={{
          url: "https://blink-git-blink-dev-rcolepeterson.vercel.app/level-three/",
          images: [
            {
              url: "https://blink-git-blink-dev-rcolepeterson.vercel.app/SocialImage_3.png",
              width: 748,
              height: 392,
              alt: "dont-blink-break-kitkat-level-three",
              type: "image/jpeg",
            },
          ],
        }}
      />
      <div className="p-6 pb-0 desktop-only">
        <Logo />
      </div>
      <Social
        level={"Level #1"}
        pagename={"level-three"}
        animalname={"cat"}
        headerImage={"/SocialImage_3.png"}
        headerImageDesktop={"/DesktopShare_3.png"}
      />
    </>
  );
};
export default Element;
