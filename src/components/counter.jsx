import React, { Component } from "react";

class Counter extends Component {
  styles = {
    padding: "10px",
    fontSize: "15px",
    fontWeight: "bold",
  };

  // constructor() {
  //   super();
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }

  render() {
    const { counter, onIncrement, onDecrement, onDelete } = this.props;
    return (
      <div>
        <h3>Counter #{counter.id}</h3>
        <span style={this.styles} className={this.getBadgeClass()}>
          {this.formatCounter()}
        </span>
        <button
          onClick={() => onIncrement(counter)}
          style={this.styles}
          className="btn btn-primary m-2 btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => onDecrement(counter)}
          style={this.styles}
          className="btn btn-secondary m-2 btn-sm"
        >
          Decrement
        </button>
        <button
          onClick={() => onDelete(counter.id)}
          style={this.styles}
          className="btn btn-danger m-2 btn-sm"
        >
          Delete
        </button>
      </div>
    );
  }

  getBadgeClass() {
    let classname = "badge m-2 badge-";
    classname += this.props.counter.value === 0 ? "warning" : "success";
    return classname;
  }

  formatCounter() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
