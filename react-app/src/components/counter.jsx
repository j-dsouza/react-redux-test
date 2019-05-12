import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Chip from "@material-ui/core/Chip";
import Grid from "@material-ui/core/Grid";

class Counter extends Component {
  render() {
    return (
      <Grid container spacing={16}>
        <Grid item xs={1}>
          <Chip color={this.getBadgeColor()} label={this.formatCount()} />
        </Grid>
        <Grid item xs={2}>
          <Button
            variant="outlined"
            color="primary"
            onClick={() => this.props.onIncrement(this.props.counter.id)}
          >
            Increment
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button
            variant="outlined"
            color="secondary"
            onClick={() => this.props.onDelete(this.props.counter.id)}
          >
            Delete
          </Button>
        </Grid>
      </Grid>
    );
  }

  getBadgeColor() {
    return this.props.counter.value === 0 ? "default" : "primary";
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
