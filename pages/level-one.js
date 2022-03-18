import React from "react";
import Social from "../components/Social";
import { NextSeo } from "next-seo";
import Logo from "../components/Logo";
const Element = () => {
  return (
    <>
      <NextSeo
        openGraph={{
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
        animalname={"cat"}
        headerImage={"/SocialImage_1.png"}
        headerImageDesktop={"/SocialImage_1.png"}
      />
    </>
  );
};
export default Element;