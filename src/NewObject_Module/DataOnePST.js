import React, { Component } from "react";
import {
	BrowserRouter as Router, Route, Link, Switch, Redirect
} from "react-router-dom";
import "../style/NewObjects.css";

class DataOnePST extends Component{

	constructor(props){
		super(props);
		this.keyData = props.keyData;
		this.history = props.history;
	}
	render(){
		return(
			<div className="newobjects">
				<Link to={{pathname:"/firstpage/passportdata/newpassportdata", state:{linkData: this.keyData, SaveTag: true}}}><button className="newobjects-link"><div className="newobjects_button_style"><h1>{ this.keyData }</h1></div></button></Link>
			</div>
		);
	}
}

export default DataOnePST;