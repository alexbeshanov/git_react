import React from "react";
import ReactDOM from "react-dom";
import {
	BrowserRouter as Router, Route, Link, Redirect
} from "react-router-dom";
import "./NewPassword.css";
import "./login.css";
import {SaveCreditCardFirebase} from "./savecreditcardfirebase";
import userlogin from "./userlogin.js";

export class NewCreditCard extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value: "",
			valueCardNumber:"",
			valueCardName:"",
			valueCardMonthEnd:"",
			valueCardYearEnd:"",
			valueCardCVS:"",
			valueCardPIN:"",
			checkButtonFlag1: true,
			checkButtonFlag2: true,
			checkButtonFlag3: true,
			checkButtonFlag4: true,
			checkButtonFlag5: true,
			checkButtonFlag6: true
		};
	};
    CheckCardNumber=(event)=>{
        this.setState({valueCardNumber: event.target.value});
        (!event.target.value.length===16)?  this.setState(() => ({checkButtonFlag1: true})):this.setState(() => ({checkButtonFlag1: false}));
    };
    CheckCardName=(event)=>{
        this.setState({valueCardName: event.target.value});
        (event.target.value.length===0)?  this.setState(() => ({checkButtonFlag2: true})):this.setState(() => ({checkButtonFlag2: false}));
    };
    CheckCardMonthEnd=(event)=>{
        this.setState({valueCardMonthEnd: event.target.value});
        (event.target.value.length===0)?  this.setState(() => ({checkButtonFlag3: true})):this.setState(() => ({checkButtonFlag3: false}));
    };
    CheckCardYearEnd=(event)=>{
        this.setState({valueCardYearEnd: event.target.value});
        (event.target.value.length===0)?  this.setState(() => ({checkButtonFlag4: true})):this.setState(() => ({checkButtonFlag4: false}));
    };
    CheckCardCVS=(event)=>{
        this.setState({valueCardCVS: event.target.value});
        (event.target.value.length===0)?  this.setState(() => ({checkButtonFlag5: true})):this.setState(() => ({checkButtonFlag5: false}));
    };
    CheckCardPIN=(event)=>{
        this.setState({valueCardPIN: event.target.value});
        (event.target.value.length===0)?  this.setState(() => ({checkButtonFlag6: true})):this.setState(() => ({checkButtonFlag6: false}));
    };
    SaveCreditCard=(event)=>{
        event.preventDefault();
        this.state.valueCardName=this.state.valueCardName.toUpperCase();
        SaveCreditCardFirebase(this.state.valueCardName, this.state.valueCardNumber, this.state.valueCardMonthEnd, this.state.valueCardYearEnd, this.state.valueCardCVS, this.state.valueCardPIN);
        alert("Форма сохранена на Firebase!");
        //((!this.state.checkButtonFlag1) && (!this.state.checkButtonFlag2))? this.props.history.push('/firstpage/password'): alert("ERROR PAGE!")
    };
    render()
	{
        return (<div className="newpassword">
				<div className="newpassword-size">
					<div className="newpassword-size_form">
						<form onSubmit={this.SaveCreditCard} className="newpassword-size_form_style">
							<h1>Новая кредитная карта</h1>
							<input name="cardnumber"
								   className="form-autentification__input form-autentification-style"
								   type="text"
								   placeholder="Номер карты" onInput={this.CheckCardNumber}></input>
							<div className="newpassword-size_form_style_select">
							<select name="cardmonthend" onInput={this.CheckCardMonthEnd}>
								<option value="01">01</option>
								<option value="02">02</option>
								<option value="03">03</option>
								<option value="04">04</option>
								<option value="05">05</option>
								<option value="06">06</option>
								<option value="07">07</option>
								<option value="08">08</option>
								<option value="09">09</option>
								<option value="10">10</option>
								<option value="11">11</option>
								<option value="12">12</option>
							</select>
							<select name="cardyearend" onInput={this.CheckCardYearEnd}>
								<option value="2017">2017</option>
								<option value="2018">2018</option>
								<option value="2019">2019</option>
								<option value="2020">2020</option>
								<option value="2021">2021</option>
								<option value="2022">2022</option>
								<option value="2023">2023</option>
								<option value="2024">2024</option>
								<option value="2025">2025</option>
								<option value="2026">2026</option>
								<option value="2027">2027</option>
								<option value="2028">2028</option>
								<option value="2029">2029</option>
								<option value="2030">2030</option>
								<option value="2031">2031</option>
								<option value="2032">2032</option>
								<option value="2033">2033</option>
								<option value="2034">2034</option>
								<option value="2035">2035</option>
							</select>
							</div>
							<input name="cardname"
								   className="form-autentification__input form-autentification-style"
								   type="text"
								   placeholder="Имя владельца карты" onInput={this.CheckCardName}></input>
							<input name="cardCVS"
								   className="form-autentification__input form-autentification-style"
								   type="text"
								   placeholder="Код CVS" onInput={this.CheckCardCVS}></input>
							<input name="cardPIN"
								   className="form-autentification__input form-autentification-style"
								   type="text"
								   placeholder="PIN код" onInput={this.CheckCardPIN}></input>
							<button type="submit" value="Submit"
									disabled={(this.state.checkButtonFlag1 && this.state.checkButtonFlag2 && this.state.checkButtonFlag3 && this.state.checkButtonFlag4 && this.state.checkButtonFlag5 && this.state.checkButtonFlag6)}
									className={((!this.state.checkButtonFlag1) && (!this.state.checkButtonFlag2) &&(!this.state.checkButtonFlag3) &&(!this.state.checkButtonFlag4) &&(!this.state.checkButtonFlag5) &&(!this.state.checkButtonFlag6)) ? "form-autentification form-autentification-style form-button__modificate" : "form-autentification form-autentification-style"}>
								<p>Сохранить</p></button>
						</form>
					</div>
				</div>
			</div>
        )
    }
}
export default NewCreditCard;