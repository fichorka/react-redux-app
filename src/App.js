import React, { Component, Fragment } from 'react';
import AddRole from './containers/AddRole'
import DataList from './containers/DataList'
import AddEmployee from './containers/AddEmployee'
import LayoutGroup from './components/LayoutGroup'
import { addEmployee, addRole } from './actions'
import { TEMPLATES } from './constants'
import { getAllEmployees, getAllRoles } from './reducers';
import { removeRole, removeEmployee } from './actions'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import Navbar from './components/Navbar';

class App extends Component {
	render() {
		return (
			<Fragment>
				<Router>

					<Navbar />
					<main class="container main">
						<Switch>

							<Route exact path="/" render={() => (
								<h1>Home</h1>
							)} />

							<Route path="/roles" render={() => (
								<LayoutGroup title="Roles">
									<AddRole actionCreator={addRole} />
									<DataList name="roles" selector={getAllRoles} actionCreators={{ remove: removeRole }} TEMPLATE={TEMPLATES.roles} />
								</LayoutGroup>
							)} />

							<Route path="/employees" render={() => (
								<LayoutGroup title="Employees">
									<AddEmployee actionCreator={addEmployee} />
									<DataList name="employees" selector={getAllEmployees} actionCreators={{ remove: removeEmployee }} TEMPLATE={TEMPLATES.employees} />
								</LayoutGroup>
							)} />

						</Switch>
					</main>
				</Router>
			</Fragment>
		)
	}
}

export default App