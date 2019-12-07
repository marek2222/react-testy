import React, { Component } from "react";
import ReactDom from "react-dom";

class App extends Component {
	formatName = user => {
		return user.firstName + " " + user.lastName;
	};

	render() {
		const user = {
			firstName: "Gracjan",
			lastName: "Brzeczyszczykiewicz"
		};
    return (
      <div>{`Witaj, ${formatName(user)}`}</div>
    );
	}
}
ReactDom.render(<App />, document.getElementById("app"));
