import React, { Component } from 'react'

class LayoutGroup extends Component {
  render () {
    const { children, title } = this.props
    return (
      <div className='group'>
        <h1 className='title'>{title}</h1>
        <div className='body'>
          {children}
        </div>
      </div>
    )
  }
}

export default LayoutGroup
