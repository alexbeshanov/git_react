import React from "react";
import ReactDOM from "react-dom";
import {keepalldatabase} from "../Auth/firebaseConfig";
import {ClassGost} from "../gost";
import {Userpass} from "../Auth/userlogin";
import {key, userloginNOW} from "../Auth/userlogin";

export function SavePasswordFirebase(valueNewUser, valueNewPassword, valueNewTitle) {
    var gost = new ClassGost();
    var NewUsergost=gost.Encode(valueNewUser,key);
    var NewPasswordgost=gost.Encode(valueNewPassword, key);
    var NewTitlegost=gost.Encode(valueNewTitle,key);
	keepalldatabase.ref("users/"+userloginNOW.username+"/password/"+valueNewTitle).set({
		NewUser: "" + NewUsergost,
		NewPassword: "" + NewPasswordgost,
		NewTitle: "" + NewTitlegost
	});
}
export default SavePasswordFirebase();


