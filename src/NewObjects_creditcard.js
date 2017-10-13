import React from "react";
import ReactDOM from "react-dom";
import {
	BrowserRouter as Router, Route, Link, Redirect
} from "react-router-dom";
import "./NewObjects.css";
import NewCreditCard from "./NewCreditCard.js";


export const NewObjectscreditcard =(props)=>(
	<div className="newobjects">
		<button onClick={()=>{props.history.push("/firstpage/creditcard/newcreditcard");}} className="newobjects-link"><div className="newobjects_button_style"></div></button>
	</div>
);
export default NewObjectscreditcard;