import React, { Component } from 'react';

class ListRow extends Component {
	render() {
		const { row, TEMPLATE } = this.props;
		return (
			<li className="list-item" key={row.id}>
				{TEMPLATE.map(cellTemplate => (
					<span
						className="list-field"
						key={row.id + cellTemplate.name}
						style={{ width: cellTemplate.width }}
					>
						{row[cellTemplate.name]}
					</span>
				)
				)}</li>
		)
	}
}

export default ListRow