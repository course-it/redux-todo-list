import React from "react";
import { connect } from "react-redux";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import Filters from "./components/Filters";

function App() {
  return (
    <div className="App">
      <AddTask />
      <Filters />
      <Tasks />
    </div>
  );
}

function mapStateToProps() {
  return {};
}
export default connect(mapStateToProps)(App);
