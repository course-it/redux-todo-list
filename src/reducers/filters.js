const InitialState = {
  filter: ""
};

export const filters = (state = InitialState, action) => {
  switch (action.type) {
    case "TODO_FILTER":
      return Object.assign({}, state, {
        filter: "todo"
      });
    case "DONE_FILTER":
      return Object.assign({}, state, {
        filter: "done"
      });
    case "CLEAN_FILTER":
      return Object.assign({}, state, {
        filter: ""
      });
    default:
      return state;
  }
};
