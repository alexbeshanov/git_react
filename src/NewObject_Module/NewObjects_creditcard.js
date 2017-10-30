import React from "react";
import ReactDOM from "react-dom";
import {
	BrowserRouter as Router, Route, Link, Redirect
} from "react-router-dom";
import "../style/NewObjects.css";

export const NewObjectscreditcard =(props)=>(
	<div className="newobjects">
		<Link to={{pathname:"/firstpage/creditcard/newcreditcard", state:{SaveTag: false}}}><button className="newobjects-link"><div className="newobjects_button_style newobjects_button_style_img"></div></button></Link>
	</div>
);
export default NewObjectscreditcard;