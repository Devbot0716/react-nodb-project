import React, { Component } from 'react';
import ToDoItems from "./ToDoItems.js";

class ToDoList extends Component {
  constructor(props, context){
    super(props, context);

    this.state = {
      items: []
    };

    this.addItem = this.addItem.bind( this );

    this.deleteItem = this.deleteItem.bind( this );

  }

  addItem(e){
    var itemArray = this.state.items;

    if (this._inputElement.value !== "") {
      itemArray.unshift({
        text: this._inputElement.value,
        key: Date.now()
      });

      this.setState({
        items: itemArray
      });

      this._inputElement.value = "";
    }

    console.log(itemArray);

    e.preventDefault();

  }

  deleteItem(key){
    var filteredItems = this.state.items.filter(function(item){
      return (item.key !== key);
    });

    this.setState({
      items: filteredItems
    })
  }

  render(){

    return(

      <div className="todoListMain">
        <div className="header">
          <h1>To Do List:</h1>
          <form onSubmit={this.addItem}>
            <input ref={(a)=> this._inputElement = a} placeholder="enter task">
            </input>
            <button className="add-btn" type="submit">add</button>
          </form>
        </div>
        <ToDoItems entries={this.state.items} delete={this.deleteItem}/>
      </div>
    )
  }
}

export default ToDoList;
