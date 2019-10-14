import React, { Component } from 'react';
import { addEmployee } from '../actions'
import { connect } from 'react-redux'
import { generateOptionItems } from '../functions'
import BasicInput from '../components/BasicInput'
import BasicFormLayout from '../components/BasicFormLayout'
import { TEMPLATES } from '../constants'
import { getAllRoles } from '../reducers'

class AddEmployee extends Component {
	render() {
		const { dispatch, roles } = this.props
		return (
			<BasicFormLayout dispatch={dispatch} TEMPLATE={TEMPLATES.employees} submitLabel="Add Employee" actionCreator={addEmployee}>
				<label className="form-input-label" htmlFor="roles">Employee Role</label>
				<select className="form-input" name="roles">
					<option value="">Select Employee role</option>
					{generateOptionItems(roles)}
				</select>
				<BasicInput name="name" label="Employee Name" />
			</BasicFormLayout>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		roles: getAllRoles(state)
	}
}

export default connect(mapStateToProps)(AddEmployee)