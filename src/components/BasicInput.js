import React, { Component, Fragment } from 'react';

class BasicInput extends Component {
	render() {
		let { name, label, type = 'text', size = '20' } = this.props;
		return (
			<Fragment>
				<label className="form-input-label" htmlFor={name}>{label}</label>
				<input className="form-input" name={name} type={type} size={size} />
			</Fragment>
		)
	}
}

export default BasicInput;