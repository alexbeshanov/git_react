import React from "react";
import ReactDOM from "react-dom";
import {
	BrowserRouter as Router, Route, Link, Redirect
} from "react-router-dom";
import "./NewObjects.css";
import NewPassword from "./NewPassword.js";


export const NewObjects_password =(props)=>(
	<div className="newobjects">
		<button onClick={()=>{props.history.push("/firstpage/password/newpassword");}} className="newobjects-link"><div className="newobjects_button_style"></div></button>
	</div>
);
export default NewObjects_password;