import React, { Component } from "react";
import {
	BrowserRouter as Router, Route, Link, Switch, Redirect
} from "react-router-dom";
import "../style/NewObjects.css";

class DataOnePWD extends Component{

	constructor(props){
		super(props);
		this.keyData = props.keyData;
		this.history = props.history;
		console.log(this.keyData);
	}
	render(){
		return(
			<div className="newobjects">
				<Link to={{pathname:"/firstpage/password/newpassword", state:{linkData: this.keyData, SaveTag: true}}}><button className="newobjects-link"><div className="newobjects_button_style"><h1>{ this.keyData }</h1></div></button></Link>
			</div>
		);
	}
}

export default DataOnePWD;