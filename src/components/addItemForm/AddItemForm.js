import React, { Component } from "react";
import "./AddItemForm.css";

export default class AddItemForm extends Component {
  state = {
    label: ''
  };

  onLabelChange = (e) => {
    this.setState({
      label: e.target.value
    });
  };

  onSubmit = (e) => {
    if(this.state.label){
      e.preventDefault();
      this.props.addItem(this.state.label)
      this.setState({
        label: ''
      });
    };
  };

  render(){
    return(
      <form className="item__add__form d-flex"
        onSubmit={this.onSubmit}>
        <input type="text"
          className="form-control"
          onChange={this.onLabelChange}
          placeholder="Enter a new Todo..." 
          value={this.state.label} />
        <button className="btn btn-outline-secondary">
          Add Item
          </button>
      </form>
    )
  }
}
