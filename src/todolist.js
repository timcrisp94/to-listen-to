import React, { Component } from "react";

class TodoList extends Component {
  // refactor constructor function to modern syntax
  // hooks instead of ref?
  constructor(props) {
    super(props);
    this.state = {
      items: []
    }
    this.addItem = this.addItem.bind(this)
  }
  render () {
    return (
      <div className="todoListMain">
        <div className="header">
          <form onSubmit={this.addItem}>            
            {/* <input ref={(a) => this._inputElement = a }
            placeholder="enter record"></input> */}
            <input placeholder="enter record"></input>
            <button type="submit">add</button>
          </form>
        </div>
      </div>
    )
  }
}

export default TodoList;