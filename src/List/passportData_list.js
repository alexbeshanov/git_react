import React from "react";
import ReactDOM from "react-dom";
import {
	BrowserRouter as Router, Route, Link, Switch, Redirect
} from "react-router-dom";
import "../Save-Remove/savepasswordfirebase.js";
import "../Auth/userlogin.js";
import "../style/list.css";
import {PassportDataList} from "./PassportDataList_Data";
import {RemoveFirebasepassportData} from "../Save-Remove/removefirebasepassportData";

export const PassportData=(props)=>(
	<div className="listbox">
		<h2>Список сохраненных паспортных данных</h2>
		<div className="listbox-size">
			<PassportDataList history={props.history}/>
		</div>
		<button onClick={RemoveFirebasepassportData} className="listbox_button"><div><p>Удалить все паспортные данные</p></div></button>
	</div>
);
export default PassportData;