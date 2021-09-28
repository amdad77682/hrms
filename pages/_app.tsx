import Router from "next/router";
import NProgress from "nprogress";
import React from "react";
import store from "../store";
import { Provider } from "react-redux";

import {
  getFirebaseTokenFromCookies,
  setFirebaseTokenFromCookies,
  userInLoggedIn,
} from "../utils/authentication";
import "../styles/index.scss";
import { MainLayout } from "../components/core/MainLayout";
import fcm from "../lib/fcm";
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

  React.useEffect(() => {
    if ("serviceWorker" in navigator && process.browser) {
      window.addEventListener("load", function () {
        navigator.serviceWorker.register("/firebase-messaging-sw.js").then(
          function (registration) {
            console.warn(
              "Service Worker registration successful with scope: ",
              registration.scope
            );
          },
          function (err) {
            console.warn("Service Worker registration failed: ", err);
          }
        );
      });
    }
  }, []);
  React.useEffect(() => {
    function fetchData() {
      if ("Notification" in window) {
        Notification.requestPermission()
          .then(async function (permission) {
            if (permission === "granted") {
              const oldtoken = getFirebaseTokenFromCookies();
              const newtoken = await fcm.messagingToken();

              if (!oldtoken || oldtoken !== newtoken) {
                fcm
                  .firebaseTopiceSubscribe(null, newtoken as string)
                  .then(() => {
                    navigator.serviceWorker.ready.then(function () {
                      console.warn("notification enabled");
                    });
                    setFirebaseTokenFromCookies(newtoken as string);

                    fcm.playNotification().catch(console.error);
                  })
                  .catch(console.error);
              }
            }
          })
          .catch(console.error);
      }
    }
    fetchData();
  }, []);
  React.useEffect(() => {
    ///onMessage
    if ("serviceWorker" in navigator && fcm?.messaging) {
      fcm.messaging.onMessage(
        (payload: any) => {
          console.warn("foreground", payload);
          const { json_data } = payload.data;
          console.warn("notification body", json_data);
          fcm.playNotification().catch(console.error);
        },
        (err: any) => console.error("onMessage----", err)
      );
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
