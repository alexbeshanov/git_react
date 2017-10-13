import firebase from "firebase";
import React from "react";
import ReactDOM from "react-dom";
import userlogin from "./userlogin.js";
import config from "./firebaseConfig";

export function SavePassportDataFirebase(valuePassportSurname, valuePassportName, valuePassportThirdName, valuePassportNumber, valuePassportSex, valuePassportDateofBirth, valuePassportPlaceofBirth, valuePassportPlaceInput, valuePassportDateInput, valuePassportIDInput, valuePassportRegistration)
{
	firebase.database().ref("users/passportData/"+valuePassportSurname).set({
		Name: "" +valuePassportName,
		Surname:""+valuePassportSurname,
		ThirdName:""+valuePassportThirdName,
		Number:""+valuePassportNumber,
		Sex:""+valuePassportSex,
		DateofBirth:""+valuePassportDateofBirth,
		PlaceofBirth:""+valuePassportPlaceofBirth,
		PlaceInput:""+valuePassportPlaceInput,
		DateInput:""+valuePassportDateInput,
		IDInput:""+valuePassportIDInput,
		PlaceRegistration:""+valuePassportRegistration
	});
}
export default SavePassportDataFirebase();


