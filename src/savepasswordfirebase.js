import firebase from "firebase";
import React from "react";
import ReactDOM from "react-dom";
import userlogin from "./userlogin.js";
import config from "./firebaseConfig";

export function SavePasswordFirebase(valueNewUser, valueNewPassword, valueNewTitle) {
	firebase.database().ref("users/password/"+valueNewTitle).set({
		NewUser: "" + valueNewUser,
		NewPassword: "" + valueNewPassword,
		NewTitle: "" + valueNewTitle
	});
}
export default SavePasswordFirebase();


