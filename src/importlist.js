import firebase from "firebase";
import React from "react";
import ReactDOM from "react-dom";
import userlogin from "./Auth/userlogin.js";
import {store} from "./App";
import config from "./Auth/firebaseConfig";
import {connect} from "react-redux";
import "./style/list.css";
export var key_array = [];
export var childData_array=[];
export function ImportList (linkFirebase) {
	var data = firebase.database().ref(linkFirebase).orderByKey().once("value").then(
		function (snapshot) {
			snapshot.forEach(
				function (childSnapshot) {
					key_array.push(childSnapshot.key);
					childData_array.push(childSnapshot.val().NewPassword);
					//key_array.push(childSnapshot.key);
					//console.log(childSnapshot.val());
					//console.log(typeof childSnapshot);
					//key_array.passwordId=(childSnapshot.val());
				});
			console.log("Массив: "+ key_array);
			console.log("Значения: "+ childData_array);
		});
}
