import React from "react";
import firebase from "firebase";
import ReactDOM from "react-dom";
import {
	BrowserRouter as Router, Route, Link, Switch, Redirect
} from "react-router-dom";
import "./savepasswordfirebase.js";
import "./userlogin.js";
import NewObjects_password from "./NewObjects_password.js";
import "./list.css";
import NewPassword from "./NewPassword";
import config from "./firebaseConfig";
export const Password=(props)=>(
	<div className="listbox">
		<h2>Список сохраненных паролей</h2>
		<div className="listbox-size">
			<NewObjects_password history={props.history}/>
		</div>
	</div>
);
export default Password;