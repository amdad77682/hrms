const withPlugins = require("next-compose-plugins");
const withImages = require("next-images");

module.exports = withPlugins([withImages], {
  env: {
    MONGODB_URI:
      "mongodb+srv://amdad:Samsunnahar@cluster0.6ejuf.mongodb.net/notification?retryWrites=true&w=majority",
    MONGODB_DB: "notification",
    FIREBASE_API: "https://fcm.googleapis.com/fcm/send",
    FIREBASE_API_KEY: "AIzaSyCJ5E0Jh7m1E0GnM_FAH0sm6yYadgfWsu8",
    FIREBASE_AUTH_DOMAIN: "amdad-471c4.firebaseapp.com",
    FIREBASE_DB_URL: "https://amdad-471c4.firebaseio.com",
    FIREBASE_PROJECT_ID: "amdad-471c4",
    FIREBASE_STTORAGE_BUCKET: "amdad-471c4.appspot.com",
    FIREBASE_MSG_SENDER_ID: "270593853535",
    FIREBASE_APP_ID: "1:270593853535:web:6fbb1e09bf07d84fcdb3ea",
    SERVER_KEY:
      "AAAAPwCmiF8:APA91bG3qJ22s6eazGNaCR7hJDkBjC1-qaFB0AgkeSR84xTj4wFs2anSnbjPU0SKZ4tsrPquGnX-dRQvBZXjdAp1AXqkdrDK9N1wfNivtSVpVBZ849Q_RzXrf30kqGRMtIr1kbTkESte",
    FIREBASE_PUBLIC_API_KEY:
      "BI42fRNLfJGgOtW4jc-QyCEgUI_mLjzzDqo-b6uscF_VsjpvCesUX6qjepDeTpSLFe8n72dZwOQ571GKZ1Cu5hI",
  },
});
