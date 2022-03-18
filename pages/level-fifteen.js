import React from "react";
import Social from "../components/Social";
import { NextSeo } from "next-seo";
import Logo from "../components/Logo";
const Element = () => {
  return (
    <>
      <NextSeo
        title="The Don't Blink Break | Level #15"
        canonical="https://blink-git-blink-dev-rcolepeterson.vercel.app/level-fifteen/"
        openGraph={{
          url: "https://blink-git-blink-dev-rcolepeterson.vercel.app/level-fifteen/",
          images: [
            {
              url: "https://blink-git-blink-dev-rcolepeterson.vercel.app/SocialImage_15.png",
              width: 748,
              height: 392,
              alt: "dont-blink-break-kitkat-level-fifteen",
              type: "image/jpeg",
            },
          ],
        }}
      />
      <div className="p-6 pb-0 desktop-only">
        <Logo />
      </div>
      <Social
        level={"Level #15"}
        pagename={"level-fifteen"}
        animalname={"dog"}
        headerImage={"/SocialImage_15.png"}
        headerImageDesktop={"/DesktopShare_15.png"}
      />
    </>
  );
};
export default Element;
