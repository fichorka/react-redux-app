import React from 'react'
import ListRow from '../components/ListRow'
import ListHeader from '../components/ListHeader'
import Option from '../components/Option'

export const generateListItems = (table, TEMPLATE, name, actions, sortState) => {
  const listRows = []

  if (!table.length) {
    listRows.push(<span key={`${name}-status`} className='status'>The list is empty</span>)
  } else {
    // list header:
    listRows.push(
      <ListHeader sortState={sortState} TEMPLATE={TEMPLATE} name={name} setSortState={actions.setSortState} key={`list-header-${name}`} />
    )
    // list data rows:
    listRows.push(
      ...table.map((row, index) => {
        return (
          <ListRow row={row} name={name} removeAction={actions.remove} TEMPLATE={TEMPLATE} key={`list-row-${name}-${index}`} />
        )
      })
    )
  }

  return <ul className='list'>{listRows}</ul>
}

export const generateOptionItems = (table, accessor = 'name') => {
  if (!table.length) return

  return table.map(row => (
    <Option row={row} accessor={accessor} key={`option-${row.id}`} />
  ))
}
