import React, { Component } from 'react';

class ListHeader extends Component {
	render() {
		const { TEMPLATE, name } = this.props;
		return (
			<li key={`list-row-header-${name}`} className="list header">
				{TEMPLATE.map(cellTemplate => {
					const key = cellTemplate.label.replace(/\s/g,'')
					return (
					<span key={key} className="list data-cell" style={{ width: cellTemplate.width }}>
					{cellTemplate.label}
					</span>)
				})}
			</li>
		)
	}
}

export default ListHeader