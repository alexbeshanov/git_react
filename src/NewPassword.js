import React from "react";
import ReactDOM from "react-dom";
import {
	BrowserRouter as Router, Route, Link, Redirect
} from "react-router-dom";
import "./NewPassword.css";
import "./login.css";
import {SavePasswordFirebase} from "./savepasswordfirebase";
import userlogin from "./userlogin.js";

export class NewPassword extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            value: "",
            valueNewUser: "",
            valueNewPassword: "",
            valueNewTitle: "",
            checkButtonFlag1: true,
            checkButtonFlag2: true
        };
    };
    CheckButton1=(event)=>{
        this.setState({valueNewUser: event.target.value});
        (event.target.value.length===0)?  this.setState(() => ({checkButtonFlag1: true})):this.setState(() => ({checkButtonFlag1: false}));
    };
    CheckButton2=(event)=>{
        this.setState({valueNewPassword: event.target.value});
        (event.target.value.length===0)?  this.setState(() => ({checkButtonFlag2: true})):this.setState(() => ({checkButtonFlag2: false}));
    };
    CheckButton3=(event)=>{
        this.setState({valueNewTitle: event.target.value});
    };
    SavePassword=(event)=>{
        event.preventDefault();
        SavePasswordFirebase(this.state.valueNewUser, this.state.valueNewPassword, this.state.valueNewTitle);
        alert("Форма сохранена на Firebase!");
        //((!this.state.checkButtonFlag1) && (!this.state.checkButtonFlag2))? this.props.history.push('/firstpage/password'): alert("ERROR PAGE!")
    };
    render()
    {
        return (<div className="newpassword">
                <div className="newpassword-size">
                    <div className="newpassword-size_form">
                        <form onSubmit={this.SavePassword} className="newpassword-size_form_style">
                            <h1>Новый пароль</h1>
                            <input name="newuserinput"
                                   className="form-autentification__input form-autentification-style"
                                   type="text"
                                   placeholder="Имя пользователя" onInput={this.CheckButton1}></input>
                            <input name="newpasswordinput"
                                   className="form-autentification__input form-autentification-style"
                                   type="text"
                                   placeholder="Новый пароль" onInput={this.CheckButton2}></input>
                            <input name="newtitleinput"
                                   className="form-autentification__input form-autentification-style"
                                   type="text"
                                   placeholder="Дополнительные заметки" onInput={this.CheckButton3}></input>
                            <button type="submit" value="Submit"
                                    disabled={(this.state.checkButtonFlag1 && this.state.checkButtonFlag2)}
                                    className={((!this.state.checkButtonFlag1) && (!this.state.checkButtonFlag2))? "form-autentification form-autentification-style form-button__modificate":"form-autentification form-autentification-style"}><p>Сохранить</p></button>
                        </form>
                    </div>
                </div>
            </div>
        )
    };
}
export default NewPassword;