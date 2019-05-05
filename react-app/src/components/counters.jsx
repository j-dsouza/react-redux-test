import React, { Component } from "react";
import Counter from "./counter";
import Button from "@material-ui/core/Button";

class Counters extends Component {
  render() {
    const { counters } = this.props;

    return (
      <div>
        {
          <Button
            variant="contained"
            color="primary"
            onClick={this.props.onReset}
          >
            Reset
          </Button>
        }
        {counters.map(counter => (
          <Counter
            key={counter.id}
            onIncrement={this.props.onIncrement}
            onDelete={this.props.onDelete}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
