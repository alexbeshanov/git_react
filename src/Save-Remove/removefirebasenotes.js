import React from "react";
import ReactDOM from "react-dom";
import {keepalldatabase} from "../Auth/firebaseConfig";
import {userloginNOW} from "../Auth/userlogin";

export function RemoveFirebasenotes(){
	keepalldatabase.ref("users/"+userloginNOW.username+"/notes/").remove();
}
export function RemoveFirebasenotesOne(PrevTitle) {
	keepalldatabase.ref("users/"+userloginNOW.username+"/notes/"+PrevTitle).remove();
}