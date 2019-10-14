const roles = (state = {}, action) => {
	switch (action.type) {
		case 'ADD_ROLE':
			return {
				...state,
				[action.id]: {
					id: action.id,
					name: action.name
				}
			}
		default:
			return state
	}
}

export const selectRole = (state, id) => {
	return state.roles[id]
}

export default roles