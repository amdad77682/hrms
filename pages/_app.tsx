import Router from "next/router";
import NProgress from "nprogress";
import React from "react";
import { Provider } from "react-redux";
import { MainLayout } from "../components/core/MainLayout";
import store from "../store";
import "../styles/index.scss";

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
