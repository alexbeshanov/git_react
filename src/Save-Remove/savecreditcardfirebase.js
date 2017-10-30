import React from "react";
import ReactDOM from "react-dom";
import {keepalldatabase} from "../Auth/firebaseConfig";
import {ClassGost} from "../gost";
import {key} from "../Auth/userlogin";
import {userloginNOW} from "../Auth/userlogin";

export function SaveCreditCardFirebase(valueCardName, valueCardNumber, valueCardMonthEnd, valueCardYearEnd, valueCardCVS, valueCardPIN)
{
    var gost = new ClassGost();
    var CardNamegost=gost.Encode(valueCardName,key);
    var CardNumbergost=gost.Encode(valueCardNumber, key);
    var CardMonthEndgost=gost.Encode(valueCardMonthEnd,key);
    var CardYearEndgost=gost.Encode(valueCardYearEnd,key);
    var CardCVSgost=gost.Encode(valueCardCVS, key);
    var CardPINgost=gost.Encode(valueCardPIN,key);
	keepalldatabase.ref("users/"+userloginNOW.username+"/creditcard/"+valueCardNumber).set({
		CardName: "" + CardNamegost,
		CardNumber: "" + CardNumbergost,
		CardMonthEnd: "" + CardMonthEndgost,
		CardYearEnd: "" + CardYearEndgost,
		CardCVS: "" + CardCVSgost,
		CardPIN: "" + CardPINgost
	});
}
export default SaveCreditCardFirebase();


