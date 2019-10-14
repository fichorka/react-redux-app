import React, { Component } from 'react';
import { addRole } from '../actions'
import { connect } from 'react-redux'
import BasicInput from '../components/BasicInput'
import BasicFormLayout from '../components/BasicFormLayout'
import { TEMPLATES } from '../constants'

class AddRole extends Component {
	render() {
		const { dispatch } = this.props;
		return (
			<BasicFormLayout dispatch={dispatch} TEMPLATE={TEMPLATES.roles} submitLabel="Add Role" actionCreator={addRole}>
				<BasicInput name="name" label="Role Name" />
			</BasicFormLayout>
		)
	}
}

export default connect()(AddRole)