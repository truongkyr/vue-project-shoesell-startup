import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyA7wCQYM3AwcrUSQR7zAwI6pBhfFClL2cM",
  authDomain: "vue-shoessell.firebaseapp.com",
  projectId: "vue-shoessell",
  storageBucket: "vue-shoessell.appspot.com",
  messagingSenderId: "756701221889",
  appId: "1:756701221889:web:47cd73cd871b2373ccdc00",
  measurementId: "G-YC3MRTLMS9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Lấy đối tượng auth, firestore và storage từ ứng dụng đã khởi tạo
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

// export default { auth, db, storage };


