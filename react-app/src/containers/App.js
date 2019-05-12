import React, { Component } from "react";
import "../App.css";
import NavBar from "../components/navbar";
import Counters from "../components/counters";
import { connect } from "react-redux";
import { handleIncrement, handleDelete } from "../actions/counterActions";
import { handleReset } from "../actions/appActions";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar
          totalCounters={
            this.props.counters.counter.filter(c => c.value > 0).length
          }
        />
        <main className="container">
          <Counters
            counters={this.props.counters.counter}
            onReset={this.props.handleReset}
            onIncrement={this.props.handleIncrement}
            onDelete={this.props.handleDelete}
          />
        </main>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    counters: state.counterReducer
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleIncrement: counterId => {
      dispatch(handleIncrement(counterId));
      console.log("Increment dispatched");
    },
    handleDelete: counterId => {
      dispatch(handleDelete(counterId));
      console.log("Delete dispatched");
    },
    handleReset: () => {
      dispatch(handleReset());
      console.log("Reset dispatched");
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
