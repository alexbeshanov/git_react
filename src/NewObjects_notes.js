import React from "react";
import ReactDOM from "react-dom";
import {
	BrowserRouter as Router, Route, Link, Redirect
} from "react-router-dom";
import "./NewObjects.css";
import NewNotes from "./NewNotes.js";


export const NewObjects_notes =(props)=>(
	<div className="newobjects">
		<button onClick={()=>{props.history.push("/firstpage/notes/newnotes");}} className="newobjects-link"><div className="newobjects_button_style"></div></button>
	</div>
);
export default NewObjects_notes;