import React from "react";
import ReactDOM from "react-dom";
import {keepalldatabase} from "../Auth/firebaseConfig";
import {userloginNOW} from "../Auth/userlogin";

export function RemoveFirebasepassword(){
	keepalldatabase.ref("users/"+userloginNOW.username+"/password/").remove();
}

export function RemoveFirebasepasswordOne(PrevTitle){
	keepalldatabase.ref("users/"+userloginNOW.username+"/password/"+PrevTitle).remove();
}