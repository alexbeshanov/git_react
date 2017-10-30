import React from "react";
import ReactDOM from "react-dom";
import "../App.css";
import {
	BrowserRouter as Router, Route, Link, Redirect
} from "react-router-dom";
export const SecondPage=()=>(
	<div className="container">
		<p>Second Page!</p>
		<li><Link to="/">Exit</Link></li>
	</div>
);
export default SecondPage;