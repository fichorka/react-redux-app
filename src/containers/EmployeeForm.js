import React, { Component } from 'react'
import { addEmployee, updateEmployee } from '../actions'
import { connect } from 'react-redux'
import { generateOptionItems } from '../functions'
import { getAllRoles } from '../reducers'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { selectEmployee } from '../reducers/employees'

class EmployeeForm extends Component {
  constructor (props) {
    super(props)
    this.handleCancel = this.handleCancel.bind(this)
    this.editItem = this.props.editItem
  }

  handleCancel () {
    this.props.history.goBack()
  }

  render () {
    const { dispatch, roles, editItem, history } = this.props
    const action = editItem ? updateEmployee : addEmployee
    const initialValues = { name: editItem ? editItem.name : '', roles: editItem ? editItem.roles : '' }
    return (
      <Formik
        initialValues={initialValues}
        validate={values => {
          const errors = {}
          if (!values.name) {
            errors.name = 'Required'
          } if (values.roles === '') {
            errors.roles = 'Required'
          }
          return errors
        }}
        onSubmit={(values, { setSubmitting }) => {
          editItem ? dispatch(action(editItem.id, values.name, values.roles)) : dispatch(action(values.name, values.roles))
          values.name = ''
          values.roles = ''
          setSubmitting(false)
          if (editItem) history.push('/employees')
        }}
      >
        {({ isSubmitting, values, handleChange, handleBlur }) => (
          <Form className='form'>

            <label htmlFor='roles' className='input-label'>Select Role</label>
            <Field
              name='roles'
              as='select'
              className='input'
            >
              <option value=''>Select Role</option>
              {generateOptionItems(roles)}
            </Field>
            <ErrorMessage name='roles' render={msg => <span className='input-error'>{msg}</span>} />

            <label htmlFor='name' className='input-label'>Employee Name</label>
            <Field type='text' name='name' size='20' className='input' />
            <ErrorMessage name='name' render={msg => <span className='input-error'>{msg}</span>} />

            <div>
              <button type='submit' className='button' disabled={isSubmitting}>
                {this.editItem ? 'Edit Employee' : 'Add Employee'}
              </button>
              <button type='reset' className='button'>Reset</button>
              {
                editItem
                  ? <button type='button' onClick={this.handleCancel} className='button'>Cancel</button>
                  : null
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
