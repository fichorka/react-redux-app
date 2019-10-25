import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './components/Navbar';
import Roles from './pages/Roles';
import Employees from './pages/Employees';

class App extends Component {
	render() {
		return (
			<Fragment>
				<Router>

					<Navbar />
					<main className="container main">
						<Switch>

							<Route exact path="/" render={() => (
								<h1 className="page heading" >Home</h1>
							)} />

							<Route path="/roles" render={({ match, history }) => (
								<Roles match={match} history={history} />
							)} />

							<Route path="/employees" render={({ match, history }) => (
								<Employees match={match} history={history} />
							)} />

							<Route path="*" render={({match}) => (
								<h1 className="page heading" >url {match.url} does not match</h1>
							)} />

						</Switch>
					</main>
				</Router>
			</Fragment>
		)
	}
}

export default App