import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDoc, doc } from "firebase/firestore";
import "crypto-js/sha256.js";
import { e as error } from "./index.js";
const config = {
  // same for now?
  development: {
    firebase: {
      apiKey: "AIzaSyABLuD6Th9x3QQuULsCG01fopxNjf4vkHY",
      authDomain: "bintbadint.firebaseapp.com",
      projectId: "bintbadint",
      storageBucket: "bintbadint.appspot.com",
      messagingSenderId: "913857577737",
      appId: "1:913857577737:web:3a9a3ada5983a2381289d8"
    }
  },
  production: {
    firebase: {
      apiKey: "AIzaSyABLuD6Th9x3QQuULsCG01fopxNjf4vkHY",
      authDomain: "bintbadint.firebaseapp.com",
      projectId: "bintbadint",
      storageBucket: "bintbadint.appspot.com",
      messagingSenderId: "913857577737",
      appId: "1:913857577737:web:3a9a3ada5983a2381289d8"
    }
  }
};
const env = "development";
const config$1 = config[env];
console.log(config$1);
const app = initializeApp(config$1.firebase);
const db = getFirestore(app);
const pastes = collection(db, "pastes");
async function get_document(id) {
  const docRef = await getDoc(doc(pastes, id));
  if (docRef.exists()) {
    return {
      message: "success",
      content: docRef.data().content
    };
  } else {
    throw error(404, {
      message: "Not Found"
    });
  }
}
export {
  get_document as g
};
