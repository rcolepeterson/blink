import React from "react";
import Social from "../components/Social";
import { NextSeo } from "next-seo";
import Logo from "../components/Logo";
const Element = () => {
  return (
    <>
      <NextSeo
        title="BLINK"
        canonical="https://blink-git-blink-dev-rcolepeterson.vercel.app/level-one/"
        openGraph={{
          url: "https://blink-git-blink-dev-rcolepeterson.vercel.app/level-one/",
          images: [
            {
              url: "https://blink-git-blink-dev-rcolepeterson.vercel.app/SocialImage_1.png",
              width: 748,
              height: 392,
              alt: "dontblink-kitkat-level-one",
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
        pagename={"level-one"}
        animalname={"cat"}
        headerImage={"/SocialImage_1.png"}
        headerImageDesktop={"/SocialImage_1.png"}
      />
    </>
  );
};
export default Element;
