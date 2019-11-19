import React, { Component } from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	useParams
} from "react-router-dom";
import Komponenty from "./Komponenty";
import Propsy from "./Propsy";

export default class Tematy extends Component {

  render() {
    // let match = useRouteMatch();
    // const {	match: { params: { grupaId }}} = this.props;
    const {	match } = this.props;
		return (
			<Router>
				<div>
					<h2>Tematy</h2>
					<hr />
					<ul>
						<li><Link to={`${match.url}/komponenty`}>Komponenty</Link></li>
						<li><Link to={`${match.url}/propsy`}>Propsy</Link></li>
						<li><Link to={`${match.url}/beztematu`}>Bez tematu</Link></li>
					</ul>

					{/* The Tematy page has its own <Switch> with more routes
          that build on the /Tematy URL path. You can think of the
          2nd <Route> here as an "index" page for all Tematy, or
          the page that is shown when no topic is selected */}
					<Switch>
						<Route path={`${match.path}/komponenty`} component={Komponenty} />>
						<Route path={`${match.path}/propsy`} component={Propsy} />>
						<Route path={match.path}>
							<h3>Wybierz temat...</h3>
						</Route>
					</Switch>
				</div>
			</Router>
		);
	}
}
// function Temat() {
// 	let { tematID } = useParams();
// 	return <h3>Wywołany temat ID: {tematID}</h3>;
// }

