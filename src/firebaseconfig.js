// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDawlcILGmkADVN75wbxOoJnkZaMEjRyhA",
  authDomain: "fir-tutorial-a0e1f.firebaseapp.com",
  databaseURL: "https://fir-tutorial-a0e1f-default-rtdb.firebaseio.com",
  projectId: "fir-tutorial-a0e1f",
  storageBucket: "fir-tutorial-a0e1f.appspot.com",
  messagingSenderId: "481660348198",
  appId: "1:481660348198:web:91e58c78be0f589091c3e7",
  measurementId: "G-6FZH9XB7YX",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const database = getFirestore(app);
export const storage = getStorage(app);

export const actionCodeSettings = {
  // URL you want to redirect back to. The domain (www.example.com) for this
  // URL must be in the authorized domains list in the Firebase Console.
  url: "https://www.example.com/finishSignUp?cartId=1234",
  // This must be true.
  handleCodeInApp: true,
  iOS: {
    bundleId: "com.example.ios",
  },
  android: {
    packageName: "com.example.android",
    installApp: true,
    minimumVersion: "12",
  },
  dynamicLinkDomain: "example.page.link",
};

// sendSignInLinkToEmail(auth, email, actionCodeSettings)
//   .then(() => {
//     // The link was successfully sent. Inform the user.
//     // Save the email locally so you don't need to ask the user for it again
//     // if they open the link on the same device.
//     window.localStorage.setItem("emailForSignIn", email);
//     // ...
//   })
//   .catch((error) => {
//     alert(error.message);
//   });