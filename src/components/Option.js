import React, { Component } from 'react'

class Option extends Component {
  render () {
    const { row, accessor } = this.props
    return (
      <option key={`option-${row.id}`} value={row.id}>
        {row[accessor]}
      </option>
    )
  }
}

export default Option
