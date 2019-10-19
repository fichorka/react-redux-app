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

							<Route path="/roles" render={() => (
								<LayoutGroup title="Roles">
									<RoleForm />
									<DataList name="roles" selector={getAllRoles} actionCreators={{ remove: removeRole }} TEMPLATE={TEMPLATES.roles} />
								</LayoutGroup>
							)} />

							<Route path="/employees" render={() => (
								<LayoutGroup title="Employees">
									<EmployeeForm />
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