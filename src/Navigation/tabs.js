import React from "react";
import ReactDOM from "react-dom";
import {
	BrowserRouter as Router, Route, Link, Switch, Redirect
} from "react-router-dom";
import "../style/tabs.css";
import "../Auth/userlogin.js";
import NewPassword from "../NewObject_Module/NewPassword.js";
import Password from "../List/password_list.js";
import Files from "../List/file_list.js";
import CreditCard from "../List/creditcard_list.js";
import Notes from "../List/notes_list.js";
import PassportData from "../List/passportData_list";
import NewNotes from "../NewObject_Module/NewNotes.js";
import NewCreditCard from "../NewObject_Module/NewCreditCard.js";
import NewPassportData from "../NewObject_Module/NewPassportData.js";
import NoInfo from "./NoInfo.js";

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
			<Route path="/firstpage/noinfo" exact component={NoInfo}/>

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