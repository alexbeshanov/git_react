import {keepalldatabase} from "../Auth/firebaseConfig";
import React from "react";
import {SavePasswordFirebase} from "./savepasswordfirebase";
import {SaveNotesFirebase} from "./savenotesfirebase";
import {SaveCreditCardFirebase} from "./savecreditcardfirebase";
import {SavePassportDataFirebase} from "./savepassportdatafirebase";
import {userloginNOW} from "../Auth/userlogin";

export function UpdatePasswordFirebase(valueNewUser, valueNewPassword, valueNewTitle, PrevTitle) {
	keepalldatabase.ref("users/"+userloginNOW.username+"/password/"+PrevTitle).remove();
	SavePasswordFirebase(valueNewUser, valueNewPassword, valueNewTitle);
}
export function UpdateNotesFirebase(valueNameTitle, valueTextArea, PrevTitle) {
	keepalldatabase.ref("users/"+userloginNOW.username+"/notes/"+PrevTitle).remove();
	SaveNotesFirebase(valueNameTitle, valueTextArea);
}
export function UpdateCreditCardFirebase(valueCardName, valueCardNumber,valueCardMonthEnd,valueCardYearEnd, valueCardCVS, valueCardPIN, PrevTitle) {
	keepalldatabase.ref("users/"+userloginNOW.username+"/creditcard/"+PrevTitle).remove();
	SaveCreditCardFirebase(valueCardName, valueCardNumber,valueCardMonthEnd,valueCardYearEnd, valueCardCVS, valueCardPIN);
}
export function UpdatePassportDataFirebase(valuePassportSurname, valuePassportName, valuePassportThirdName, valuePassportNumber, valuePassportSex, valuePassportDateofBirth, valuePassportPlaceofBirth, valuePassportPlaceInput, valuePassportDateInput, valuePassportIDInput, valuePassportRegistration, PrevTitle) {
	keepalldatabase.ref("users/"+userloginNOW.username+"/passportData/"+PrevTitle).remove();
	SavePassportDataFirebase(valuePassportSurname, valuePassportName, valuePassportThirdName, valuePassportNumber, valuePassportSex, valuePassportDateofBirth, valuePassportPlaceofBirth, valuePassportPlaceInput, valuePassportDateInput, valuePassportIDInput, valuePassportRegistration);
}