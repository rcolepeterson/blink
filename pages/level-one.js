import React from "react";
import Social from "../components/Social";
import { NextSeo } from "next-seo";
import Logo from "../components/Logo";
const Element = () => {
  return (
    <div>
      <div className="p-6 pb-0 desktop-only">
        <Logo />
      </div>
      <NextSeo />
      <Social />
    </div>
  );
};
export default Element;
