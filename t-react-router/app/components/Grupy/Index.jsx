import React, { Component } from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
} from "react-router-dom";
import Nowy from "./Nowy";
import Edycja from "./Edycja";
import Szczegoly from "./Szczegoly";

export default class Index extends Component {
  render() {
    const {	match } = this.props;
    let nr = 4;
    return (
			<Router>
				<div>
					<h2>Grupy danych</h2>
					<hr />
					<ul>
            <li><Link to={`${match.url}/nowy`}>Nowy</Link></li>
						<li><Link to={`${match.url}/edycja/${nr}`}>Edycja</Link></li>
						<li><Link to={`${match.url}/szczegoly/${nr}`}>Szczegóły</Link></li>
						{/* <li><Link to={`${match.url}/beztematu`}>Bez tematu</Link></li> */}
					</ul>
					<Switch>
            <Route path={`${match.path}/index`}       component={Index} />
            <Route path={`${match.path}/nowy`}        component={Nowy} />
						<Route path={`${match.path}/edycja/:id`}  component={Edycja} />
						<Route path={`${match.path}/szczegoly/:id`}   component={Szczegoly} />
						{/* <Route path={match.path}>
							<h3>Wybierz akcję...</h3>
						</Route> */}
					</Switch>
				</div>
			</Router>
    )
  }
}
