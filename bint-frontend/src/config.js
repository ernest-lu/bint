/** This file contains all public configuration variables for different environments. */

const config = {
  // same for now?
  development: {
    firebase: {
      apiKey: "AIzaSyABLuD6Th9x3QQuULsCG01fopxNjf4vkHY",
      authDomain: "bintbadint.firebaseapp.com",
      projectId: "bintbadint",
      storageBucket: "bintbadint.appspot.com",
      messagingSenderId: "913857577737",
      appId: "1:913857577737:web:3a9a3ada5983a2381289d8",
    },
  },
  production: {
    firebase: {
      apiKey: "AIzaSyABLuD6Th9x3QQuULsCG01fopxNjf4vkHY",
      authDomain: "bintbadint.firebaseapp.com",
      projectId: "bintbadint",
      storageBucket: "bintbadint.appspot.com",
      messagingSenderId: "913857577737",
      appId: "1:913857577737:web:3a9a3ada5983a2381289d8",
    },
  },
};

/** The environment of the application. */
export const env = "development";

/** Indicates whether the app is running in development. */
export const isDev = env === "development";

export default config[env];
