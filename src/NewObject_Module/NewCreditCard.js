import React from "react";
import ReactDOM from "react-dom";
import {
	BrowserRouter as Router, Route, Link, Redirect
} from "react-router-dom";
import "../style/NewPassword.css";
import "../style/login.css";
import {SaveCreditCardFirebase} from "../Save-Remove/savecreditcardfirebase";
import {UpdateCreditCardFirebase} from "../Save-Remove/updateFirebase"
import {keepalldatabase} from "../Auth/firebaseConfig";
import {RemoveFirebasecreditcardOne} from "../Save-Remove/removafirebasecreditcard";
import {key, userloginNOW} from "../Auth/userlogin";
import {ClassGost} from "../gost";

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
			checkButtonFlag6: true,
            PrevTitle:"",
            linkData: "",
            SaveTag: this.props.location.state.SaveTag
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
        if(this.state.SaveTag===true){
            UpdateCreditCardFirebase(this.state.valueCardName, this.state.valueCardNumber, this.state.valueCardMonthEnd, this.state.valueCardYearEnd, this.state.valueCardCVS, this.state.valueCardPIN, this.state.PrevTitle);
        } else{
            SaveCreditCardFirebase(this.state.valueCardName, this.state.valueCardNumber, this.state.valueCardMonthEnd, this.state.valueCardYearEnd, this.state.valueCardCVS, this.state.valueCardPIN);
        }
        this.props.history.push('/firstpage/creditcard/');
    };
    DeleteOne=(event)=>{
        event.preventDefault();
        if(this.state.SaveTag===true){
            RemoveFirebasecreditcardOne(this.state.PrevTitle);
        }
        this.props.history.push('/firstpage/creditcard/');
    };

    componentDidMount(){
        if(this.state.SaveTag===true){
            this.state.linkData=this.props.location.state.linkData;
            const first = keepalldatabase.ref().child("users");
            const firstUser = first.child(userloginNOW.username);
            const second=firstUser.child("creditcard");
            const passwordForm=second.child(this.state.linkData);
            const newUser=passwordForm.child("CardName");
            var gost=new ClassGost();
            newUser.on("value",snap =>{
                this.setState({
                    valueCardName: gost.Decode(snap.val(),key).replace(/[^\w\dА-Яа-яЁё\s]/g,'')
                })
            });
            const newNumber=passwordForm.child("CardNumber");
            newNumber.on("value",snap =>{
                this.setState({
                    valueCardNumber: gost.Decode(snap.val(),key).replace(/[^\w\dА-Яа-яЁё\s]/g,''),
                    PrevTitle: gost.Decode(snap.val(),key).replace(/[^\w\dА-Яа-яЁё\s]/g,'')
                })
            });
            const newPIN=passwordForm.child("CardPIN");
            newPIN.on("value",snap =>{
                this.setState({
                    valueCardPIN: gost.Decode(snap.val(),key).replace(/[^\w\dА-Яа-яЁё\s]/g,'')
                })
            });
            const newYearEnd=passwordForm.child("CardYearEnd");
            newYearEnd.on("value",snap =>{
                this.setState({
                    valueCardYearEnd: gost.Decode(snap.val(),key).replace(/[^\w\dА-Яа-яЁё\s]/g,'')
                })
            });
            const newMonthEnd=passwordForm.child("CardMonth");
            newMonthEnd.on("value",snap =>{
                this.setState({
                    valueCardMonthEnd: gost.Decode(snap.val(),key).replace(/[^\w\dА-Яа-яЁё\s]/g,'')
                })
            });
            const newCVS=passwordForm.child("CardCVS");
            newCVS.on("value",snap =>{
                this.setState({
                    valueCardCVS: gost.Decode(snap.val(),key).replace(/[^\w\dА-Яа-яЁё\s]/g,'')
                })
            });
        } else return;
    };

    render()
	{
        return (<div className="newpassword">
				<div className="newpassword-size">
					<div className="newpassword-size_form">
						<form onSubmit={this.SaveCreditCard} className="newpassword-size_form_style">
							<h1>Новая кредитная карта</h1>
							<input value={this.state.valueCardNumber}name="cardnumber"
								   className="form-autentification__input form-autentification-style"
								   type="text"
								   placeholder="Номер карты" onInput={this.CheckCardNumber} onChange={this.CheckCardNumber}></input>
							<div className="newpassword-size_form_style_select">
							<select value={this.state.valueCardMonthEnd} name="cardmonthend" onInput={this.CheckCardMonthEnd} onChange={this.CheckCardMonthEnd}>
								<option value="январь">01</option>
								<option value="февраль">02</option>
								<option value="март">03</option>
								<option value="апрель">04</option>
								<option value="май">05</option>
								<option value="июнь">06</option>
								<option value="июль">07</option>
								<option value="август">08</option>
								<option value="сентябрь">09</option>
								<option value="октябрь">10</option>
								<option value="ноябрь">11</option>
								<option value="декабрь">12</option>
							</select>
							<select value={this.state.valueCardYearEnd} name="cardyearend" onInput={this.CheckCardYearEnd} onChange={this.CheckCardYearEnd}>
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
							<input value={this.state.valueCardName} name="cardname"
								   className="form-autentification__input form-autentification-style"
								   type="text"
								   placeholder="Имя владельца карты" onInput={this.CheckCardName} onChange={this.CheckCardName}></input>
							<input value={this.state.valueCardCVS} name="cardCVS"
								   className="form-autentification__input form-autentification-style"
								   type="text"
								   placeholder="Код CVS" onInput={this.CheckCardCVS} onChange={this.CheckCardCVS}></input>
							<input value={this.state.valueCardPIN} name="cardPIN"
								   className="form-autentification__input form-autentification-style"
								   type="text"
								   placeholder="PIN код" onInput={this.CheckCardPIN} onChange={this.CheckCardPIN}></input>
							<button type="submit" value="Submit"
									disabled={(this.state.checkButtonFlag1 && this.state.checkButtonFlag2 && this.state.checkButtonFlag3 && this.state.checkButtonFlag4 && this.state.checkButtonFlag5 && this.state.checkButtonFlag6)}
									className={(this.state.SaveTag)||((!this.state.checkButtonFlag1) && (!this.state.checkButtonFlag2) &&(!this.state.checkButtonFlag3) &&(!this.state.checkButtonFlag4) &&(!this.state.checkButtonFlag5) &&(!this.state.checkButtonFlag6)) ? "form-autentification form-autentification-style form-button__modificate" : "form-autentification form-autentification-style"}>
								<p>Сохранить</p></button>
                            <button type="submit" disabled={!(this.state.SaveTag)} className={(this.state.SaveTag)? "form-autentification form-autentification-style form-button__modificate_delete":"form-autentification form-autentification-style form-button__modificate_delete2"} onClick={this.DeleteOne}><h3>Удалить</h3></button>
                        </form>
					</div>
				</div>
			</div>
        )
    }
}
export default NewCreditCard;