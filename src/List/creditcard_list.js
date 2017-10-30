import React from "react";
import ReactDOM from "react-dom";
import {
	BrowserRouter as Router, Route, Link, Switch, Redirect
} from "react-router-dom";
import "../Save-Remove/savepasswordfirebase.js";
import "../Auth/userlogin.js";
import "../style/list.css";
import CreditCardDataList from "./CreditCardList_Data";
import {RemoveFirebasecreditcard} from "../Save-Remove/removafirebasecreditcard";

export const CreditCard=(props)=>(
	<div className="listbox">
		<h2>Список сохраненных кредитных карт</h2>
		<div className="listbox-size">
			<CreditCardDataList history={props.history}/>
		</div>
		<button onClick={RemoveFirebasecreditcard} className="listbox_button"><div className=""><p>Удалить все кредитные карты</p></div></button>
	</div>
);
export default CreditCard;