import { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      mode: true,
    };
  }

  incrementCounter = () => {
    const { count } = this.state;
    const { step } = this.props;
    this.setState({
      count: count + step,
    });
  };

  decrementCounter = () => {
    const { count } = this.state;
    const { step } = this.props;
    if (count < 1) return;
    this.setState({
      count: count - step,
    });
  };

  changeMode = () => {
    const { mode } = this.state;
    this.setState({
      mode: !mode,
    });
  };

  render() {
    let { count, mode } = this.state;
    let { step } = this.props;

    return (
      <div>
        <h1>{count}</h1>
        
        <button onClick={mode ? this.incrementCounter : this.decrementCounter}>
          Change count
        </button>

        <button onClick={this.changeMode}>Mode</button>
        <div>
          <p>You add: {step}</p>
        </div>
      </div>
    );
  }
}

export default Counter;
