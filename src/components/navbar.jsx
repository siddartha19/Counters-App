import React, { Component } from "react";

class NavBar extends Component {
  styles = {
    fontWeight: "bold",
  };
  render() {
    const { totalCounters } = this.props;
    return (
      <div>
        <nav className="navbar navbar-light bg-light">
          <span style={this.styles} className="navbar-brand mb-0 h1">
            Counters
            <span className="badge badge-pill badge-dark m-2">
              {totalCounters}
            </span>
          </span>
        </nav>
      </div>
    );
  }
}

export default NavBar;
