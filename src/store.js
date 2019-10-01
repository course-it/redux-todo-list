import { createStore, applyMiddleware, combineReducers } from "redux";
import thunkMiddleware from "redux-thunk";
import { filters } from "./reducers/filters";
import { tasks } from "./reducers/tasks";

export const addTask = task => dispatch => {
  return dispatch({
    type: "ADD_TASK",
    value: task
  });
};

export const removeTask = index => dispatch => {
  return dispatch({
    type: "REMOVE_TASK",
    value: index
  });
};

export const doneFilter = index => dispatch => {
  return dispatch({
    type: "DONE_FILTER"
  });
};

export const todoFilter = index => dispatch => {
  return dispatch({
    type: "TODO_FILTER"
  });
};

export const cleanFilter = index => dispatch => {
  return dispatch({
    type: "CLEAN_FILTER"
  });
};

export function initializeStore() {
  return createStore(
    combineReducers({ filters, tasks }),
    {},
    applyMiddleware(thunkMiddleware)
  );
}
