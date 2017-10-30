import React from "react";
import ReactDOM from "react-dom";
import "../style/login.css";
import "../App.css";
import "./userlogin.js";
import {
    BrowserRouter as Router, Route, Link, Redirect
} from "react-router-dom";
import RIPEMD160 from "ripemd160";
import {SaveUserData} from "../Save-Remove/saveimportuserdata";
import {userloginNOW} from "./userlogin";

export class Registration extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            value:"",
            disabled: true,
            disabled2: true,
            Username: "",
            Userpass: ""
        };
    };
    authChangename = (event) =>{
        this.setState({value: event.target.value});
        this.setState({Username: event.target.value});
        (event.target.value.length===0)?  this.setState(() => ({disabled: true})):this.setState(() => ({disabled: false}));
    };
    authChangepass = (event) => {
        this.setState({value: event.target.value});
        this.setState({Userpass: event.target.value});
        (event.target.value.length===0)?  this.setState(() => ({disabled2: true})):this.setState(() => ({disabled2: false}));
    };
    authSubmit=(event)=>{
        if((!this.state.disabled)&&(!this.state.disabled2))
        {
            var NameCheck = new RIPEMD160();
            var PassCheck = new RIPEMD160();
            NameCheck.end(this.state.Username);
            PassCheck.end(this.state.Userpass);
            SaveUserData(NameCheck.read().toString("hex"),PassCheck.read().toString("hex"), this.state.Username);
            userloginNOW.username=this.state.Username;
            userloginNOW.userpass=this.state.Userpass;
            this.props.history.push('/firstpage/noinfo')
        }
        else this.props.history.push('/');
    };
    render(){
        return(
            <div className="autentification">
                <div className="autentification autentification-form">
                    <div className="autentification-size">
                        <div className="autentification-sizeblock">
                            <h1>KEEPALL</h1>
                            <p>Регистрация нового пользователя</p>
                        </div>
                        <div className="autentification-sizeblock">
                            <form name="login" className="form-autentification">
                                <input type="text" id="name" className="form-autentification__input form-autentification form-autentification-style form-input" name="username" placeholder="Введите имя нового пользователя"
                                       defaultValue={""}
                                       onInput={this.authChangename}/>
                                <input className="form-autentification__input form-autentification form-autentification-style form-input"
                                       type="password" id="password" name="password" placeholder="Введите пароль для нового пользователя"
                                       defaultValue={""}
                                       onInput={this.authChangepass}/>
                                <button type="submit" name="button"
                                        disabled={this.state.disabled2+this.state.disabled}
                                        className="form-autentification form-autentification-style form-button__modificate"
                                        onClick={this.authSubmit}><p>Зарегистрироваться</p></button>
                            </form>
                            <Link to="/"><p>Войти</p></Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
}
export default Registration;