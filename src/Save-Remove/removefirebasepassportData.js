import React from "react";
import ReactDOM from "react-dom";
import {keepalldatabase} from "../Auth/firebaseConfig";
import {userloginNOW} from "../Auth/userlogin";

export function RemoveFirebasepassportData(){
	keepalldatabase.ref("users/"+userloginNOW.username+"/passportData/").remove();
}
export function RemoveFirebasepassportDataOne(PrevTitle){
    keepalldatabase.ref("users/"+userloginNOW.username+"/passportData/"+PrevTitle).remove();
}