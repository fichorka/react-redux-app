import React, { Component } from 'react';
import { addEmployee, updateEmployee } from '../actions'
import { connect } from 'react-redux'
import { generateOptionItems } from '../functions'
import { getAllRoles } from '../reducers'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { selectEmployee } from '../reducers/employees';

class EmployeeForm extends Component {
	constructor(props) {
		super(props)
		this.goBack = this.goBack.bind(this)
	}
	goBack() {
		this.props.history.goBack()
	}

	render() {
		const { dispatch, roles, editItem, history } = this.props
		const action = editItem ? updateEmployee : addEmployee
		let initialValues = { name: editItem ? editItem.name : '', roles: editItem ? editItem.roles : '' }
		return (
			<Formik
				initialValues={initialValues}
				validate={values => {
					let errors = {};
					if (!values.name) {
						errors.name = 'Required';
					} if (values.roles === '') {
						errors.roles = 'Required'
					}
					return errors;
				}}
				onSubmit={(values, { setSubmitting }) => {
					editItem ? dispatch(action(editItem.id, values.name, values.roles)) : dispatch(action(values.name, values.roles))
					values.name = ''
					values.roles = ''
					setSubmitting(false)
					editItem ? history.push('/employees') : null
				}}
			>
				{({ isSubmitting, values, handleChange, handleBlur }) => (
					<Form>

						<label htmlFor="roles" className="form input-label">Select Role</label>
						<select
							name="roles"
							value={values.roles}
							onChange={handleChange}
							onBlur={handleBlur}
							className="form input"
						>
							<option value="">Select Role</option>
							{generateOptionItems(roles)}
						</select>
						<ErrorMessage name="roles" render={msg => <span className="form input-error">{msg}</span>} />

						<label htmlFor="name" className="form input-label">Employee Name</label>
						<Field type="text" name="name" size="20" className="form input" />
						<ErrorMessage name="name" render={msg => <span className="form input-error">{msg}</span>} />

						<div>
							<button type="submit" className="form button" disabled={isSubmitting}>
								Add Employee
          		</button>
							<button type="reset" className="form button">Reset</button>
							{
								editItem ?
									<button type="button" onClick={this.goBack} className="form button">Cancel</button> :
									null
							}
						</div>
					</Form>
				)}
			</Formik>
		)
	}
}

const mapStateToProps = (state, ownProps) => {
	let editItem = null
	if (ownProps.id) {
		editItem = selectEmployee(state, ownProps.id)
	}
	return {
		roles: getAllRoles(state),
		editItem,
		history: ownProps.history
	}
}

export default connect(mapStateToProps)(EmployeeForm)