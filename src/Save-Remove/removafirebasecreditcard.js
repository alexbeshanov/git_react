import React from "react";
import ReactDOM from "react-dom";
import {keepalldatabase} from "../Auth/firebaseConfig";
import {userloginNOW} from "../Auth/userlogin";

export function RemoveFirebasecreditcard(){
	keepalldatabase.ref("users/"+userloginNOW.username+"/creditcard/").remove();
}
export function RemoveFirebasecreditcardOne(PrevTitle) {
	keepalldatabase.ref("users/"+userloginNOW.username+"/creditcard/"+PrevTitle).remove();
}