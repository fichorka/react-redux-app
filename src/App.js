import React, { Component, Fragment } from 'react';
import AddRole from './containers/AddRole'
import DataList from './containers/DataList'
import AddEmployee from './containers/AddEmployee'
import LayoutGroup from './components/LayoutGroup'
import { addEmployee, addRole } from './actions'
import { TEMPLATES } from './constants'
import { getAllEmployees, getAllRoles } from './reducers';

class App extends Component {
	render() {
		return (
			<Fragment>
				<LayoutGroup title="Roles">
					<AddRole actionCreator={addRole} />
					<DataList name="roles" selector={getAllRoles} TEMPLATE={TEMPLATES.roles} />
				</LayoutGroup>
				<LayoutGroup title="Employees">
					<AddEmployee actionCreator={addEmployee} />
					<DataList name="employees" selector={getAllEmployees} TEMPLATE={TEMPLATES.employees} />
				</LayoutGroup>
			</Fragment>
		)
	}
}

export default App