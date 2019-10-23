import React, { Component, Fragment } from 'react'
import { Route, Switch, Link } from 'react-router-dom'
import { getAllRoles } from '../reducers';
import { removeRole, updateRole } from '../actions'
import { TEMPLATES } from '../constants'
import DataList from '../containers/DataList'
import RoleForm from '../containers/RoleForm'
import LayoutGroup from '../components/LayoutGroup'
import { Redirect } from 'react-router-dom'

class Roles extends Component {
	
	render() {
		const { match, history } = this.props
		
		return (
			<Fragment>
				<Switch>
					<Route path={`${match.path}/:id`} render={({ match }) => (
						<LayoutGroup title="Edit Role">
							<RoleForm key="edit" id={match.params.id} history={history} />
						</LayoutGroup>
					)} />
					<Route exact path={`${match.path}/`} render={() => (
						<LayoutGroup title="Roles">
							<RoleForm key="add"/>
							<DataList name="roles" selector={getAllRoles} actions={{ remove: removeRole }} TEMPLATE={TEMPLATES.roles} />
						</LayoutGroup>
					)} />

				</Switch>
			</Fragment>
		)
	}
}

export default Roles