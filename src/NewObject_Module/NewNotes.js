import React from "react";
import ReactDOM from "react-dom";
import {
	BrowserRouter as Router, Route, Link, Redirect
} from "react-router-dom";
import "../style/NewPassword.css";
import "../style/login.css";
import {SaveNotesFirebase} from "../Save-Remove/savenotesfirebase";
import {keepalldatabase} from "../Auth/firebaseConfig";
import {UpdateNotesFirebase} from "../Save-Remove/updateFirebase";
import {RemoveFirebasenotesOne} from "../Save-Remove/removefirebasenotes";
import {key,userloginNOW} from "../Auth/userlogin";
import {ClassGost} from "../gost";

export class NewNotes extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value: "",
            valueNameTitle: "",
            valueTextArea: "",
            checkButtonFlag1: true,
            checkButtonFlag2: true,
            PrevTitle:"",
            linkData: "",
            SaveTag: this.props.location.state.SaveTag
		};
	};
	checkNameTitle = (event) => {
        this.setState({valueNameTitle: event.target.value});
        (event.target.value.length===0)?  this.setState(() => ({checkButtonFlag1: true})):this.setState(() => ({checkButtonFlag1: false}));
	};
	checkTextArea = (event) => {
        this.setState({valueTextArea: event.target.value});
        (event.target.value.length===0)?  this.setState(() => ({checkButtonFlag2: true})):this.setState(() => ({checkButtonFlag2: false}));
    };
    SaveNotes=(event)=>{
        event.preventDefault();
        if(this.state.SaveTag===true){
            UpdateNotesFirebase(this.state.valueNameTitle, this.state.valueTextArea, this.state.PrevTitle);
        } else{
            SaveNotesFirebase(this.state.valueNameTitle, this.state.valueTextArea);
        }
        this.props.history.push('/firstpage/notes/');
    };
    DeleteOne=(event)=>{
        event.preventDefault();
        if(this.state.SaveTag===true){
            RemoveFirebasenotesOne(this.state.PrevTitle);
        }
        this.props.history.push('/firstpage/notes/');
    };
    componentDidMount(){
        if(this.state.SaveTag===true){
            this.state.linkData=this.props.location.state.linkData;
            const first = keepalldatabase.ref().child("users");
            const firstUser = first.child(userloginNOW.username);
            const second=firstUser.child("notes");
            const passwordForm=second.child(this.state.linkData);
            const newUser=passwordForm.child("NewName");
            var gost=new ClassGost();
            newUser.on("value",snap =>{
                this.setState({
                    valueNameTitle: (gost.Decode(snap.val(),key)).replace(/[^\w\dА-Яа-яЁё\s]/g,''),
                    PrevTitle: (gost.Decode(snap.val(),key)).replace(/[^\w\dА-Яа-яЁё\s]/g,'')
                })
            });
            const newPassword=passwordForm.child("NewText");
            newPassword.on("value",snap =>{
                this.setState({
                    valueTextArea: gost.Decode(snap.val(),key).replace(/[^\w\dА-Яа-яЁё\s]/g,'')
                })
            });
        } else return;
    };

    render() {
        return (
            <div className="newpassword">
                <div className="newpassword-size">
                    <div className="newpassword-size_form">
                        <form onSubmit={this.SaveNotes} className="newpassword-size_form_style">
                            <h1>Новая заметка</h1>
                            <input value={this.state.valueNameTitle} name="nametitle"
                                   className="form-autentification__input form-autentification-style"
                                   type="text"
                                   placeholder="Название заметки" onInput={this.checkNameTitle} onChange={this.checkNameTitle}></input>
                            <textarea value={this.state.valueTextArea} name="textarea"
                                      className="form-autentification__input form-autentification-style"
                                      type="text"
                                      placeholder="Текст заметки" onInput={this.checkTextArea} onChange={this.checkTextArea}></textarea>
                            <button type="submit" value="Submit"
                                    disabled={(this.state.checkButtonFlag1 && this.state.checkButtonFlag2)}
                                    className={((!this.state.checkButtonFlag1) && (!this.state.checkButtonFlag2)||(this.state.SaveTag))? "form-autentification form-autentification-style form-button__modificate":"form-autentification form-autentification-style"}>
                                <p>Сохранить</p></button>
                            <button type="submit" disabled={!(this.state.SaveTag)} className={(this.state.SaveTag)? "form-autentification form-autentification-style form-button__modificate_delete":"form-autentification form-autentification-style form-button__modificate_delete2"} onClick={this.DeleteOne}><h3>Удалить</h3></button>
                        </form>
                    </div>
                </div>
            </div>
        )
    };
}
export default NewNotes;