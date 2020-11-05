import React, { Component } from "react";

// function App() {
//   return (
//     <div>
//       <h1>Hello World</h1>
//     </div>
//   );
// }

const App = () => (<Couter />)

class Couter extends Component {

  constructor(props) {
    super(props);
    this.state = {
    count: 0,
    message : "message"
  }
  }

  add = (e) => {
    this.setState({
      count: this.state.count + 1,
      message:'add'
    })
  }

  del = (e) => {
    this.setState({
      count: this.state.count - 1,
      message:'del'
    })
}
  render() {
    return (
      <div>
        <div>{this.state.message} : {this.state.count}</div>
        <button onClick={this.add}>+1</button>
        <button onClick={this.del}>-1</button>
      </div>
    )
  }
}

export default App;
