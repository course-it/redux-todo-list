import React from "react";
import { connect } from "react-redux";
import { removeTask } from "../../store";

function Task(props) {
  function handleDelete() {
    const { dispatch } = props;
    dispatch(removeTask(props.index));
  }
  return (
    <React.Fragment>
      <li onClick={() => handleDelete()}>
        {props.name} - {props.status == "done" ? "Done" : "Todo"}
      </li>
    </React.Fragment>
  );
}

export default connect()(Task);
