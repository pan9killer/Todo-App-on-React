import React from "react";
import TodoList from "./components/TodoList";
import SearchPanel from "./components/SearchPanel";
import AppHeader from "./components/AppHeader";

const App = () => {
  return (
    <div>
      <AppHeader />
      <SearchPanel />
      <TodoList />
  </div>
  )
}

export default App;