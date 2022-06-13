import React from "react";

class ClassCounter extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            likes: 0
        }
        this.increment = this.increment.bind(this)
        this.decrement = this.decrement.bind(this)

    }
    increment() {
        this.setState({
            likes: this.state.likes + 1
        })

    }
    decrement() {
        this.setState({
            likes: this.state.likes - 1
        })

    }
  state = {};
  render() {
    return (
      <div>
        <div>
          {this.state.likes}
          <button onClick={this.increment}>+</button>
          <button onClick={this.decrement}>-</button>
        </div>
      </div>
    );
  }
}

export default ClassCounter;
