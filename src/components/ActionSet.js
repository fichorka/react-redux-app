import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class ActionSet extends Component {
	render() {
		const { actionsTemplate, actions, row, name } = this.props
		const actionFields = actionsTemplate.actions.map(a => {
			let item
			if (a.type === 'link') {
				item = <Link
					key={row.id + a.name}
					className="list action-cell"
					to={`${name}/${row.id}`}
				>
					{a.label}
				</Link>
			}
			else {
				item = <span
					key={row.id + a.name}
					className="list action-cell"
					onClick={actions[a.name]}
				>
					{a.label}
				</span>
			}
			return item
		})
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