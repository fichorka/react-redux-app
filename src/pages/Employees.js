import React, { Component, Fragment } from 'react'
import { Route, Switch } from 'react-router-dom'
import { getAllEmployees } from '../reducers';
import { removeEmployee } from '../actions'
import { TEMPLATES } from '../constants'
import DataList from '../containers/DataList'
import LayoutGroup from '../components/LayoutGroup'
import EmployeeForm from '../containers/EmployeeForm';

class Employees extends Component {
	
	render() {
		const { match, history } = this.props
		
		return (
			<Fragment>
				<Switch>
					<Route path={`${match.path}/:id`} render={({ match }) => (
						<LayoutGroup title="Edit Employee">
							<EmployeeForm key="edit" id={match.params.id} history={history} />
						</LayoutGroup>
					)} />
					<Route exact path={`${match.path}/`} render={() => (
						<LayoutGroup title="Employees">
							<EmployeeForm key="add"/>
							<DataList name="employees" selector={getAllEmployees} actions={{ remove: removeEmployee }} TEMPLATE={TEMPLATES.employees} />
						</LayoutGroup>
					)} />

				</Switch>
			</Fragment>
		)
	}
}

export default Employees