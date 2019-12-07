import React, { Component } from "react";
//import ReactDom from "react-dom";
import Form from './Form';

class App extends Component {
	render() {
		return (
			<Form />
		);
	}
}
ReactDom.render(<App />, document.getElementById("app"));

function Start() {
	return <h2>Start</h2>;
}

