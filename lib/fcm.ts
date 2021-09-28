import axios from "axios";
import firebase from "firebase";
import "firebase/messaging";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DB_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STTORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MSG_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
};
if (!firebase.apps.length) firebase.initializeApp(firebaseConfig);

let messaging: any;
let messagingToken: any;
if (process.browser) {
  messaging = firebase.messaging();
  messagingToken = () =>
    messaging.getToken({
      vapidKey: process.env.FIREBASE_PUBLIC_API_KEY,
    });
}
function firebaseTopiceSubscribe(
  oldToken: string | null,
  newToken: string | null
) {
  const apiUrl = `https://iid.googleapis.com/iid/v1:batchAdd`;
  return axios.post(
    apiUrl,
    {
      to: "/topics/leave_application",
      registration_tokens: [newToken],
    },
    {
      headers: {
        Authorization: `key=${process.env.SERVER_KEY}`,
      },
    }
  );
}

function playNotification() {
  return new Promise(function (resolve, reject) {
    // return a promise
    const audio = new Audio(); // create audio wo/ src
    audio.preload = "auto"; // intend to play through
    audio.autoplay = true; // autoplay when loaded
    audio.onerror = reject; // on error, reject
    audio.onended = resolve; // when done, resolve

    audio.src = "/notification.mp3";
  });
}
const fcm = {
  messaging,
  messagingToken,
  firebaseTopiceSubscribe,

  playNotification,
};

export default fcm;
