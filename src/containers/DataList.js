import { connect } from 'react-redux'
import List from '../components/List'


const mapStateToProps = (state, ownProps) => {
	const { TEMPLATE, name } = ownProps
	const table = ownProps.selector(state)
	return {
		table,
		TEMPLATE,
		name
	}
}

export default connect(mapStateToProps)(List)