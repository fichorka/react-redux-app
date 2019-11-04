import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addRole, updateRole } from '../actions'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { selectRole } from '../reducers'

class RoleForm extends Component {
  constructor (props) {
    super(props)
    this.handleCancel = this.handleCancel.bind(this)
    this.editItem = this.props.editItem
  }

  handleCancel () {
    this.props.history.goBack()
  }

  render () {
    const { dispatch, editItem, history } = this.props
    const action = editItem ? updateRole : addRole
    const initialValues = { name: editItem ? editItem.name : '' }
    return (
      <Formik
        initialValues={initialValues}
        validate={values => {
          const errors = {}
          if (!values.name) {
            errors.name = 'Required'
          }
          return errors
        }}
        onSubmit={(values, { setSubmitting }) => {
          editItem ? dispatch(action(editItem.id, values.name)) : dispatch(action(values.name))
          values.name = ''
          setSubmitting(false)
          if (editItem) history.push('/roles')
        }}
      >
        {({ isSubmitting }) => (
          <Form className='form'>
            <label htmlFor='name' className='input-label'>Role Name</label>
            <Field type='text' name='name' size='15' className='input' />
            <ErrorMessage name='name' render={msg => <span className='input-error'>{msg}</span>} />

            <div>
              <button type='submit' className='button' disabled={isSubmitting}>
                {this.editItem ? 'Edit Role' : 'Add Role'}
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
    editItem = selectRole(state, ownProps.id)
  }
  return {
    editItem,
    history: ownProps.history
  }
}

export default connect(mapStateToProps)(RoleForm)
