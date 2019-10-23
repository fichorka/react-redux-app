import React, { Component, Fragment } from 'react';
import RoleForm from './containers/RoleForm'
import DataList from './containers/DataList'
import EmployeeForm from './containers/EmployeeForm'
import LayoutGroup from './components/LayoutGroup'
import { TEMPLATES } from './constants'
import { getAllEmployees, getAllRoles } from './reducers';
import { removeRole, removeEmployee } from './actions'
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
								<h1>Home</h1>
							)} />

							<Route path="/roles" render={({ match, history }) => (
								<Roles match={match} history={history} />
							)} />

							<Route path="/employees" render={({ match, history }) => (
								<Employees match={match} history={history} />
							)} />

						</Switch>
					</main>
				</Router>
			</Fragment>
		)
	}
}

export default App