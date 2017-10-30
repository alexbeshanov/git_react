import React from "react";
import ReactDOM from "react-dom";
import {
	BrowserRouter as Router, Route, Link, Redirect
} from "react-router-dom";
import {keepalldatabase} from "../Auth/firebaseConfig";
import "../style/NewObjects.css";
import DataOneCC from "../NewObject_Module/DataOneCC";
import NewObjects_creditcard from "../NewObject_Module/NewObjects_creditcard";
import {userloginNOW} from "../Auth/userlogin";

export class CreditCardDataList extends React.Component{
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
		const passkeepalldatabase=fruser.child("creditcard");
		passkeepalldatabase.on("value", snap => {
			console.log(snap.val());
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
						<DataOneCC keyData={dataOne}/>
					);
				})}
				<NewObjects_creditcard history={this.history}/>
			</div>
		);
	}
}
export default CreditCardDataList;