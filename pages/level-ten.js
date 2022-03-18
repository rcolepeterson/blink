import React from "react";
import Social from "../components/Social";
import { NextSeo } from "next-seo";
import Logo from "../components/Logo";
const Element = () => {
  return (
    <>
      <NextSeo
        title="The Don't Blink Break | Level #10"
        canonical="https://blink-git-blink-dev-rcolepeterson.vercel.app/level-ten/"
        openGraph={{
          url: "https://blink-git-blink-dev-rcolepeterson.vercel.app/level-ten/",
          images: [
            {
              url: "https://blink-git-blink-dev-rcolepeterson.vercel.app/SocialImage_10.png",
              width: 748,
              height: 392,
              alt: "dont-blink-break-kitkat-level-ten",
              type: "image/jpeg",
            },
          ],
        }}
      />
      <div className="p-6 pb-0 desktop-only">
        <Logo />
      </div>
      <Social
        level={"Level #10"}
        pagename={"level-ten"}
        animalname={"cat"}
        headerImage={"/SocialImage_10.png"}
        headerImageDesktop={"/DesktopShare_10.png"}
      />
    </>
  );
};
export default Element;
