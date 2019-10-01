const InitialState = [];

export const tasks = (state = InitialState, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return [...state, { value: action.value, status: "todo" }];
    case "REMOVE_TASK":
      return state.map((item, index) => {
        if (index == action.value) {
          item.status = "done";
        }
        return item;
      });
    default:
      return state;
  }
};
