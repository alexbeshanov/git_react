import firebase from "firebase";
import React from "react";

export const config = {
	apiKey: "AIzaSyCmlSAkYk5BrB-g3JIofnOJz8hEI_NVLxs",
	authDomain: "keepall-react.firebaseapp.com",
	databaseURL: "https://keepall-react.firebaseio.com",
	projectId: "keepall-react",
	storageBucket: "",
	messagingSenderId: "36155719589",
};
firebase.initializeApp(config);
const keepalldatabase = firebase.database();
export default config;