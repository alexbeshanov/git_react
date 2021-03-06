import React from "react";
import {keepalldatabase} from "../Auth/firebaseConfig";
import "../style/NewObjects.css";
import {OnePassportData} from "../NewObject_Module/OnePassportData";
import NewObjectsPassportData from "../NewObject_Module/NewObjects_passportData";

export class PassportDataList extends React.Component {
	constructor(props) {
		super(props);
		this.history = props.history;
		this.state = {
			datalist: []
		};
	}

	componentDidMount() {
		const db1 = keepalldatabase.ref().child("users");
		const db2 = db1.child(localStorage.getItem("USERNAME"));
		const db3 = db2.child("passportData");
		db3.on("value", snap => {
			this.setState({
				datalist: ((typeof snap.val()) === "object") ? ((snap.val() === null || snap.val() === undefined) ? ([]) : Object.keys(snap.val())) : []
			});
		});
	}

	render() {
		return (
			<div className="list_data">
				{
					this.state.datalist.map((dataOne) => {
						return (
							<OnePassportData key={dataOne} keyData={dataOne}/>
						);
					})}
				<NewObjectsPassportData history={this.history}/>
			</div>
		);
	}
}