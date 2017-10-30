import React from "react";
import ReactDOM from "react-dom";
import {keepalldatabase} from "../Auth/firebaseConfig";
import {ClassGost} from "../gost";
import {key, userloginNOW} from "../Auth/userlogin";

export function SaveNotesFirebase(valueNameTitle, valueTextArea) {
	var gost = new ClassGost();
	var Nametitlegost=gost.Encode(valueNameTitle,key);
	var TextAreagost=gost.Encode(valueTextArea, key);
	keepalldatabase.ref("users/"+userloginNOW.username+"/notes/"+valueNameTitle).set({
		NewName: "" + Nametitlegost,
		NewText: "" + TextAreagost
	});
}
export default SaveNotesFirebase();


