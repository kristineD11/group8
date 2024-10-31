import { initializeApp } from "firebase/app";
import {
  getAuth,
  initializeAuth,
  getReactNativePersistence,
} from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
    apiKey: "AIzaSyBMCxzoGkcYxtue5EpV3JkGHrckzd0hzVk",
    authDomain: "fir-integration-ee139.firebaseapp.com",
    projectId: "fir-integration-ee139",
    storageBucket: "fir-integration-ee139.appspot.com",
    messagingSenderId: "318104264534",
    appId: "1:318104264534:web:6820a006634497318300f7",
    measurementId: "G-6G1HNZD632"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});

export { app, auth };