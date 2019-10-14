import React from 'react'
import ListRow from '../components/ListRow'
import ListHeader from '../components/ListHeader'

export const generateListItems = (table, TEMPLATE, name) => {

	if (!table.length) {
		return <span className="list-status list-field">The list is empty</span>
	}

	const listRows = []

	//List Header:
	listRows.push(
		<ListHeader TEMPLATE={TEMPLATE} name={name} key={`list-header-${name}`} />
	)

	//List:
	listRows.push(
		...table.map((row, index) => (
			<ListRow row={row} TEMPLATE={TEMPLATE} key={`list-row-${name}-${index}`} />
		))
	)

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