import React, { Component } from "react";
import "./App.css";
import Counters from "./components/counters";
import NavBar from "./components/navbar";
import axios from "axios";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 1 },
      { id: 2, value: 2 },
      { id: 3, value: 3 },
      { id: 4, value: 4 },
    ],
    data: {},
  };

  componentDidMount() {
    axios
      .get(
        "http://137.117.35.22:8000/survey_manage/view_survey/?access_key=66a394d28f17442a8ac2842a97b9e2d7&survey_id=S-000101"
      )
      .then((res) => {
        const data = res.data.data;
        this.setState({ data: data });
        // console.log(data);
      });
  }

  render() {
    return (
      <React.Fragment>
        <NavBar
          totalCounters={this.state.counters.filter((c) => c.value > 0).length}
        />
        <main className="container p-2">
          <Counters
            counters={this.state.counters}
            OnReset={this.handleReset}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
          />
          <ul>
            {Object.keys(this.state.data).map((obj) => (
              <li>{obj}</li>
            ))}
          </ul>
        </main>
      </React.Fragment>
    );
  }

  handleReset = () => {
    const counters = this.state.counters.map((counter) => {
      counter.value = 0;
      return counter;
    });
    this.setState({ counters });
  };

  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value += 1;
    this.setState({ counters });
  };

  handleDecrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    if (counters[index].value !== 0) counters[index].value -= 1;
    this.setState({ counters });
  };

  handleDelete = (counter_id) => {
    const counters = this.state.counters.filter((c) => c.id !== counter_id);
    this.setState({ counters: counters });
  };
}

export default App;
