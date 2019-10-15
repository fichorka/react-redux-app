import React, { Component, Fragment } from 'react';
import { generateListItems } from '../functions'

class List extends Component {
	render() {
		const { table, TEMPLATE, name, actionCreators, dispatch } = this.props;
		return (
			<Fragment>
				{generateListItems(table, TEMPLATE, name, actionCreators, dispatch)}
			</Fragment>
		)
	}
}

export default List