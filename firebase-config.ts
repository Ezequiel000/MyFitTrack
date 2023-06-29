import { initializeApp } from "firebase/app";
import{initializeAuth, getReactNativePersistence} from "firebase/auth/react-native"
import AsyncStorage  from "@react-native-async-storage/async-storage"

const firebaseConfig = {
  apiKey: "AIzaSyBGuBAMS66o0zEXw2Ze1MkE-yhSdRQj8Ic",
  authDomain: "your-project-id.firebaseapp.com",
  databaseURL: "https://myfittrack-e8801-default-rtdb.firebaseio.com",
  projectId: "myfittrack-e8801",
  storageBucket: "your-project-id.appspot.com",
  messagingSenderId: "your-messaging-sender-id",
  appId: "your-app-id",
};

const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app, {persistence: getReactNativePersistence(AsyncStorage)})
