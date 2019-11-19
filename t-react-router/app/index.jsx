import React, { Component } from "react";
import ReactDom from "react-dom";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
} from "react-router-dom";

import NestedRouting from "./components/_2NestedRouting/_2NestedRouting";
import BasicRouting from "./components/_1BasicRouting/_1BasicRouting";
import Tematy from "./components/Tematy/Tematy";
import Grupy from "./components/Grupy/Index";

class App extends Component {
	render() {
		const Menu = (
			<Router>
				<div>
					<ul>
						<li><Link to="/">Start</Link></li>
						<li><Link to="/basicRouting">Basic Routing</Link></li>
						<li><Link to="/nestedRouting">Nested Routing</Link></li>
						<li><Link to="/tematy">Tematy</Link></li>
						<li><Link to="/grupy">Grupy</Link></li>
					</ul>

					<Switch>
						<Route path="/basicRouting" component={BasicRouting} />
						<Route path="/nestedRouting" component={NestedRouting}  />
						<Route path="/tematy" component={Tematy}  />
						<Route path="/grupy" component={Grupy}  />
						<Route path="/" component={Start} />
					</Switch>
				</div>
			</Router>

		);

		return (
			Menu
		);
	}
}
ReactDom.render(<App />, document.getElementById("app"));

function Start() {
	return <h2>Start</h2>;
}

