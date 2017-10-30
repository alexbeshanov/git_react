import React from "react";
import ReactDOM from "react-dom";
import {
	BrowserRouter as Router, Route, Link, Switch, Redirect
} from "react-router-dom";
import "../Save-Remove/savepasswordfirebase.js";
import "../Auth/userlogin.js";
import NewObjects from "../NewObject_Module/NewObjects_password.js";
import "../style/list.css";

export const Files=(props)=>(
	<div className="listbox">
		<h2>Список сохраненных файлов</h2>
		<div className="listbox-size">
			<NewObjects history={props.history}/>
		</div>
		<button className="listbox_button"><div className=""><p>Удалить все файлы</p></div></button>
	</div>
);
export default Files;