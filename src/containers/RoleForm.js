import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addRole, updateRole } from '../actions'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { selectRole } from '../reducers'

class RoleForm extends Component {
	render() {
		const { dispatch, editItem, history } = this.props;
		const action = editItem ? updateRole : addRole
		let nameValue = editItem ? editItem.name : ''
		return (
			<Formik
				initialValues={{ name: nameValue }}
				validate={values => {
					let errors = {};
					if (!values.name) {
						errors.name = 'Required';
					}
					return errors;
				}}
				onSubmit={(values, { setSubmitting }) => {
					editItem ? dispatch(action(editItem.id, values.name)) : dispatch(action(values.name))
					values.name = ''
					setSubmitting(false)
					editItem ? history.push('/roles') : null
				}}
			>
				{({ isSubmitting }) => (
					<Form>
						<label htmlFor="name" className="form input-label">Role Name</label>
						<Field type="text" name="name" size="15" className="form input" />
						<ErrorMessage name="name" render={msg => <span className="form input-error">{msg}</span>} />

						<div>
							<button type="submit" className="form button" disabled={isSubmitting}>
								Add Role
          </button>
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
		editItem = selectRole(state, ownProps.id)
	}
	return {
		editItem,
		history: ownProps.history
	}
}

export default connect(mapStateToProps)(RoleForm)