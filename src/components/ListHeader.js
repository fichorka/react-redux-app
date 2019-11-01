import React, { Component } from 'react';

class ListHeader extends Component {
	render() {
		const { TEMPLATE, name, setSortState, sortState } = this.props;
		return (
			<li key={`list-row-header-${name}`} className="header">
				{TEMPLATE.map(cellTemplate => {
					const key = cellTemplate.label.replace(/\s/g, '')
					return (
						<span onClick={cellTemplate.name === 'actions' ? null : () => setSortState(cellTemplate.name, name)} key={key} className="data-cell" style={{ width: cellTemplate.width }}>
							{cellTemplate.label}{sortState.key === cellTemplate.name ? sortState.ascOrder === 1 ? ' ˄' : ' ˅' : null}
						</span>)
				})}
			</li>
		)
	}
}

export default ListHeader