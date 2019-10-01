import React from "react";
import { connect } from "react-redux";
import { doneFilter, todoFilter, cleanFilter } from "../../store";

function Filters(props) {
  function handleFilter(filter) {
    const { dispatch } = props;
    dispatch(filter());
  }
  return (
    <div>
      <button onClick={() => handleFilter(doneFilter)}>Resueltos</button>
      <button onClick={() => handleFilter(todoFilter)}>Sin resolver</button>
      <button onClick={() => handleFilter(cleanFilter)}>Limpiar filtros</button>
    </div>
  );
}

export default connect()(Filters);
