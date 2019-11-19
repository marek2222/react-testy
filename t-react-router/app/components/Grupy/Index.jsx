import React, { Component } from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	useRouteMatch,
	useParams
} from "react-router-dom";

export default class Index extends Component {
	render() {
		return (
			<Router>
				<div>
          <hr/>
          <p>Grupy</p>
					{/* <ul>
						<li><Link to="/">Start</Link></li>
						<li><Link to="/kontakt">Kontakt</Link></li>
						<li><Link to="/tematy">Tematy</Link></li>
					</ul>

					<Switch>
						<Route path="/kontakt" 	component={Kontakt} />
						<Route path="/tematy" 	component={Tematy} />
						<Route path="/" 				component={Start} />
					</Switch> */}

          <ul>
            <li>
              <Link to={`${match.url}/komponenty`}>Komponenty</Link>
            </li>
            <li>
              <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
            </li>
          </ul>

          {/* The Tematy page has its own <Switch> with more routes
              that build on the /Tematy URL path. You can think of the
              2nd <Route> here as an "index" page for all Tematy, or
              the page that is shown when no topic is selected */}
          <Switch>
            <Route path={`${match.path}/:tematID`}>
              <Temat />
            </Route>
            <Route path={match.path}>
              <h3>Wybierz temat...</h3>
            </Route>
          </Switch>

				</div>
			</Router>
		);
	}
}

function Temat() {
	let { tematID } = useParams();
	return <h3>Wywołany temat ID: {tematID}</h3>;
}
function Start() {
	return <h2>Start</h2>;
}

function Kontakt() {
	return <h2>Kontakt</h2>;
}

function Tematy() {
	let match = useRouteMatch();

	return (
		<div>
			<h2>Tematy</h2>

			<ul>
				<li>
					<Link to={`${match.url}/komponenty`}>Komponenty</Link>
				</li>
				<li>
					<Link to={`${match.url}/props-v-state`}>Props v. State</Link>
				</li>
			</ul>

			{/* The Tematy page has its own <Switch> with more routes
          that build on the /Tematy URL path. You can think of the
          2nd <Route> here as an "index" page for all Tematy, or
          the page that is shown when no topic is selected */}
			<Switch>
				<Route path={`${match.path}/:tematID`}>
					<Temat />
				</Route>
				<Route path={match.path}>
					<h3>Wybierz temat...</h3>
				</Route>
			</Switch>
		</div>
	);
}

