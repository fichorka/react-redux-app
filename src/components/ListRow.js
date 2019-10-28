import React, { Component, Fragment } from 'react';
import ActionSet from './ActionSet';
import DataCell from './DataCell';

class ListRow extends Component {
	render() {
		const { row, TEMPLATE, removeAction, name } = this.props;
		let items = []
		return (
			<li className="row" key={row.id}>
				{TEMPLATE.map(cellTemplate => {
					if (cellTemplate.name === 'actions') {
						items.push(<ActionSet name={name} key={row.id + cellTemplate.name} actionsTemplate={cellTemplate} row={row} removeAction={removeAction} />)
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