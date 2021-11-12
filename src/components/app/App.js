import React, { Component } from "react";
import TodoList from "../todoList";
import SearchPanel from "../searchPanel";
import AppHeader from "../appHeader";
import ItemStatusFilter from "../itemStatusFilter";
import AddItemForm from "../addItemForm";
import "./App.css"

export default class App extends Component {
  maxId = 100;

  state = {
    todoData: [
      this.createTodoItem('Eat Cake'),
      this.createTodoItem('Make React App'),
      this.createTodoItem('Drink Tea')
    ]
  }

  toggleProperty(arr,id,propName){
    const doneEl = arr.find((el) => el.id === id);
    const idx = arr.findIndex((el) => el.id === id);
    const newItem = {...doneEl, [propName]: !doneEl[propName]};
    return [
      ...arr.slice(0, idx),
      newItem,
      ...arr.slice(idx+1)
    ];
  }

  createTodoItem(label){
    return {
      label,
      important: false,
      done: false,
      id: this.maxId++
    }
  }

  addItem = (text) => {
    const newTodoItem = this.createTodoItem(text);
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
      const idx = todoData.find((el) => el.id === id);
      const newArray = todoData.filter(el => el.id !== idx.id);
      return{
        todoData: newArray
      }
    })
  };

  onToggleImportant = (id) => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProperty(todoData, id, 'important')
      }
    })
  }

  onToggleDone = (id) => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProperty(todoData, id, 'done')
      }
    })
  }

  render(){
    const {todoData} = this.state;
    const doneCount = todoData.filter(el => el.done).length;
    const toDoCount = todoData.length - doneCount;

    return (
      <div className="todo-app">
        <AppHeader toDo={toDoCount} done={doneCount} />
        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter />
        </div>
        <TodoList todos={todoData} 
          onDeleted={this.deleteItem} 
          onToggleImportant={this.onToggleImportant}
          onToggleDone={this.onToggleDone}  />
          <AddItemForm 
          addItem={this.addItem}/>
      </div>
    )
  }
};