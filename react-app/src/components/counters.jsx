import React, { Component } from "react";
import Counter from "./counter";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

class Counters extends Component {
  render() {
    const { counters } = this.props;

    return (
      <Grid container spacing={16}>
        <Grid item xs={12}>
          <Button
            variant="contained"
            color="primary"
            onClick={this.props.onReset}
          >
            Reset
          </Button>
        </Grid>
        {counters.map(counter => (
          <Grid item xs={12} key={counter.id}>
            <Counter
              key={counter.id}
              onIncrement={this.props.onIncrement}
              onDelete={this.props.onDelete}
              counter={counter}
            />
          </Grid>
        ))}
      </Grid>
    );
  }
}

export default Counters;
