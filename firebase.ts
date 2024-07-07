import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC1xmM5c-phokMUBMSN-haQaCdLsRmcGNs",
  authDomain: "fanfield-b163f.firebaseapp.com",
  projectId: "fanfield-b163f",
  storageBucket: "fanfield-b163f.appspot.com",
  messagingSenderId: "425040435562",
  appId: "1:425040435562:web:e47503faabb0bafc6eed13",
};

export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
