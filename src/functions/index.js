import React from 'react'
import ListRow from '../components/ListRow'
import ListHeader from '../components/ListHeader'
import ActionSet from '../components/ActionSet'

export const generateListItems = (table, TEMPLATE, name, actions, sortState) => {

	const listRows = []

	if (!table.length) {
		listRows.push(<span key={`${name}-status`} className="status">The list is empty</span>)
	} else {

		//list header:
		listRows.push(
			<ListHeader sortState={sortState} TEMPLATE={TEMPLATE} name={name} setSortState={actions.setSortState} key={`list-header-${name}`} />
		)
		//list data rows:
		listRows.push(
			...table.map((row, index) => {
				return (
					<ListRow row={row} name={name} removeAction={actions.remove} TEMPLATE={TEMPLATE} key={`list-row-${name}-${index}`} />
				)
			})
		)
	}

	return <ul className="list">{listRows}</ul>
}

export const generateOptionItems = (table, labelKey = 'name') => {

	if (!table.length) return

	return table.map(row => (
		<option key={`option-item-${row.id}`} value={row.id}>
			{row[labelKey]}
		</option>
	))
}