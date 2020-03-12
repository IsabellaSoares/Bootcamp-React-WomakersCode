// Here are the bound action creators
// They automatically dispatches the actions
// The actions only describe what happened

// ACTIONS TYPES
export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

// ACTION CREATORS
export const addTodo = text => ({
  type: ADD_TODO,
  text
});

export const setVisibilityFilter = filter => ({
  type: SET_VISIBILITY_FILTER,
  filter
});

export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  id
});

// OTHER CONSTANTS
export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}