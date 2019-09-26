import React, { useState } from "react";
import { connect } from "react-redux";
import { addTask } from "../../store";

function AddTask(props) {
  const [task, setTask] = useState("");
  function handleChange(e) {
    const value = e.target.value;
    setTask(value);
  }

  function handleClick() {
    const { dispatch } = props;
    dispatch(addTask(task));
    setTask("");
  }

  function handleKeyPress(e) {
    if (e.key == "Enter") {
      handleClick();
    }
  }

  return (
    <React.Fragment>
      <input
        type="text"
        value={task}
        onKeyPress={e => handleKeyPress(e)}
        onChange={e => handleChange(e)}
      />
      <button onClick={() => handleClick()}>Agregar</button>
    </React.Fragment>
  );
}

export default connect()(AddTask);
