import React from "react";
import ReactDOM from "react-dom";
import {
	BrowserRouter as Router, Route, Link, Redirect
} from "react-router-dom";
import "../style/NewPassword.css";
import "../style/login.css";
import {SavePassportDataFirebase} from "../Save-Remove/savepassportdatafirebase";
import {UpdatePassportDataFirebase} from "../Save-Remove/updateFirebase";
import {keepalldatabase} from "../Auth/firebaseConfig";
import {RemoveFirebasepassportDataOne} from "../Save-Remove/removefirebasepassportData";
import {key, userloginNOW} from "../Auth/userlogin";
import {ClassGost} from "../gost";

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
			ch11:true,
            PrevTitle:"",
            linkData: "",
            SaveTag: this.props.location.state.SaveTag
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
        if(this.state.SaveTag===true){
            UpdatePassportDataFirebase(this.state.valuePassportSurname, this.state.valuePassportName, this.state.valuePassportThirdName, this.state.valuePassportNumber, this.state.valuePassportSex, this.state.valuePassportDateofBirth, this.state.valuePassportPlaceofBirth, this.state.valuePassportPlaceInput, this.state.valuePassportDateInput, this.state.valuePassportIDInput, this.state.valuePassportRegistration, this.state.PrevTitle);
        } else{
            SavePassportDataFirebase(this.state.valuePassportSurname, this.state.valuePassportName, this.state.valuePassportThirdName, this.state.valuePassportNumber, this.state.valuePassportSex, this.state.valuePassportDateofBirth, this.state.valuePassportPlaceofBirth, this.state.valuePassportPlaceInput, this.state.valuePassportDateInput, this.state.valuePassportIDInput, this.state.valuePassportRegistration);
        }
        this.props.history.push('/firstpage/passportData/');
        //((!this.state.checkButtonFlag1) && (!this.state.checkButtonFlag2))? this.props.history.push('/firstpage/password'): alert("ERROR PAGE!")
    };
    DeleteOne=(event)=>{
        event.preventDefault();
        if(this.state.SaveTag===true){
            RemoveFirebasepassportDataOne(this.state.PrevTitle);
        }
        this.props.history.push('/firstpage/passportData/');
    };

    componentDidMount(){
        if(this.state.SaveTag===true){
            this.state.linkData=this.props.location.state.linkData;
            const first = keepalldatabase.ref().child("users");
            const firstUser = first.child(userloginNOW.username);
            const second=firstUser.child("passportData");
            const passwordForm=second.child(this.state.linkData);
            const newUser=passwordForm.child("Name");
            var gost=new ClassGost();
            newUser.on("value",snap =>{
                this.setState({
                    valuePassportName: gost.Decode(snap.val(),key).replace(/[^\w\dА-Яа-яЁё\s]/g,'')
                })
            });
            const newSurname=passwordForm.child("Surname");
            newSurname.on("value",snap =>{
                this.setState({
                    valuePassportSurname: gost.Decode(snap.val(),key).replace(/[^\w\dА-Яа-яЁё\s]/g,''),
                    PrevTitle: gost.Decode(snap.val(),key).replace(/[^\w\dА-Яа-яЁё\s]/g,'')
                })
            });
            const newThirdName=passwordForm.child("ThirdName");
            newThirdName.on("value",snap =>{
                this.setState({
                    valuePassportThirdName: gost.Decode(snap.val(),key).replace(/[^\w\dА-Яа-яЁё\s]/g,'')
                })
            });
            const Number=passwordForm.child("Number");
            Number.on("value",snap =>{
                this.setState({
                    valuePassportNumber: gost.Decode(snap.val(),key).replace(/[^\w\dА-Яа-яЁё\s]/g,'')
                })
            });
            const Sex=passwordForm.child("Sex");
            Sex.on("value",snap =>{
                this.setState({
                    valuePassportSex: gost.Decode(snap.val(),key).replace(/[^\w\dА-Яа-яЁё\s]/g,'')
                })
            });
            const PlaceofBirth=passwordForm.child("PlaceofBirth");
            PlaceofBirth.on("value",snap =>{
                this.setState({
                    valuePassportPlaceofBirth: gost.Decode(snap.val(),key).replace(/[^\w\dА-Яа-яЁё\s]/g,'')
                })
            });
            const DateofBirth=passwordForm.child("DateofBirth");
            DateofBirth.on("value",snap =>{
                this.setState({
                    valuePassportDateofBirth: gost.Decode(snap.val(),key).replace(/[^\w\dА-Яа-яЁё\s]/g,'')
                })
            });
            const DateInput=passwordForm.child("DateInput");
            DateInput.on("value",snap =>{
                this.setState({
                    valuePassportDateInput: gost.Decode(snap.val(),key).replace(/[^\w\dА-Яа-яЁё\s]/g,'')
                })
            });
            const PlaceInput=passwordForm.child("PlaceInput");
            PlaceInput.on("value",snap =>{
                this.setState({
                    valuePassportPlaceInput: gost.Decode(snap.val(),key).replace(/[^\w\dА-Яа-яЁё\s]/g,'')
                })
            });
            const IDInput=passwordForm.child("IDInput");
            IDInput.on("value",snap =>{
                this.setState({
                    valuePassportIDInput: gost.Decode(snap.val(),key).replace(/[^\w\dА-Яа-яЁё\s]/g,'')
                })
            });
            const PlaceRegistration=passwordForm.child("PlaceRegistration");
            PlaceRegistration.on("value",snap =>{
                this.setState({
                    valuePassportRegistration: gost.Decode(snap.val(),key).replace(/[^\w\dА-Яа-яЁё\s]/g,'')
                })
            });
        } else return;
    };

    render()
    {
        return (<div className="newpassword">
				<div className="newpassword-size">
					<div className="newpassword-size_form">
						<form onSubmit={this.SavePassportData} className="newpassport">
							<h1>Новые паспортные данные</h1>
							<div className="newpassword-decoration_div">
							<input value={this.state.valuePassportSurname} name="passportSurname"
								   className="newpassword-decoration_div_input"
								   type="text"
								   placeholder="Фамилия" onInput={this.checkPassportSurname} onChange={this.checkPassportSurname}></input>
							<input value={this.state.valuePassportName} name="passportName"
								   className="newpassword-decoration_div_input"
								   type="text"
								   placeholder="Имя" onInput={this.checkPassportName} onChange={this.checkPassportName}></input>
							</div>
							<div className="newpassword-decoration_div">
							<input value={this.state.valuePassportThirdName} name="passportThirdName"
								   className="newpassword-decoration_div_input"
								   type="text"
								   placeholder="Отчество" onInput={this.checkPassportThirdName} onChange={this.checkPassportThirdName}></input>
							<select value={this.state.valuePassportSex} className="newpassword-decoration_div_input" name="Sex" onInput={this.checkPassportSex} onChange={this.checkPassportSex}>
								<option value="Мужчина">Мужчина</option>
								<option value="Женщина">Женщина</option>
							</select>
							</div>
							<div className="newpassword-decoration_div">
							<input value={this.state.valuePassportNumber} name="passportNumber"
								   className=" newpassword-decoration_div_input"
								   type="text"
								   placeholder="Серия и номер паспорта" onInput={this.checkPassportNumber} onChange={this.checkPassportNumber}></input>
							<input value={this.state.valuePassportDateofBirth} name="passportDateofBirth"
								className=" newpassword-decoration_div_input"
							type="date" placeholder="01012001" onInput={this.checkPassportDateofBirth} onChange={this.checkPassportDateofBirth}></input>
							</div>
							<input value={this.state.valuePassportPlaceofBirth} name="passportPlaceofBirth"
								   className="newpassword-decoration newpassport_input"
								   type="text"
								   placeholder="Место рождения" onInput={this.checkPassportPlaceofBirth} onChange={this.checkPassportPlaceofBirth}></input>
							<input value={this.state.valuePassportPlaceInput} name="passportPlaceInput"
									  className="newpassword-decoration newpassport_input"
									  type="text"
									  placeholder="Место выдачи паспорта" onInput={this.checkPassportPlaceInput} onChange={this.checkPassportPlaceInput}></input>
							<div className="newpassword-decoration_div">
							<input value={this.state.valuePassportIDInput} name="passportIDInput"
								   className="newpassword-decoration_div_input"
								   type="text"
								   placeholder="Код подразделения" onInput={this.checkPassportIDInput} onChange={this.checkPassportIDInput}></input>
							<input value={this.state.valuePassportDateInput} name="passportDateInput"
								   className="newpassword-decoration_div_input"
								   type="date" placeholder="01012001" onInput={this.checkPassportDateInput} onChange={this.checkPassportDateInput}></input>
							</div>
							<input value={this.state.valuePassportRegistration} name="passportRegistration"
								   className="newpassword-decoration newpassport_input"
								   type="text"
								   placeholder="Место регистрации" onInput={this.checkPassportRegistration} onChange={this.checkPassportRegistration}></input>
							<button type="submit" value="Submit"
									disabled={(this.state.ch1 && this.state.ch2 && this.state.ch3 && this.state.ch4 && this.state.ch5 && this.state.ch6 && this.state.ch7 && this.state.ch8 && this.state.ch9 && this.state.ch10 && this.state.ch11)}
									className={(this.state.SaveTag)||((!this.state.ch1) && (!this.state.ch2) && (!this.state.ch3) && (!this.state.ch4) && (!this.state.ch5) && (!this.state.ch6) && (!this.state.ch7) && (!this.state.ch8) && (!this.state.ch9) && (!this.state.ch10) && (!this.state.ch11))?"form-autentification form-autentification-style form-button__modificate":"form-autentification form-autentification-style"}>
								<p>Сохранить</p></button>
                            <button type="submit" disabled={!(this.state.SaveTag)} className={(this.state.SaveTag)? "form-autentification form-autentification-style form-button__modificate_delete":"form-autentification form-autentification-style form-button__modificate_delete2"} onClick={this.DeleteOne}><h3>Удалить</h3></button>
						</form>
					</div>
				</div>
			</div>
        )
    }

}
export default NewPassportData;