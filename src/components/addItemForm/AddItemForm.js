import React, { Component } from "react";
import "./AddItemForm.css";

export default class AddItemForm extends Component {
  render(){
    // const {addItem} = this.props
    return(
      <div className="item__add__form">
        <button className="btn btn-outline-secondary"
          onClick={() => this.props.addItem('jopa')}>
          Add Item
          </button>
      </div>
    )
  }
}
