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
		case 'UPDATE_ROLE': {
			state[action.id] = { id: action.id, name: action.name }
			return state
		}
		case 'REMOVE_ROLE':
			const resultState = {}
			for (let key in state) {
				if (key !== action.id) {
					resultState[key] = state[key]
				}
			}
			return resultState
		default:
			return state
	}
}

export const selectRole = (state, id) => {
	return state.roles[id]
}

export default roles