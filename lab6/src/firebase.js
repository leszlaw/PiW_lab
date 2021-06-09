import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBf0pwhV_bM7vd5beYvDO0frqQ7Y7FW538",
    authDomain: "student-announcement-cbbb1.firebaseapp.com",
    projectId: "student-announcement-cbbb1",
    storageBucket: "student-announcement-cbbb1.appspot.com",
    messagingSenderId: "597172804305",
    appId: "1:597172804305:web:1bc00e7071456b34dbc3f0",
    measurementId: "G-SCF5MMJQ7F"
};
if(!firebase.apps.length)
    firebase.initializeApp(firebaseConfig);
else
    firebase.app();

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const addAnnouncement = async (name, announcement, email) => {
    return firestore.collection("announcements").add({
        name: name,
        announcement: announcement,
        email: email
    });
}

export const getAllAnnouncements = () => {
    return firestore.collection("announcements").get();
}