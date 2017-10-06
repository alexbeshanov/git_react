import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import {
	BrowserRouter as Router, Route, Link
} from "react-router-dom";
class Login extends React.Component {
	constructor(props){
		super(props);
		this.state ={
			value:"",
			disabled: true,
			disabled2: true
		};
		//this.authChangename=this.authChangename.bind(this);
		//this.authChangepass=this.authChangepass.bind(this);
		//this.authSubmit=this.authSubmit.bind(this);
	}
	authChangename = (event) =>{
		this.setState({});
        this.setState({value: event.target.value});
        const username_right="alex";
        if (event.target.value === username_right) {
            this.setState(() => ({ disabled: false }));
        } else if (!this.state.disabled) {
            this.setState(() => ({ disabled: true }));
        }
	}
	authChangepass = (event) => {
        this.setState({});
        this.setState({value: event.target.value});
		const password_right = "12345678";
		if (event.target.value === password_right) {
			this.setState(() => ({disabled2: false}));
		} else if (!this.state.disabled) {
			this.setState(() => ({disabled2: true}));
		}
	}


	authSubmit=(event)=>{
		console.log("WIN");
		this.setState({})
	}
	render(){
		return(
			<div className="autentification">
				<h1>Input Username/Password</h1>
				<form action="/firstpage"  name="login" method="get" className="autentification">
					<input type="text" id="name" className={(!this.state.disabled)? "form-autentification form-autentification-style form-input__modificate":"form-autentification form-autentification-style form-input"} name="username" placeholder="username"
						defaultValue={""}
						value={this.state.value["name"]}
						onInput={this.authChangename}/>
					<input className={(!this.state.disabled2)? "form-autentification form-autentification-style form-input__modificate":"form-autentification form-autentification-style form-input"}
						type="password" id="password" name="password" placeholder="password"
						defaultValue={""}
						value={this.state.value["password"]}
						onInput={this.authChangepass}/>
					<button type="submit" name="button"
						disabled={this.state.disabled2+this.state.disabled}
						className={((!this.state.disabled)&&(!this.state.disabled2))? "form-autentification form-autentification-style form-button__modificate":"form-autentification form-autentification-style form-button"}
						onSubmit={this.authSubmit}><p>Log in</p></button>
				</form>
			</div>
		);
	}
}
const userlogin = {
	uname: "alex",
	upass: "1234"
};
function userData(userlogin){
	return console.log(userlogin.uname + userlogin.upass);
}
const SecondPage=()=>(
	<div className="container">
		<p>Second Page!</p>
		<li><Link to="/">Exit</Link></li>
	</div>
);
const ThirdPage=()=>(
	<div className="container">
		<p>Third Page!</p>
		<li><Link to="/">Exit</Link></li>
	</div>
);
const FirstPage = () =>(

	<div className="container">
		<div className="container__header">
			<Link to="/secondpage"><div className="container__header"><p>Second Page</p></div></Link>
			<Link to="/thirdpage"><div className="container__header"><p>Third Page</p></div></Link>
			<Link to="/"><div className="container__header"><p>Exit</p></div></Link>
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
	document.getElementById("root")
);
export default App;
