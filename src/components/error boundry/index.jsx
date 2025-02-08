import React, { Component } from "react";

export default class ErrorBoundry extends Component {
  state = {
    hasError: false,
  };

  componentDidCatch = (error, info) => {
    console.log("ErrorBoundary caught an error", error, info);
    this.setState({
      hasError: true,
    });
  };
  render() {
    if (this.state.hasError) {
      return(<><p>Opps! something went wrong!</p>;
      <button onClick={() => this.setState({ hasError: false })}>
        Retry
      </button>
      </>) 
    }
    return this.props.children;
  }
}
