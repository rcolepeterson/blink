import React from "react";
import Social from "../components/Social";
import { NextSeo } from "next-seo";
import Logo from "../components/Logo";
const Element = () => {
  const pageName = "level-one";
  return (
    <>
      <NextSeo
        title="The Don't Blink Break | Level #1"
        canonical="https://blink-git-blink-dev-rcolepeterson.vercel.app/level-one/"
        openGraph={{
          url: "https://blink-git-blink-dev-rcolepeterson.vercel.app/level-one/",
          images: [
            {
              url: "https://blink-git-blink-dev-rcolepeterson.vercel.app/SocialImage_1.png",
              width: 748,
              height: 392,
              alt: "dont-blink-break-kitkat-level-one",
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
        animalname={"cow"}
        headerImage={"/SocialImage_1.png"}
        headerImageDesktop={"/DesktopShare_1.png"}
      />
    </>
  );
};
export default Element;
