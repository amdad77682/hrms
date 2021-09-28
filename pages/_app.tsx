import Router from "next/router";
import NProgress from "nprogress";
import React from "react";
import store from "../store";
import { Provider } from "react-redux";

import { userInLoggedIn } from "../utils/authentication";
import "../styles/index.scss";
import { MainLayout } from "../components/core/MainLayout";
NProgress.configure({ showSpinner: false });
Router.events.on("routeChangeStart", () => {
  NProgress.start();
});
Router.events.on("routeChangeStart", () => {
  NProgress.start();
});
Router.events.on("routeChangeError", () => {
  NProgress.done();
});
Router.events.on("routeChangeComplete", () => {
  NProgress.done();
});

function App({ Component, pageProps, router }: any) {
  React.useEffect(() => {
    if (
      userInLoggedIn() &&
      !window.location.pathname.includes("/hrm") &&
      !window.location.pathname.includes("/api")
    ) {
      window.location.href = "/hrm/leave/my-leaves";
    }
    if (
      !userInLoggedIn() &&
      !window.location.pathname.includes("/login") &&
      !window.location.pathname.includes("/api")
    ) {
      window.location.href = "/login";
    }
  }, []);
  if (router.pathname.startsWith("/login")) {
    return (
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    );
  } else {
    return (
      <Provider store={store}>
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </Provider>
    );
  }
}

export default App;
