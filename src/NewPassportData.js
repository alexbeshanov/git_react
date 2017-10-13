import React from "react";
import ReactDOM from "react-dom";
import {
	BrowserRouter as Router, Route, Link, Redirect
} from "react-router-dom";
import "./NewPassword.css";
import "./login.css";
import {SavePassportDataFirebase} from "./savepassportdatafirebase";
//import {SavePasswordFirebase} from "./keepall-react";
import userlogin from "./userlogin.js";

export class NewPassportData extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value: "",
			valuePassportName:"",
			valuePassportSurname:"",
			valuePassportThirdName:"",
			valuePassportSex:"",
			valuePassportDateofBirth:"",
			valuePassportPlaceofBirth:"",
			valuePassportNumber:"",
			valuePassportPlaceInput:"",
			valuePassportDateInput:"",
			valuePassportIDInput:"",
			valuePassportRegistration:"",
			ch1:true,
			ch2:true,
			ch3:true,
			ch4:true,
			ch5:true,
			ch6:true,
			ch7:true,
			ch8:true,
			ch9:true,
			ch10:true,
			ch11:true
		};
	}
	checkPassportName=(event)=>{
        this.setState({valuePassportName: event.target.value});
        (event.target.value.length===0)?  this.setState(() => ({ch1: true})):this.setState(() => ({ch1: false}));
    };
	checkPassportSurname=(event)=>{
        this.setState({valuePassportSurname: event.target.value});
        (event.target.value.length===0)?  this.setState(() => ({ch2: true})):this.setState(() => ({ch2: false}));
    };
	checkPassportThirdName=(event)=>{
        this.setState({valuePassportThirdName: event.target.value});
        (event.target.value.length===0)?  this.setState(() => ({ch3: true})):this.setState(() => ({ch3: false}));
    };
	checkPassportSex=(event)=>{
        this.setState({valuePassportSex: event.target.value});
        (event.target.value.length===0)?  this.setState(() => ({ch4: true})):this.setState(() => ({ch4: false}));
    };
	checkPassportDateofBirth=(event)=>{
        this.setState({valuePassportDateofBirth: event.target.value});
        (event.target.value.length===0)?  this.setState(() => ({ch5: true})):this.setState(() => ({ch5: false}));
    };
	checkPassportPlaceofBirth=(event)=>{
        this.setState({valuePassportPlaceofBirth: event.target.value});
        (event.target.value.length===0)?  this.setState(() => ({ch6: true})):this.setState(() => ({ch6: false}));
    };
	checkPassportNumber=(event)=>{
        this.setState({valuePassportNumber: event.target.value});
        (event.target.value.length===0)?  this.setState(() => ({ch7: true})):this.setState(() => ({ch7: false}));
    };
	checkPassportPlaceInput=(event)=>{
        this.setState({valuePassportPlaceInput: event.target.value});
        (event.target.value.length===0)?  this.setState(() => ({ch8: true})):this.setState(() => ({ch8: false}));
    };
	checkPassportDateInput=(event)=>{
        this.setState({valuePassportDateInput: event.target.value});
        (event.target.value.length===0)?  this.setState(() => ({ch9: true})):this.setState(() => ({ch9: false}));
    };
	checkPassportIDInput=(event)=>{
        this.setState({valuePassportIDInput: event.target.value});
        (event.target.value.length===0)?  this.setState(() => ({ch10: true})):this.setState(() => ({ch10: false}));
    };
	checkPassportRegistration=(event)=>{
        this.setState({valuePassportRegistration: event.target.value});
        (event.target.value.length===0)?  this.setState(() => ({ch11: true})):this.setState(() => ({ch11: false}));
    };
    SavePassportData=(event)=>{
        event.preventDefault();
        SavePassportDataFirebase(this.state.valuePassportSurname, this.state.valuePassportName, this.state.valuePassportThirdName, this.state.valuePassportNumber, this.state.valuePassportSex, this.state.valuePassportDateofBirth, this.state.valuePassportPlaceofBirth, this.state.valuePassportPlaceInput, this.state.valuePassportDateInput, this.state.valuePassportIDInput, this.state.valuePassportRegistration);
        alert("Форма сохранена на Firebase!");
        //((!this.state.checkButtonFlag1) && (!this.state.checkButtonFlag2))? this.props.history.push('/firstpage/password'): alert("ERROR PAGE!")
    };
    render()
    {
        return (<div className="newpassword">
				<div className="newpassword-size">
					<div className="newpassword-size_form">
						<form onSubmit={this.SavePassportData} className="newpassport">
							<h1>Новые паспортные данные</h1>
							<div className="newpassword-decoration_div">
							<input name="passportSurname"
								   className="newpassword-decoration_div_input"
								   type="text"
								   placeholder="Фамилия" onInput={this.checkPassportSurname}></input>
							<input name="passportName"
								   className="newpassword-decoration_div_input"
								   type="text"
								   placeholder="Имя" onInput={this.checkPassportName}></input>
							</div>
							<div className="newpassword-decoration_div">
							<input name="passportThirdName"
								   className="newpassword-decoration_div_input"
								   type="text"
								   placeholder="Отчество" onInput={this.checkPassportThirdName}></input>
							<select className="newpassword-decoration_div_input" name="Sex" onInput={this.checkPassportSex}>
								<option value="Мужчина">Мужчина</option>
								<option value="Женщина">Женщина</option>
							</select>
							</div>
							<div className="newpassword-decoration_div">
							<input name="passportNumber"
								   className=" newpassword-decoration_div_input"
								   type="text"
								   placeholder="Серия и номер паспорта" onInput={this.checkPassportNumber}></input>
							<input name="passportDateofBirth"
								className=" newpassword-decoration_div_input"
							type="date" placeholder="01012001" onInput={this.checkPassportDateofBirth}></input>
							</div>
							<input name="passportPlaceofBirth"
								   className="newpassword-decoration newpassport_input"
								   type="text"
								   placeholder="Место рождения" onInput={this.checkPassportPlaceofBirth}></input>
							<input name="passportPlaceInput"
									  className="newpassword-decoration newpassport_input"
									  type="text"
									  placeholder="Место выдачи паспорта" onInput={this.checkPassportPlaceInput}></input>
							<div className="newpassword-decoration_div">
							<input name="passportIDInput"
								   className="newpassword-decoration_div_input"
								   type="text"
								   placeholder="Код подразделения" onInput={this.checkPassportIDInput}></input>
							<input name="passportDateInput"
								   className="newpassword-decoration_div_input"
								   type="date" placeholder="01012001" onInput={this.checkPassportDateInput}></input>
							</div>
							<input name="passportRegistration"
								   className="newpassword-decoration newpassport_input"
								   type="text"
								   placeholder="Место регистрации" onInput={this.checkPassportRegistration}></input>
							<button type="submit" value="Submit"
									disabled={(this.state.ch1 && this.state.ch2 && this.state.ch3 && this.state.ch4 && this.state.ch5 && this.state.ch6 && this.state.ch7 && this.state.ch8 && this.state.ch9 && this.state.ch10 && this.state.ch11)}
									className="form-autentification form-autentification-style form-button__modificate">
								<p>Сохранить</p></button>
						</form>
					</div>
				</div>
			</div>
        )
    }

}
export default NewPassportData;