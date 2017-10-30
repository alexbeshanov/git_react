import React from "react";
import ReactDOM from "react-dom";
import {
	BrowserRouter as Router, Route, Link, Redirect
} from "react-router-dom";
import {keepalldatabase} from "../Auth/firebaseConfig";
import "../style/NewObjects.css";
import DataOnePWD from "../NewObject_Module/DataOnePWD";
import NewObjects_password from "../NewObject_Module/NewObjects_password.js";
import {userloginNOW} from "../Auth/userlogin";

export class PassDataList extends React.Component{
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
		const passkeepalldatabase=fruser.child("password");
		passkeepalldatabase.on("value", snap => {
		    this.setState({
				datalist: ((typeof snap.val()) === "object")? ((snap.val()=== null || snap.val()===undefined)? ([]):Object.keys(snap.val())) :[],
			});
		});
	}


	render(){
		return (
			<div className="list_data">
				{this.state.datalist.map((dataOne)=>{
					return(
						<DataOnePWD keyData={dataOne} history={this.history}/>
					);
				})}
				<NewObjects_password history={this.history}/>
			</div>
		);
	}
}
export default PassDataList;