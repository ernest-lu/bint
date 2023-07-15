// TODO: Add SDKs for Firebase products that you want to use
import { initializeApp } from "firebase/app";
import { collection, doc, setDoc, getDoc, connectFirestoreEmulator, getFirestore } from "firebase/firestore"; 
import { isDev } from "./config";
import config from "./config";
import sha256 from 'crypto-js/sha256'
import { error } from '@sveltejs/kit';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Initialize Firebase
console.log(config);
export const app = initializeApp(config.firebase);
const db = getFirestore(app);
if (isDev) {
  //connectFirestoreEmulator(db, '127.0.0.1', 8080)
}
const pastes = collection(db, "pastes");

export async function paste_document(content) {
  const id = sha256(content).toString();
  await setDoc(doc(pastes, id), {
    content: content
  });
  return {
    message: "success",
    content: id
  }
}

export async function get_document(id) {
  const docRef = await getDoc(doc(pastes, id));

  if (docRef.exists()) {
    return {
      message: "success",
      content: docRef.data().content
    }
  } else {
    throw error(404, {
      message: 'Not Found'
    });
  }
}
