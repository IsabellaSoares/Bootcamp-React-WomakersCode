import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'

const Reducers = combineReducers({
    todos,
    visibilityFilter
});

export default Reducers;

// Reducers must be pure functions
// Given the same arguments, it should calculate and return the next state
// No surprises, no side effects, no API calls, no mutations
// JUST CALCULATIONS