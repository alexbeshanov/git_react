import React from "react";
import ReactDOM from "react-dom";
import {
	BrowserRouter as Router, Route, Link, Switch, Redirect
} from "react-router-dom";
import "./tabs.css";
import "./userlogin.js";
import NewObjects from "./NewObjects_password.js";
import userlogin from "./userlogin";
import NewPassword from "./NewPassword.js";
import Password from "./password_list.js";
import Files from "./file_list.js";
import CreditCard from "./creditcard_list.js";
import Notes from "./notes_list.js";
import PassportData from "./passportData_list";
import NewNotes from "./NewNotes.js";
import NewCreditCard from "./NewCreditCard.js";
import NewPassportData from "./NewPassportData.js";

export const Tabs =(props)=>(
	<div className="tabs">
		<ul className="tabs_ul">
			<li className="tabs_li"><Link to="/firstpage/password" className="tabs_Link"><div className="tabs_div">Password</div></Link></li>
			<li className="tabs_li"><Link to="/firstpage/notes" className="tabs_Link"><div className="tabs_div">Notes</div></Link></li>
			<li className="tabs_li"><Link to="/firstpage/creditcard" className="tabs_Link"><div className="tabs_div">Credit Card</div></Link></li>
			<li className="tabs_li"><Link to="/firstpage/passportdata" className="tabs_Link"><div className="tabs_div">Passport Data</div></Link></li>
			<li className="tabs_li"><Link to="/firstpage/file" className="tabs_Link"><div className="tabs_div">Files</div></Link></li>
		</ul>
		<Switch>
			<Route path="/firstpage/password" exact component={Password}/>
			<Route path="/firstpage/notes" exact component={Notes}/>
			<Route path="/firstpage/creditcard" exact component={CreditCard}/>
			<Route path="/firstpage/passportdata" exact component={PassportData}/>
			<Route path="/firstpage/file" exact component={Files}/>

			<Route path="/firstpage/password/newpassword" exact component={NewPassword}/>
			<Route path="/firstpage/notes/newnotes" component={NewNotes}/>
			<Route path="/firstpage/creditcard/newcreditcard" component={NewCreditCard}/>
			<Route path="/firstpage/passportdata/newpassportdata" component={NewPassportData}/>
		</Switch>
	</div>
);

export default Tabs;