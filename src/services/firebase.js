import { initializeApp } from "firebase/app";
import {
    createUserWithEmailAndPassword,
    getAuth,
    signInWithEmailAndPassword,
    signOut
} from "firebase/auth";
import { getDatabase, ref } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyB2o8DX5wYXwWgF0YD5b0M4szLNFsWnDcc",
    authDomain: "reactmessenger-cba82.firebaseapp.com",
    databaseURL: "https://reactmessenger-cba82-default-rtdb.firebaseio.com",
    projectId: "reactmessenger-cba82",
    storageBucket: "reactmessenger-cba82.appspot.com",
    messagingSenderId: "250181373298",
    appId: "1:250181373298:web:5529d2bb36b52dc75e61eb"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getDatabase(app);

export const signUp = async(email, pass) => {
    await createUserWithEmailAndPassword(auth, email, pass);
}

export const logIn = async(email, pass) => {
    await signInWithEmailAndPassword(auth, email, pass);
}

export const logOut = async() => {
    await signOut(auth);
}

export const userAddRef = ref(db, `users`);
export const getUserRefById = (id) => ref(db, `users/${id}`);
export const getUserNameRefById = (id) => ref(db, `users/${id}/name`);
export const getUserShowNameRefById = (id) => ref(db, `users/${id}/showName`);
export const getUserRoleRefById = (id) => ref(db, `users/${id}/admin`);

export const groupAddRef = ref(db, `groups`);
export const getGroupRefById = (id) => ref(db, `groups/${id}`);

export const getMsgRefById = (idGrp) => ref(db, `messages/${idGrp}`);
export const getMsgsListRefById = (idGrp) => ref(db, `messages/${idGrp}/messageList`);