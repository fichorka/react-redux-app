import React from 'react'
import ListRow from '../components/ListRow'
import ListHeader from '../components/ListHeader'

export const generateListItems = (table, TEMPLATE, name, actionCreators, dispatch) => {

	if (!table.length) {
		return <span className="list status">The list is empty</span>
	}

	const listRows = []

	//List Header:
	listRows.push(
		<ListHeader TEMPLATE={TEMPLATE} name={name} key={`list-header-${name}`} />
	)

	//List:
	listRows.push(
		...table.map((row, index) => {
			const actions = {}
			TEMPLATE.forEach(t => {
				if (t.name === 'actions') {
					t.actions.forEach(a => {
						actions[a.name] = () => dispatch(actionCreators[a.name](row.id))
					})
				}
			})
			return (
				<ListRow row={row} name={name} actions={actions} TEMPLATE={TEMPLATE} key={`list-row-${name}-${index}`} />
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