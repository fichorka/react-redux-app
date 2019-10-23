import React, { Component, Fragment } from 'react';
import { generateListItems } from '../functions'

class List extends Component {

	removeAction(id) {
		this.props.dispatch(this.props.actions.remove(id))
	}

	render() {
		const { table, TEMPLATE, name } = this.props;
		const removeAction = this.removeAction.bind(this)
		return (
			<Fragment>
				{generateListItems(table, TEMPLATE, name, removeAction)}
			</Fragment>
		)
	}
}

export default List