import React from "react";
import ReactDOM from "react-dom";
import {
	BrowserRouter as Router, Route, Link, Switch, Redirect
} from "react-router-dom";
import "../Save-Remove/savepasswordfirebase.js";
import "../Auth/userlogin.js";
import "../style/list.css";
import NotesDataList from "./NotesList_Data";
import {RemoveFirebasenotes} from "../Save-Remove/removefirebasenotes";

export const Notes=(props)=>(
	<div className="listbox">
		<h2>Список сохраненных заметок</h2>
		<div className="listbox-size">
			<NotesDataList history={props.history}/>
		</div>
		<button onClick={RemoveFirebasenotes} className="listbox_button"><div className=""><p>Удалить все заметки</p></div></button>
	</div>
);
export default Notes;