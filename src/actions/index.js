function generateId() {
	return '_' + Math.random().toString(36).substring(2, 10)
}

// action creators
// roles
export const addRole = (name) => (
	{
		type: 'ADD_ROLE',
		id: generateId(),
		name
	}
)

export const updateRole = (id, name) => {
	return {
		type: 'UPDATE_ROLE',
		id,
		name
	}
}

export const removeRole = (id) => (
	{
		type: "REMOVE_ROLE",
		id: id
	}
)

// employees
export const addEmployee = (name, roles) => (
	{
		type: 'ADD_EMPLOYEE',
		id: generateId(),
		name,
		roles
	}
)

export const updateEmployee = (id, name, roles) => {
	return {
		type: 'UPDATE_EMPLOYEE',
		id,
		name,
		roles
	}
}

export const removeEmployee = (id) => (
	{
		type: "REMOVE_EMPLOYEE",
		id: id
	}
)

// sortState
export const setSortState = (key, name)  => (
	{
		type: 'SET_SORT_STATE',
		name,
		key
	}
)

export const resetSortState = ()  => (
	{
		type: 'RESET_SORT_STATE',
	}
)