import firebase from "firebase";
import React from "react";
import ReactDOM from "react-dom";
import userlogin from "./userlogin.js";
import config from "./firebaseConfig";

export function SaveCreditCardFirebase(valueCardName, valueCardNumber, valueCardMonthEnd, valueCardYearEnd, valueCardCVS, valueCardPIN)
{
	firebase.database().ref("users/creditcard/"+valueCardNumber).set({
		CardName: "" + valueCardName,
		CardNumber: "" + valueCardNumber,
		CardMonthEnd: "" + valueCardMonthEnd,
		CardYearEnd: "" + valueCardYearEnd,
		CardCVS: "" + valueCardCVS,
		CardPIN: "" + valueCardPIN
	});
}
export default SaveCreditCardFirebase();


