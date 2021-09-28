importScripts("https://www.gstatic.com/firebasejs/8.6.8/firebase-app.js");

importScripts("https://www.gstatic.com/firebasejs/8.6.8/firebase-messaging.js");

const firebaseConfig = {
  apiKey: "AIzaSyCJ5E0Jh7m1E0GnM_FAH0sm6yYadgfWsu8",
  authDomain: "amdad-471c4.firebaseapp.com",
  databaseURL: "https://amdad-471c4.firebaseio.com",
  projectId: "amdad-471c4",
  storageBucket: "amdad-471c4.appspot.com",
  messagingSenderId: "270593853535",
  appId: "1:270593853535:web:6fbb1e09bf07d84fcdb3ea",
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function (payload) {
  const notificationTitle = payload.data.title;
  const notificationOptions = {
    body: payload.data.body,
  };

  return self.registration.showNotification(
    notificationTitle,
    notificationOptions
  );
});

self.addEventListener("push", function (event) {
  const data = event.data.json();
  // eslint-disable-next-line no-console
  console.log(data);
});
