import { Component }  from "react";
import Counter from "./components/Counter";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1,
    }
  }

  decrementStep = () =>{
    const { step } = this.state;
    if (step < 1) return;
    this.setState({
      step: step - 1,
    });
  }

  incrementStep = () =>{
    const { step } = this.state;
    this.setState({
      step: step + 1,
    });
  }

  render() {
    let { step} = this.state;
    return (
      <div>
        <Counter step={step} />
        <button onClick={this.incrementStep}>+</button>
        <button onClick={this.decrementStep}>-</button>
      </div>
    );
  }
  }

export default App;
