import React, { Component } from 'react';

class LayoutGroup extends Component {
	render() {
		const { children, title } = this.props;
		return (
			<div className="group-container">
				<h1 className="group-title">{title}</h1>
				<div className="group-body">
					{children}
				</div>
			</div>
		)
	}
}

export default LayoutGroup