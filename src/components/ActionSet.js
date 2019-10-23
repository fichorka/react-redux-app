import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ActionSet extends Component {
	render() {
		const { actionsTemplate, removeAction, row, name } = this.props
		const actionFields = [
			<Link
				key={`update${row.id}`}
				className="list action-cell"
				to={`${name}/${row.id}`}
			>
				E
			</Link>,
			<span
				key={`remove${row.id}`}
				className="list action-cell"
				onClick={() => removeAction(row.id)}
			>
				X
			</span>
		]
		return (
			<span className="list action-set" style={{
				width: actionsTemplate.width
			}
			}>
				{actionFields}
			</span >
		)
	}
}

export default ActionSet