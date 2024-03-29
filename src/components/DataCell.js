import React, { Component } from 'react'

class DataCell extends Component {
  render () {
    const { cellTemplate, row } = this.props
    return (
      <span
        className='data-cell'
        style={{ width: cellTemplate.width }}
      >
        {row[cellTemplate.name] || '\u00A0'}
      </span>
    )
  }
}

export default DataCell
