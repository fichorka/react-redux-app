import { connect } from 'react-redux'
import List from '../components/List'
import { selectSortState } from '../reducers'
import { resetSortState } from '../actions'

const sortList = (list, sortState, name) => {
  if (!Object.prototype.hasOwnProperty.call(sortState, 'key') || sortState.name !== name) return list
  const { key, ascOrder } = sortState
  list.sort((item1, item2) => {
    const value1 = item1[key].toUpperCase() || null
    const value2 = item2[key].toUpperCase() || null
    if (value1 < value2) return -ascOrder
    if (value1 > value2) return ascOrder
    if (value1 === value2) return 0
  })
  return list
}

const mapStateToProps = (state, ownProps) => {
  const { TEMPLATE, name, actions } = ownProps
  const sortState = selectSortState(state)
  let table = ownProps.selector(state)
  table = sortList(table, state.sortState, name)
  return {
    table,
    TEMPLATE,
    name,
    actions,
    sortState
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    remove (id) {
      dispatch(ownProps.actions.remove(id))
    },
    setSortState (key, name) {
      dispatch(ownProps.actions.setSortState(key, name))
    },
    resetSortState () { dispatch(resetSortState()) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(List)
