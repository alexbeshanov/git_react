import React from "react";
import ReactDOM from "react-dom";
import "./login.css";
import "./App.css";
import "./userlogin.js";
import {
    BrowserRouter as Router, Route, Link, Redirect
} from "react-router-dom";
import userlogin from "./userlogin";

export class Login extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            value:"",
            disabled: true,
            disabled2: true
        };
    };
    authChangename = (event) =>{
        this.setState({value: event.target.value});
        (event.target.value === userlogin.uname)? this.setState(() => ({disabled: false})):this.setState(() => ({disabled: true}));
    };
    authChangepass = (event) => {
        this.setState({value: event.target.value});
        (event.target.value === userlogin.upass)? this.setState(() => ({disabled2: false})):this.setState(() => ({disabled2: true}));

    };
    /*authSubmit=(event)=>{
        this.setState({});
        return <Redirect push to={{
            pathname:'/firstpage'
        }}/>
    }*/
    authSubmit=(event)=>{
        ((!this.state.disabled)&&(!this.state.disabled2))? this.props.history.push('/firstpage'): this.props.history.push('/');
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
                                    onClick={this.authSubmit}><p>Войти</p></button>
                        </form>
                    </div>
                </div>
                </div>
            </div>
        );
    }
};
export default Login;