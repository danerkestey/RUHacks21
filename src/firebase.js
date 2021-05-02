import firebase from "firebase";
import { firebaseConfig } from "./FirebaseConfig";
import "firebase/auth";

const app = firebase.initializeApp(firebaseConfig);

export const auth = app.auth();
export default app;
