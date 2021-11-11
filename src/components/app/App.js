import React from "react";
import TodoList from "../todoList";
import SearchPanel from "../searchPanel";
import AppHeader from "../appHeader";
import ItemStatusFilter from "../itemStatusFilter";

import "./App.css"

const App = () => {
  const todoData = [
    { label: 'Eat Cake', important: false, id: 1},
    { label: 'Make React App', important: true, id: 2},
    { label: 'Kick Head', important: false, id: 3}
  ];

  return (
    <div className="todo-app">
      <AppHeader toDo={1} done={3} />
      <div className="top-panel d-flex">
        <SearchPanel />
        <ItemStatusFilter />
      </div>
      <TodoList todos={todoData} />
    </div>
  )
}

export default App;