// TODO: Add SDKs for Firebase products that you want to use
import { initializeApp } from "firebase/app";
import {
  getFunctions,
  connectFunctionsEmulator,
  httpsCallable,
} from "firebase/functions";
import config, { isDev } from "./config";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Initialize Firebase
export const app = initializeApp(config.firebase);

const functions = getFunctions(app);
if (isDev) {
  connectFunctionsEmulator(functions, "127.0.0.1", 5001);
}
export const paste_document = httpsCallable(functions, "paste_document");
export const get_document = httpsCallable(functions, "get_document");
