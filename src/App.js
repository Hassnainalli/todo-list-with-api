import React from "react";
import ToDoList from "./ToDoList";
import { Route, Switch } from "react-router-dom";
import TableList from "./TableList";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={TableList} />
        <Route path="/todolist" component={ToDoList} />
      </Switch>
    </>
  );
}

export default App;
