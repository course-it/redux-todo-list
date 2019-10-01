import React from "react";
import { connect } from "react-redux";
import Task from "../Task";

function Tasks(props) {
  return (
    <ul>
      {props.tasks.map((data, i) => {
        return (
          <Task status={data.status} name={data.value} key={i} index={i} />
        );
      })}
    </ul>
  );
}

function mapStateToProps(state) {
  let tasks = state.tasks;

  if (state.filters.filter) {
    tasks = state.tasks.filter(task => task.status == state.filters.filter);
  }

  return {
    tasks
  };
}

export default connect(mapStateToProps)(Tasks);
