import React from "react";
import ReactDOM from "react-dom";
import {
	BrowserRouter as Router, Route, Link, Redirect
} from "react-router-dom";
import "./NewPassword.css";
import "./login.css";
import {SaveNotesFirebase} from "./savenotesfirebase";
import userlogin from "./userlogin.js";

export class NewNotes extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value: "",
            valueNameTitle: "",
            valueTextArea: ""
		};
	};
	checkNameTitle = (event) => {
        this.setState({valueNameTitle: event.target.value});
	};
	checkTextArea = (event) => {
        this.setState({valueTextArea: event.target.value});
    };
    SaveNotes=(event)=>{
        event.preventDefault();
        SaveNotesFirebase(this.state.valueNameTitle, this.state.valueTextArea);
        alert("Форма сохранена на Firebase!");
    };
    render() {
        return (
            <div className="newpassword">
                <div className="newpassword-size">
                    <div className="newpassword-size_form">
                        <form onSubmit={this.SaveNotes} className="newpassword-size_form_style">
                            <h1>Новая заметка</h1>
                            <input name="nametitle"
                                   className="form-autentification__input form-autentification-style"
                                   type="text"
                                   placeholder="Название заметки" onInput={this.checkNameTitle}></input>
                            <textarea name="textarea"
                                      className="form-autentification__input form-autentification-style"
                                      type="text"
                                      placeholder="Текст заметки" onInput={this.checkTextArea}></textarea>
                            <button type="submit" value="Submit"
                                    className="form-autentification form-autentification-style form-button__modificate">
                                <p>Сохранить</p></button>
                        </form>
                    </div>
                </div>
            </div>
        )
    };
};
export default NewNotes;