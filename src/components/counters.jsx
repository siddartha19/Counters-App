import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  styles = {
    padding: "10px",
    fontSize: "15px",
    fontWeight: "bold",
  };

  render() {
    const {
      OnReset,
      counters,
      onDelete,
      onIncrement,
      onDecrement,
    } = this.props;
    return (
      <div>
        <button
          style={this.styles}
          className="btn btn-info m-2"
          onClick={OnReset}
        >
          Reset
        </button>
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            counter={counter}
            onDelete={onDelete}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
          ></Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
