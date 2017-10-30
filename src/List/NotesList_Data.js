import React from "react";
import ReactDOM from "react-dom";
import {
	BrowserRouter as Router, Route, Link, Redirect
} from "react-router-dom";
import {keepalldatabase} from "../Auth/firebaseConfig";
import "../style/NewObjects.css";
import DataOneN from "../NewObject_Module/DataOneN";
import NewObjects_notes from "../NewObject_Module/NewObjects_notes.js";
import {userloginNOW} from "../Auth/userlogin";

export class NotesDataList extends React.Component{
	constructor(props) {
		super(props);
		this.history=props.history;
		this.state = {
			datalist: []
		};
	}

	componentDidMount(){
		const fr = keepalldatabase.ref().child("users");
		const fruser=fr.child(userloginNOW.username);
		const passkeepalldatabase=fruser.child("notes");
		passkeepalldatabase.on("value", snap => {
			console.log(snap.val());
			this.setState({
				datalist:  ((typeof snap.val()) === "object")? ((snap.val()=== null || snap.val()===undefined)? ([]):Object.keys(snap.val())) :[]
			});
		});
	}

	render(){
		return (
			<div className="list_data">
				{this.state.datalist.map((dataOne)=>{
					return(
						<DataOneN keyData={dataOne}/>
					);
				})}
				<NewObjects_notes history={this.history}/>
			</div>
		);
	}
}
export default NotesDataList;
