import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addRole } from '../actions'
import { Formik, Form, Field, ErrorMessage } from 'formik';

class RoleForm extends Component {
	render() {
		const { dispatch } = this.props;
		const action = addRole
		return (
			<Formik
				initialValues={{ name: '' }}
				validate={values => {
					let errors = {};
					if (!values.name) {
						errors.name = 'Required';
					}
					return errors;
				}}
				onSubmit={(values, { setSubmitting }) => {
					dispatch(action(values.name))
					values.name = ''
					setSubmitting(false)
				}}
			>
				{({ isSubmitting }) => (
					<Form>

						<label htmlFor="name" className="form input-label">Role Name</label>
						<Field type="text" name="name" size="15" className="form input" />
						<ErrorMessage name="name" render={msg => <span className="form input-error">{msg}</span>} />
						
						<button type="submit" className="form submit-button" disabled={isSubmitting}>
							Add Role
          </button>

					</Form>
				)}
			</Formik>
		)
	}
}

export default connect()(RoleForm)