import { connect } from 'react-redux'
import List from '../components/List'


const mapStateToProps = (state, ownProps) => {
	const { TEMPLATE, name } = ownProps
	const table = ownProps.selector(state)
	const { actionCreators } = ownProps
	return {
		table,
		TEMPLATE,
		name,
		actionCreators
	}
}

export default connect(mapStateToProps)(List)