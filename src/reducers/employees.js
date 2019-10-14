const employees = (state = {}, action) => {
	switch (action.type) {
		case 'ADD_EMPLOYEE':
			return {
				...state,
				[action.id]: {
					id: action.id,
					name: action.name,
					roles: [action.roles]
				}
			}
		default:
			return state
	}
}

export const selectEmployee = (state, id) => {
	return state.employees[id]
}

export default employees