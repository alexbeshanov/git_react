import React from "react";
import ReactDOM from "react-dom";
import "../App.css";
import {
	BrowserRouter as Router, Route, Link, Redirect
} from "react-router-dom";
export const ThirdPage=()=>(
	<div className="container">
		<p>Third Page!</p>
		<li><Link to="/">Exit</Link></li>
	</div>
);
export default ThirdPage;