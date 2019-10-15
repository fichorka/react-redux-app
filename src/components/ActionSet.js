import React, { Component, Fragment } from 'react';

class ActionSet extends Component {
	render() {
		const { actionsTemplate, actions, row } = this.props
		const actionFields = actionsTemplate.actions.map(a => (
			<span key={row.id + a.name} className="list action-cell" onClick={actions[a.name]}>{a.label}
			</span>
		))
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