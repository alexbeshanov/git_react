import React from "react";
import ReactDOM from "react-dom";
import {
	BrowserRouter as Router, Route, Link, Switch, Redirect
} from "react-router-dom";
import "./savepasswordfirebase.js";
import "./userlogin.js";
import "./list.css";
import NewObjects_notes from "./NewObjects_notes";

export const Notes=(props)=>(
	<div className="listbox">
		<h2>Список сохраненных заметок</h2>
		<div className="listbox-size">
			<NewObjects_notes history={props.history}/>
		</div>
	</div>
);
export default Notes;