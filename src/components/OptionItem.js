import React, { Component } from 'react';

class OptionItem extends Component {
	render() {
		const { row } = this.props;
		return (
			<option key={row.id} value={row.id}>
				{row[labelKey]}
			</option>
		)
	}
}

export default OptionItem