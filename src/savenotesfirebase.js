import firebase from "firebase";
import React from "react";
import ReactDOM from "react-dom";
import userlogin from "./userlogin.js";
import config from "./firebaseConfig";

export function SaveNotesFirebase(valueNameTitle, valueTextArea) {
	firebase.database().ref("users/notes/"+valueNameTitle).set({
		NewName: "" + valueNameTitle,
		NewText: "" + valueTextArea
	});
}
export default SaveNotesFirebase();


