const sortState = (state = {}, action) => {
	switch (action.type) {
		case 'SET_SORT_STATE':
			let ascOrder = 1
			if (action.key === state.key) {
				ascOrder = -state.ascOrder
			}
			return {
				key: action.key,
				name: action.name,
				ascOrder
			}
		case 'RESET_SORT_STATE':
			return {}
		default:
			return state
	}
}

export default sortState

export const selectSortState = state => {
	return state.sortState
}