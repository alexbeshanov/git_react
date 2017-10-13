import React from "react";
import ReactDOM from "react-dom";
import "./firstpage.css";
import Tabs from "./tabs.js";
import userlogin from "./userlogin.js";
import {
	BrowserRouter as Router, Route, Link, Redirect
} from "react-router-dom";
export const FirstPage = (props) =>(
	<div className="main-page">
		<div className="main-page_footer">
			<Link to="/firstpage" className="main-page_footer_logo_link"><div className="main-page_footer_logo"><h1>KEEPALL</h1></div></Link>
			<div className="main-page_footer_label"><h1>MainPage</h1></div>
			<Link to="/" className="main-page_footer_exit_link"><div className="main-page_footer_exit"><h1>Выйти</h1></div></Link>
		</div>
		<div>

		</div>

		<Tabs />

	</div>
);
export default FirstPage;
