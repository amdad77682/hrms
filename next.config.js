const withPlugins = require("next-compose-plugins");
const withImages = require("next-images");

module.exports = withPlugins([withImages], {
  env: {
    MONGODB_URI:
      "mongodb+srv://amdad:Samsunnahar@cluster0.6ejuf.mongodb.net/notification?retryWrites=true&w=majority",
    MONGODB_DB: "notification",
  },
});
