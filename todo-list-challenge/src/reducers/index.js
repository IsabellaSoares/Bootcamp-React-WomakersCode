import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'

export default combineReducers({
    todos,
    visibilityFilter
});

// Reducers must be pure functions
// Given the same arguments, it should calculate and return the next state
// No surprises, no side effects, no API calls, no mutations
// JUST CALCULATIONS