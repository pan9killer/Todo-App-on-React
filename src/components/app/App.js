import React, { Component } from "react";
import TodoList from "../todoList";
import SearchPanel from "../searchPanel";
import AppHeader from "../appHeader";
import ItemStatusFilter from "../itemStatusFilter";
import AddItemForm from "../addItemForm";
import "./App.css"

export default class App extends Component {
  state = {
    todoData: [
      { label: 'Eat Cake', important: false, id: 1},
      { label: 'Make React App', important: true, id: 2},
      { label: 'Kick Head', important: false, id: 3}
    ]
  }

  addItem = (text) => {
    const newTodoItem = {
      label: text,
      important: false,
      id: Date.now()
    };
    this.setState(({ todoData }) => {
      const newTodoData = [
        ...todoData,
        newTodoItem
      ];
      return {
        todoData: newTodoData
      }
    });
  }

  deleteItem = (id) => {
    this.setState(({ todoData }) => {
      // working too...
      // const idx = todoData.findIndex((el) => el.id === id);
      // const newArray = [
      //   ...todoData.slice(0, idx),
      //   ...todoData.slice(idx + 1)
      // ]; 

      const idx = todoData.filter((el) => el.id === id);
      const newArray = todoData.filter(el => el.id !== idx[0].id);
      return{
        todoData: newArray
      }
    })
  };

  render(){
    return (
      <div className="todo-app">
        <AppHeader toDo={1} done={3} />
        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter />
        </div>
        <TodoList todos={this.state.todoData} 
          onDeleted={this.deleteItem} />
          <AddItemForm 
          addItem={this.addItem}/>
      </div>
    )
  }
};