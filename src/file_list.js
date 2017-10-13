import React from "react";
import ReactDOM from "react-dom";
import {
	BrowserRouter as Router, Route, Link, Switch, Redirect
} from "react-router-dom";
import "./savepasswordfirebase.js";
import "./userlogin.js";
import NewObjects from "./NewObjects_password.js";
import "./list.css";

export const Files=(props)=>(
	<div className="listbox">
		<h2>Список сохраненных файлов</h2>
		<div className="listbox-size">
			<NewObjects history={props.history}/>
		</div>
	</div>
);
export default Files;