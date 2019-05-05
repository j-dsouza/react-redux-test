import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Chip from "@material-ui/core/Chip";

class Counter extends Component {
  render() {
    return (
      <div>
        <Chip color={this.getBadgeColor()} label={this.formatCount()} />
        <Button
          variant="outlined"
          color="primary"
          onClick={() => this.props.onIncrement(this.props.counter.id)}
        >
          Increment
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          onClick={() => this.props.onDelete(this.props.counter.id)}
        >
          Delete
        </Button>
      </div>
    );
  }

  getBadgeColor() {
    return this.props.counter.value === 0 ? "" : "primary";
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
