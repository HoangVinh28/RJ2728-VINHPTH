import React, { Component } from "react";
type Props = {};
type State = {
  count: number;
};
class BlockUIClass extends Component<Props, State> {
  state = {
    count: 0,
  };
  tang = () => {
    this.setState((state) => ({
      count: state.count + 1,
    }));
  };
  giam = () => {
    this.setState((state) => ({
      count: state.count - 1,
    }));
  };
  render() {
    return (
      <div className="d-flex w-50 m-auto">
        <button
          onClick={this.tang}
          disabled={this.state.count >= 10 ? true : false}
        >
          Increase
        </button>
        <h1>{this.state.count}</h1>
        <button
          onClick={this.giam}
          disabled={this.state.count <= 0 ? true : false}
        >
          Decrease
        </button>
        {
            this.state.count === 10 && <h1>MAX</h1>
        }
      </div>
    );
  }
}
export default BlockUIClass;