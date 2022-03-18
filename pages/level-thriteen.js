import React from "react";
import Social from "../components/Social";
import { NextSeo } from "next-seo";
import Logo from "../components/Logo";
const Element = () => {
  const pageName = "level-one";
  return (
    <>
      <NextSeo
        title="The Don't Blink Break | Level #13"
        canonical="https://blink-git-blink-dev-rcolepeterson.vercel.app/level-thirteen/"
        openGraph={{
          url: "https://blink-git-blink-dev-rcolepeterson.vercel.app/level-thirteen/",
          images: [
            {
              url: "https://blink-git-blink-dev-rcolepeterson.vercel.app/SocialImage_13.png",
              width: 748,
              height: 392,
              alt: "dont-blink-break-kitkat-level-thirteen",
              type: "image/jpeg",
            },
          ],
        }}
      />
      <div className="p-6 pb-0 desktop-only">
        <Logo />
      </div>
      <Social
        level={"Level #13"}
        pagename={"level-thirteen"}
        animalname={"cow"}
        headerImage={"/SocialImage_13.png"}
        headerImageDesktop={"/DesktopShare_13.png"}
      />
    </>
  );
};
export default Element;
