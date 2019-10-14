import employees, * as fromEmployees from './employees'
import roles, * as fromRoles from './roles'

export default (state = {}, action) => {
	return {
		employees: employees(state.employees, action),
		roles: roles(state.roles, action)
	}
}

export const selectRole = (state, id) => fromRoles.selectRole(state, id)

export const selectEmployee = (state, id) => fromEmployees.selectEmployee(state, id)

export const selectEmployeeRoles = (state, employeeId) => {
	const employeeRoles = selectEmployee(state, employeeId).roles;
	return employeeRoles.map(roleId => {
		return selectRole(state, state.roles[roleId]);
	});
}

export const getAllEmployees = state => {
	const result = [];
	for (let key in state.employees) {
		let employee = state.employees[key];
		const roles = employee.roles.map(roleId => (selectRole(state, roleId).name)).join(', ')
		result.push({ ...employee, roles });
	}
	return result
}

export const getAllRoles = state => {
	const result = []
	for (let key in state.roles) {
		result.push(state.roles[key]);
	}
	return result
}