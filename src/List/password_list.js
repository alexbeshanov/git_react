import React from "react";
import ReactDOM from "react-dom";
import {
	BrowserRouter as Router, Route, Link, Switch, Redirect
} from "react-router-dom";
import "../Save-Remove/savepasswordfirebase.js";
import "../Auth/userlogin.js";
import "../style/list.css";
import PassDataList from "./PasswordList_Data";
import {RemoveFirebase} from "../Save-Remove/removefirebasepassportData";
import {RemoveFirebasepassword} from "../Save-Remove/removefirebasepassword";

export const Password=(props)=>(
	<div className="listbox">
		<h2>Список сохраненных паролей</h2>
		<div className="listbox-size">
			<PassDataList history={props.history}/>
		</div>
		<button onClick={RemoveFirebasepassword}  className="listbox_button"><div className=""><p>Удалить все пароли</p></div></button>
	</div>
);
export default Password;
