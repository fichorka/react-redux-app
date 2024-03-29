import React, { Component } from 'react'
import { generateListItems } from '../functions'

class List extends Component {
  constructor (props) {
    super(props)
    if (props.name !== props.sortState.name) props.resetSortState()
  }

  render () {
    const { table, TEMPLATE, name, sortState, remove, setSortState } = this.props
    return (
      <>
        {generateListItems(table, TEMPLATE, name, { remove, setSortState }, sortState)}
      </>
    )
  }
}

export default List
