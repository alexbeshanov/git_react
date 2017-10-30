import React from "react";
import ReactDOM from "react-dom";
import {
	BrowserRouter as Router, Route, Link, Redirect
} from "react-router-dom";
import "../style/NewPassword.css";
import "../style/login.css";
import {SavePasswordFirebase} from "../Save-Remove/savepasswordfirebase";
import {keepalldatabase} from "../Auth/firebaseConfig";
import {UpdatePasswordFirebase} from "../Save-Remove/updateFirebase";
import {RemoveFirebasepasswordOne} from "../Save-Remove/removefirebasepassword";
import {ClassGost} from "../gost";
import {key, userloginNOW} from "../Auth/userlogin";

export class NewPassword extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            value: "",
            valueNewUser: "",
            valueNewPassword: "",
            valueNewTitle: "",
            passwordId: [],
            checkButtonFlag1: true,
            checkButtonFlag2: true,
            checkButtonFlag3: true,
            PrevTitle:"",
            linkData: "",
            SaveTag: this.props.location.state.SaveTag
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
        (event.target.value.length===0)?  this.setState(() => ({checkButtonFlag3: true})):this.setState(() => ({checkButtonFlag3: false}));
    };
    SavePassword=(event)=>{
        event.preventDefault();
        if(this.state.SaveTag===true){
            UpdatePasswordFirebase(this.state.valueNewUser, this.state.valueNewPassword, this.state.valueNewTitle, this.state.PrevTitle);
        } else{
            SavePasswordFirebase(this.state.valueNewUser, this.state.valueNewPassword, this.state.valueNewTitle);
        }
        this.props.history.push('/firstpage/password');
        //((!this.state.checkButtonFlag1) && (!this.state.checkButtonFlag2))? this.props.history.push('/firstpage/password'): alert("ERROR PAGE!")
    };
    DeleteOne=(event)=>{
        event.preventDefault();
        if(this.state.SaveTag===true){
            RemoveFirebasepasswordOne(this.state.PrevTitle);
        }
        this.props.history.push('/firstpage/password');
    };

    componentDidMount(){
        if(this.state.SaveTag===true){
            this.state.linkData=this.props.location.state.linkData;
            const first = keepalldatabase.ref().child("users");
            const firstUser = first.child(userloginNOW.username);
            const second=firstUser.child("password");
            const passwordForm=second.child(this.state.linkData);
            const newUser=passwordForm.child("NewUser");
            var gost=new ClassGost();
            newUser.on("value",snap =>{
                this.setState({
                    valueNewUser: gost.Decode(snap.val(),key).replace(/[^\w\dА-Яа-яЁё\s]/g,'')
                })
            });
            const newPassword=passwordForm.child("NewPassword");
            newPassword.on("value",snap =>{
                this.setState({
                    valueNewPassword: gost.Decode(snap.val(),key).replace(/[^\w\dА-Яа-яЁё\s]/g,'')
                })
            });
            const newTitle=passwordForm.child("NewTitle");
            newTitle.on("value",snap =>{
                this.setState({
                    valueNewTitle: gost.Decode(snap.val(),key).replace(/[^\w\dА-Яа-яЁё\s]/g,''),
                    PrevTitle: gost.Decode(snap.val(),key).replace(/[^\w\dА-Яа-яЁё\s]/g,'')
                })
            });
        } else return;
    };

    render()
    {
        return (<div className="newpassword">
                <div className="newpassword-size">
                    <div className="newpassword-size_form">
                        <form onSubmit={this.SavePassword} className="newpassword-size_form_style">
                            <h1>Новый пароль</h1>
                            <input  value={this.state.valueNewUser} name="newuserinput"
                                   className="form-autentification__input form-autentification-style"
                                   type="text"
                                   placeholder="Имя пользователя" onInput={this.CheckButton1} onChange={this.CheckButton1}></input>
                            <input value={this.state.valueNewPassword} name="newpasswordinput"
                                   className="form-autentification__input form-autentification-style"
                                   type="text"
                                   placeholder="Новый пароль" onInput={this.CheckButton2} onChange={this.CheckButton2}></input>
                            <input value={this.state.valueNewTitle} name="newtitleinput"
                                   className="form-autentification__input form-autentification-style"
                                   type="text"
                                   placeholder="Дополнительные заметки" onInput={this.CheckButton3} onChange={this.CheckButton3}></input>
                            <button type="submit" value="Submit"
                                    disabled={(this.state.checkButtonFlag1 && this.state.checkButtonFlag2 && this.state.checkButtonFlag3)}
                                          className={((!this.state.checkButtonFlag1) && (!this.state.checkButtonFlag2) &&(!this.state.checkButtonFlag3)||(this.state.SaveTag))? "form-autentification form-autentification-style form-button__modificate":"form-autentification form-autentification-style"}><p>Сохранить</p></button>
                            <button type="submit" disabled={!(this.state.SaveTag)} className={(this.state.SaveTag)? "form-autentification form-autentification-style form-button__modificate_delete":"form-autentification form-autentification-style form-button__modificate_delete2"} onClick={this.DeleteOne}><h3>Удалить</h3></button>
                        </form>
                    </div>
                </div>
            </div>
        )
    };
}
export default NewPassword;