import React from 'react'
import ListRow from '../components/ListRow'
import ListHeader from '../components/ListHeader'

export const generateListItems = (table, TEMPLATE, name, removeAction) => {

	if (!table.length) {
		return <span className="list status">The list is empty</span>
	}

	const listRows = []

	//list header:
	listRows.push(
		<ListHeader TEMPLATE={TEMPLATE} name={name} key={`list-header-${name}`} />
	)

	//list data rows:
	listRows.push(
		...table.map((row, index) => {
			return (
				<ListRow row={row} name={name} removeAction={removeAction} TEMPLATE={TEMPLATE} key={`list-row-${name}-${index}`} />
			)
		})
	)

	return <ul className="list container">{listRows}</ul>
}

export const generateOptionItems = (table, labelKey = 'name') => {

	if (!table.length) return

	return table.map(row => (
		<option key={`option-item-${row.id}`} value={row.id}>
			{row[labelKey]}
		</option>
	))
}