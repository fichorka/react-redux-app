import React, { Component } from 'react';

class BasicFormLayout extends Component {
	render() {
		const { dispatch, actionCreator, TEMPLATE, submitLabel, children } = this.props;
		return (
			<form onSubmit={e => {
				e.preventDefault();
				const args = {};
				let isFormValid = true;
				TEMPLATE.forEach(cellTemplate => {
					const { name } = cellTemplate
					const value = e.target[name].value
					if (!value.trim()) {
						isFormValid = false;
					}
					args[name] = value;
					e.target[name].value = ''
				})
				if (isFormValid) {
					dispatch(actionCreator(args))
				}
			}}>
				{children}
				<button type="submit">{submitLabel}</button>
			</form>
		)
	}
}

export default BasicFormLayout;