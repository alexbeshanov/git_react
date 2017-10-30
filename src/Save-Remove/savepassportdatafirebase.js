import React from "react";
import ReactDOM from "react-dom";
import {key, userloginNOW} from "../Auth/userlogin.js";
import {keepalldatabase} from "../Auth/firebaseConfig";
import {ClassGost} from "../gost";

export function SavePassportDataFirebase(valuePassportSurname, valuePassportName, valuePassportThirdName, valuePassportNumber, valuePassportSex, valuePassportDateofBirth, valuePassportPlaceofBirth, valuePassportPlaceInput, valuePassportDateInput, valuePassportIDInput, valuePassportRegistration)
{
    var key = "lkmsdofijw9uri4oikpw934385u4owe2";
    var gost = new ClassGost();
    var Namegost=gost.Encode(valuePassportName,key);
    var Surnamegost=gost.Encode(valuePassportSurname, key);
    var Thirdnamegost=gost.Encode(valuePassportThirdName,key);
    var Numbergost=gost.Encode(valuePassportNumber,key);
    var Sexgost=gost.Encode(valuePassportSex,key);
    var DataofBirthgost=gost.Encode(valuePassportDateofBirth, key);
    var PlaceofBirthgost=gost.Encode(valuePassportPlaceofBirth,key);
    var DateInputgost=gost.Encode(valuePassportDateInput,key);
    var PlaceInputgost=gost.Encode(valuePassportPlaceInput, key);
    var IDInputgost=gost.Encode(valuePassportIDInput,key);
    var Placeregistrationgost=gost.Encode(valuePassportRegistration,key);

	keepalldatabase.ref("users/"+userloginNOW.username+"/passportData/"+valuePassportSurname).set({
		Name: "" +Namegost,
		Surname:""+Surnamegost,
		ThirdName:""+Thirdnamegost,
		Number:""+Numbergost,
		Sex:""+Sexgost,
		DateofBirth:""+DataofBirthgost,
		PlaceofBirth:""+PlaceofBirthgost,
		PlaceInput:""+PlaceInputgost,
		DateInput:""+DateInputgost,
		IDInput:""+IDInputgost,
		PlaceRegistration:""+Placeregistrationgost
	});
}
export default SavePassportDataFirebase();


