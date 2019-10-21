function generateId() {
	return '_' + Math.random().toString(36).substring(2, 10)
}

//action creators
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