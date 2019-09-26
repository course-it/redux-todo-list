import React from "react";
import { connect } from "react-redux";
import { removeTask } from "../../store";

function Task(props) {
  function handleDelete() {
    const { dispatch } = props;
    dispatch(removeTask(props.index));
  }
  return <li onClick={() => handleDelete()}>{props.name}</li>;
}

export default connect()(Task);
