import React from "react";
import Social from "../components/Social";
import { NextSeo } from "next-seo";
import Logo from "../components/Logo";
const Element = () => {
  return (
    <>
      <NextSeo
        title="The Don't Blink Break | Level #7"
        canonical="https://blink-git-blink-dev-rcolepeterson.vercel.app/level-seven/"
        openGraph={{
          url: "https://blink-git-blink-dev-rcolepeterson.vercel.app/level-seven/",
          images: [
            {
              url: "https://blink-git-blink-dev-rcolepeterson.vercel.app/SocialImage_7.png",
              width: 748,
              height: 392,
              alt: "dont-blink-break-kitkat-level-seven",
              type: "image/jpeg",
            },
          ],
        }}
      />
      <div className="p-6 pb-0 desktop-only">
        <Logo />
      </div>
      <Social
        level={"Level #7"}
        pagename={"level-seven"}
        animalname={"cat"}
        headerImage={"/SocialImage_7.png"}
        headerImageDesktop={"/DesktopShare_7.png"}
      />
    </>
  );
};
export default Element;
