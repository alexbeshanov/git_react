//import React, { Component } from 'react';
import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import {
    BrowserRouter as Router, Route, Link
} from 'react-router-dom';
//Route,
//  Link,
//Redirect,
//withRouter
class Login extends React.Component {
    constructor(props){
        super(props);
        this.state ={value:'', disabled: true, disabled2: true};
        this.authChangename=this.authChangename.bind(this);
        this.authChangepass=this.authChangepass.bind(this);
        this.authSubmit=this.authSubmit.bind(this)
    }
    authChangename(event){
        this.setState({value: event.target.value});
        const username_right="alex";
        if (event.target.value === username_right) {
            this.setState(() => ({ disabled: false }))
        } else if (!this.state.disabled) {
            this.setState(() => ({ disabled: true }))
        }
    }
    authChangepass(event) {
        this.setState({value: event.target.value});
        const password_right = "1234";
        if (event.target.value === password_right) {
            this.setState(() => ({disabled2: false}))
        } else if (!this.state.disabled) {
            this.setState(() => ({disabled2: true}))
        }
    }


    authSubmit(event){
        userData(userlogin);
        alert("WIN");
    }
    render(){
        return(
            <div className="Form_autentification_main">
                <h1>Input Username/Password</h1>
                <form action="/firstpage" className="Form_autentification_main" name="login" method="get">
                    <input className="Form_autentification Form_autentification_design"
                           type="text" ref="name" id="name" name="username" placeholder="username"
                           defaultValue={""}
                           value={this.state.value["name"]}
                           onInput={this.authChangename}
                           style={Object.assign({}, styles.input, !this.state.disabled && styles.inputEnabled)}/>
                    <input className="Form_autentification Form_autentification_design"
                           type="password" id="password" ref="password" name="password" placeholder="password"
                           defaultValue={""}
                           value={this.state.value["password"]}
                           onInput={this.authChangepass}
                           style={Object.assign({}, styles.input, !this.state.disabled2 && styles.inputEnabled)}/>
                    <button type="submit" name="button" style={Object.assign({}, styles.input, (!this.state.disabled && !this.state.disabled2) && styles.inputsubmitEnabled)}
                            disabled={this.state.disabled2+this.state.disabled}
                            className="Form_autentification Form_autentification_design"
                            onSubmit={this.authSubmit}>Log in</button>
                </form>
            </div>
        );
    };
}
const userlogin = {
    uname: 'alex',
    upass: '1234'
};
function userData(userlogin){
    return console.log(userlogin.uname + userlogin.upass);
}
const styles = {
    input: {
        backgroundColor: '#999999',
        transition: '1.25s all'
    },
    inputsubmit: {
        backgroundColor: '#999999'
    },
    inputsubmitEnabled: {
        backgroundColor: '#008000',
        cursor: 'pointer',
        transition: '1.25s all'
    },
    inputEnabled: {
        backgroundColor: '#ffffff'
    }
};
const SecondPage=()=>(
    <div className="firstPageMain">
        <p>Second Page!</p>
        <li><Link to="/">Exit</Link></li>
    </div>
);
const ThirdPage=()=>(
    <div className="firstPageMain">
        <p>Third Page!</p>
        <li><Link to="/">Exit</Link></li>
    </div>
);
const FirstPage = () =>(

    <div className="firstPageMain">
        <div className="firstPageHeader">
            <Link to="/secondpage"><div className="firstPageHeader"><p>Second Page</p></div></Link>
            <Link to="/thirdpage"><div className="firstPageHeader"><p>Third Page</p></div></Link>
            <Link to="/"><div className="firstPageHeader"><p>Exit</p></div></Link>
        </div>
        <h1>Приветствую тебя, {userlogin.uname}!</h1>

    </div>
);
const App = () =>(
    <Router>
        <div>
            <Route exact path="/" component={Login}/>
            <Route path="/firstpage" component={FirstPage}/>
            <Route path="/secondpage" component={SecondPage}/>
            <Route path="/thirdpage" component={ThirdPage}/>
        </div>
    </Router>
);
ReactDOM.render(
    <App />,
    document.getElementById('root')
);
export default App;
