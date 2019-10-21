const employees = (state = {}, action) => {
	switch (action.type) {
		case 'ADD_EMPLOYEE':
			return {
				...state,
				[action.id]: {
					id: action.id,
					name: action.name,
					roles: action.roles
				}
			}
		case 'UPDATE_EMPLOYEE': {
			state[action.id] = { id: action.id, name: action.name, roles: action.roles }
			return state
		}
		case 'REMOVE_EMPLOYEE':
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

export const selectEmployee = (state, id) => {
	return state.employees[id]
}

export default employees