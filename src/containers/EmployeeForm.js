import React, { Component } from 'react';
import { addEmployee } from '../actions'
import { connect } from 'react-redux'
import { generateOptionItems } from '../functions'
import { getAllRoles } from '../reducers'
import { Formik, Form, Field, ErrorMessage } from 'formik';

class EmployeeForm extends Component {
	render() {
		const { dispatch, roles } = this.props
		const action = addEmployee
		return (
			<Formik
				initialValues={{ name: '', roles: '' }}
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
					dispatch(action(values.name, values.roles))
					values.name = ''
					values.roles = ''
					setSubmitting(false)
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
						</div>
					</Form>
				)}
			</Formik>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		roles: getAllRoles(state)
	}
}

export default connect(mapStateToProps)(EmployeeForm)