import React, { Component, Fragment } from 'react';
import { generateListItems } from '../functions'

class List extends Component {
	render() {
		const { table, TEMPLATE, name } = this.props;
		return (
			<Fragment>
				{generateListItems(table, TEMPLATE, name)}
			</Fragment>
		)
	}
}

export default List