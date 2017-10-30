import React from "react";
import ReactDOM from "react-dom";
import "../style/login.css";
import "../App.css";
import "./userlogin.js";
import {
    BrowserRouter as Router, Route, Link, Redirect
} from "react-router-dom";
import userlogin, {Username, Userpass} from "./userlogin";
import RIPEMD160 from "ripemd160";
import {keepalldatabase} from "./firebaseConfig";
import {userloginNOW} from "./userlogin";

export class Login extends React.Component {
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
    authFirebase=(event)=>{
        if((!this.state.disabled)&&(!this.state.disabled2))
        {
            var PassCheck = new RIPEMD160();
            PassCheck.end(this.state.Userpass);
            var PassCheckEnd=PassCheck.read().toString("hex");
            var db=keepalldatabase.ref("info/"+this.state.Username+"/");
            var db2=db.child("Userpass");
            db2.on("value", snap=>{
                if(PassCheckEnd===snap.val()) {userloginNOW.username=this.state.Username; userloginNOW.userpass=PassCheckEnd; this.props.history.push('/firstpage/noinfo');}
                else {alert("Неверный логин и пароль! Попробуйте еще раз!");this.props.history.push('/');}
            });
            event.preventDefault();
        }
    };
    render(){
        return(
            <div className="autentification">
                <div className="autentification autentification-form">
                <div className="autentification-size">
                    <div className="autentification-sizeblock">
                        <h1>KEEPALL</h1>
                        <p>Вход</p>
                    </div>
                    <div className="autentification-sizeblock">
                        <form name="login" className="form-autentification">
                            <input type="text" id="name" className="form-autentification__input form-autentification form-autentification-style form-input" name="username" placeholder="Имя пользователя"
                                   defaultValue={""}
                                   onInput={this.authChangename}/>
                            <input className="form-autentification__input form-autentification form-autentification-style form-input"
                                   type="password" id="password" name="password" placeholder="Пароль"
                                   defaultValue={""}
                                   onInput={this.authChangepass}/>
                            <button type="submit" name="button"
                                    disabled={this.state.disabled2+this.state.disabled}
                                    className={((!this.state.disabled)&&(!this.state.disabled2))? "form-autentification form-autentification-style form-button__modificate":"form-autentification form-autentification-style form-button"}
                                    onClick={this.authFirebase}><p>Войти</p></button>
                        </form>
                        <Link to="/registration"><p>Зарегистрироваться</p></Link>
                    </div>
                </div>
                </div>
            </div>
        );
    }
}
export default Login;