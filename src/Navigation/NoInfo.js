import React from "react";
import ReactDOM from "react-dom";
import {
	BrowserRouter as Router, Route, Link, Switch, Redirect
} from "react-router-dom";
import "../style/list.css";
export const NoInfo = (props) =>(
	<div className="listbox">
		<div className="listbox-welcome">
			<h2>Добро пожаловать в защищенное хранилище KeepALL!</h2>
		</div>
	</div>
);
export default NoInfo;