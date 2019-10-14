import { selectRole } from '../reducers/roles'

function generateId() {
	return '_' + Math.random().toString(36).substring(2, 10)
}

export const addRole = ({ name }) => ({
	type: 'ADD_ROLE',
	id: generateId(),
	name
})

export const addEmployee = ({ name, roles }) => ({
	type: 'ADD_EMPLOYEE',
	id: generateId(),
	name,
	roles
})