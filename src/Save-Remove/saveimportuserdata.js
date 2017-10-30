import React from "react";
import {keepalldatabase} from "../Auth/firebaseConfig";

export function SaveUserData(valueUsername, valueUserpass, NameTitle) {
	keepalldatabase.ref("info/"+NameTitle).set({
		Username: ""+valueUsername,
		Userpass: ""+valueUserpass
	});
}