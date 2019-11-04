import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import { getAllRoles } from '../reducers'
import { removeRole, setSortState } from '../actions'
import { TEMPLATES } from '../constants'
import DataList from '../containers/DataList'
import RoleForm from '../containers/RoleForm'
import LayoutGroup from '../components/LayoutGroup'

class Roles extends Component {
  render () {
    const { match, history } = this.props

    return (
      <>
        <Switch>
          <Route
            path={`${match.path}/:id`} render={({ match }) => (
              <LayoutGroup title='Edit Role'>
                <RoleForm key='edit' id={match.params.id} history={history} />
              </LayoutGroup>
            )}
          />
          <Route
            exact path={`${match.path}/`} render={() => (
              <LayoutGroup title='Roles'>
                <RoleForm key='add' />
                <DataList name='roles' selector={getAllRoles} actions={{ remove: removeRole, setSortState }} TEMPLATE={TEMPLATES.roles} />
              </LayoutGroup>
            )}
          />

        </Switch>
      </>
    )
  }
}

export default Roles
