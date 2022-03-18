import "../styles/globals.css";
import React from "react";
import Head from "next/head";
import Layout from "../components/Layout";
import { AppWrapper } from "../context/state";
import SignIn from "../components/AuthForm";
import { auth } from "../firebase/firebase";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import Router from "next/router";
import Image from "next/image";
const INITIAL_STATE = {
  loggedIn: false,
};

Router.events.on("routeChangeStart", (url) => {
  NProgress.start();
});
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps }) {
  const [state, setState] = React.useState(INITIAL_STATE);
  const handler = (value) => {
    setState((prevState) => ({ ...prevState, loggedIn: value }));
  };
  React.useEffect(() => {
    auth.onAuthStateChanged(function (user) {
      if (user) {
        // User is signed in
        setState((prevState) => ({ ...prevState, loggedIn: true }));
      } else {
        // User is NOT signed in.
        setState((prevState) => ({
          ...prevState,
          loggedIn: false,
        }));
      }
    });
  }, []);
  return (
    <>
      <Head>
        <title>Dont Blink</title>
        <meta property="og:site_name" content="Don't Blink" />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://blink-git-blink-dev-rcolepeterson.vercel.app/"
        />
        <meta property="og:title" content="Don't Blink" />
        <meta
          property="og:description"
          content="Delighting consumers all over the world, KitKat is a favourite chocolate treat thanks to light wafers and delicious chocolate."
        />
        <meta
          property="og:image"
          content="https://www.nestle.com/sites/default/files/asset-library/publishingimages/brands/chocolate-confectionery/kitkat-brand-page.png"
        />
        <meta
          name="facebook-domain-verification"
          content="e3xkchl0xhxa60w4dp6kv0weton3bk"
        />
        <meta
          name="google-site-verification"
          content="Az9x5K8F_qzu958f3otEIhtZxYwAKlW6MKymJuHD99o"
        />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@nestle" />
        <meta
          name="twitter:description"
          content="Delighting consumers all over the world, KitKat is a favourite chocolate treat thanks to light wafers and delicious chocolate."
        />
        <meta name="twitter:title" content="KitKat" />
        <meta
          name="twitter:image"
          content="https://www.nestle.com/sites/default/files/asset-library/publishingimages/brands/chocolate-confectionery/kitkat-brand-page.png"
        />
        <meta name="MobileOptimized" content="width" />
        <meta name="HandheldFriendly" content="true" />
      </Head>
      <AppWrapper>
        <div className="desktop-only">
          <Image
            alt="background"
            src="/bg-image.png"
            layout="fill"
            objectFit="cover"
          ></Image>
        </div>
        <div className="mobile-only">
          <Image
            alt="background"
            src="/bg-image-mobile.png"
            layout="fill"
            objectFit="cover"
            className="object-fit-cover object-bottom "
          ></Image>
        </div>
        <Layout>
          {state.loggedIn ? (
            <Component {...pageProps} />
          ) : (
            <SignIn handler={handler} />
          )}
        </Layout>
      </AppWrapper>
    </>
  );
}

export default MyApp;
