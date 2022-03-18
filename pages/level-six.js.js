import React from "react";
import Social from "../components/Social";
import { NextSeo } from "next-seo";
import Logo from "../components/Logo";
const Element = () => {
  const pageName = "level-one";
  return (
    <>
      <NextSeo
        title="The Don't Blink Break | Level #6"
        canonical="https://blink-git-blink-dev-rcolepeterson.vercel.app/level-six/"
        openGraph={{
          url: "https://blink-git-blink-dev-rcolepeterson.vercel.app/level-six/",
          images: [
            {
              url: "https://blink-git-blink-dev-rcolepeterson.vercel.app/SocialImage_6.png",
              width: 748,
              height: 392,
              alt: "dont-blink-break-kitkat-level-six",
              type: "image/jpeg",
            },
          ],
        }}
      />
      <div className="p-6 pb-0 desktop-only">
        <Logo />
      </div>
      <Social
        level={"Level #6"}
        pagename={"level-six"}
        animalname={"giraffe"}
        headerImage={"/SocialImage_6.png"}
        headerImageDesktop={"/DesktopShare_6.png"}
      />
    </>
  );
};
export default Element;
