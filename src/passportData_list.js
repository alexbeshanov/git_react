import React from "react";
import ReactDOM from "react-dom";
import {
	BrowserRouter as Router, Route, Link, Switch, Redirect
} from "react-router-dom";
import "./savepasswordfirebase.js";
import "./userlogin.js";
import "./list.css";
import NewObjects_passportData from "./NewObjects_passportData";

export const PassportData=(props)=>(
	<div className="listbox">
		<h2>Список сохраненных паспортных данных</h2>
		<div className="listbox-size">
			<NewObjects_passportData history={props.history}/>
		</div>
	</div>
);
export default PassportData;