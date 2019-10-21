import React, { Component, Fragment } from 'react';
import ActionSet from './ActionSet';
import DataCell from './DataCell';

class ListRow extends Component {
	render() {
		const { row, TEMPLATE, actions, name } = this.props;
		let items = []
		return (
			<li className="list row" key={row.id}>
				{TEMPLATE.map(cellTemplate => {
					if (cellTemplate.name === 'actions') {
						items.push(<ActionSet name={name} key={row.id + cellTemplate.name} actionsTemplate={cellTemplate} row={row} actions={actions} />)
					} else {
						items.push(<DataCell key={row.id + cellTemplate.name} cellTemplate={cellTemplate} row={row} />)
					}
				})}
				<Fragment>
					{items}
				</Fragment>
			</li>
		)
	}
}

export default ListRow