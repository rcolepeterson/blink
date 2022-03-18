import React from "react";
import Social from "../components/Social";
import { NextSeo } from "next-seo";
import Logo from "../components/Logo";
const Element = () => {
  const pageName = "level-one";
  return (
    <>
      <NextSeo
        title="The Don't Blink Break | Level #12"
        canonical="https://blink-git-blink-dev-rcolepeterson.vercel.app/level-twelve/"
        openGraph={{
          url: "https://blink-git-blink-dev-rcolepeterson.vercel.app/level-twelve/",
          images: [
            {
              url: "https://blink-git-blink-dev-rcolepeterson.vercel.app/SocialImage_12.png",
              width: 748,
              height: 392,
              alt: "dont-blink-break-kitkat-level-twelve",
              type: "image/jpeg",
            },
          ],
        }}
      />
      <div className="p-6 pb-0 desktop-only">
        <Logo />
      </div>
      <Social
        level={"Level #12"}
        pagename={"level-twelve"}
        animalname={"slender loris"}
        headerImage={"/SocialImage_12.png"}
        headerImageDesktop={"/DesktopShare_12.png"}
      />
    </>
  );
};
export default Element;
