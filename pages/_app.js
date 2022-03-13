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
      </Head>
      <AppWrapper>
        <Image
          alt="background"
          src="/bg-image.png"
          layout="fill"
          objectFit="cover"
        ></Image>
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
