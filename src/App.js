import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import FirstPage from "./firstpage.js";
import SecondPage from "./secondpage.js";
import ThirdPage from "./thirdpage.js";
import Login from "./login.js";
import {
	BrowserRouter as Router, Route, Link, Switch, Redirect
} from "react-router-dom";

const App = () =>(
	<Router>
		<Switch>
			<Route exact path="/" component={Login}/>
			<Route path="/firstpage" component={FirstPage}/>
			<Route path="/secondpage" component={SecondPage}/>
			<Route path="/thirdpage" component={ThirdPage}/>
		</Switch>
	</Router>
);
ReactDOM.render(
	<App />,
	document.getElementById("root")
);
export default App;
