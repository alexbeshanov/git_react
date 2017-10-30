import React from "react";
import ReactDOM from "react-dom";
import {
	BrowserRouter as Router, Route, Link, Redirect
} from "react-router-dom";
import {keepalldatabase} from "../Auth/firebaseConfig";
import "../style/NewObjects.css";
import DataOnePST from "../NewObject_Module/DataOnePST";
import NewObjects_passportData from "../NewObject_Module/NewObjects_passportData.js";
import {userloginNOW} from "../Auth/userlogin";

export class PassportDataList extends React.Component{
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
		const passkeepalldatabase=fruser.child("passportData");
		passkeepalldatabase.on("value", snap => {
			this.setState({
				datalist: ((typeof snap.val()) === "object")? ((snap.val()=== null || snap.val()===undefined)? ([]):Object.keys(snap.val())) :[]
			});
		});
	}

	render(){
		return (
			<div className="list_data">
				{this.state.datalist.map((dataOne)=>{
					return(
						<DataOnePST keyData={dataOne}/>
					);
				})}
				<NewObjects_passportData history={this.history}/>
			</div>
		);
	}
}