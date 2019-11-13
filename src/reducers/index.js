import employees, * as fromEmployees from './employees'
import roles, * as fromRoles from './roles'
import sortState, * as fromSortState from './SortState'

// root reducer
export default (state = {}, action) => {
  return {
    employees: employees(state.employees, action),
    roles: roles(state.roles, action),
    sortState: sortState(state.sortState, action)
  }
}

// selectors
export const selectRole = (state, id) => fromRoles.selectRole(state, id) || {}

export const selectEmployee = (state, id) => fromEmployees.selectEmployee(state, id) || {}

export const selectEmployeeRoles = (state, employeeId) => {
  const employeeRoleId = selectEmployee(state, employeeId).roles
  return selectRole(state, state.roles[employeeRoleId])
}

export const getAllEmployees = state => {
  const result = []
  for (const key in state.employees) {
    const employee = state.employees[key]
    const roles = selectRole(state, employee.roles).name || ''
    result.push({ ...employee, roles })
  }
  return result
}

export const getAllRoles = state => {
  return Object.values(state.roles)
}

export const selectSortState = state => fromSortState.selectSortState(state) || {}
