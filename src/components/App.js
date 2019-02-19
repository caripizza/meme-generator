/* eslint-disable no-console */
import React, { PureComponent } from 'react';

export default class App extends PureComponent {

  state = {
    // hi: 'there'
    counter: 0
  }

  handleClick = () => {
    // console.log(this.state.hi);
    // to start counter at 0:
    // this.setState((state) => {
    //   console.log('Clicked ' + this.state.counter + ' times');
    //   return { counter: state.counter + 1 };
    // });
    // or, to start at 1 instead of 0:
    const { counter } = this.state;
    this.setState({ counter: counter + 1 }, () => {
      console.log('Clicked ' + this.state.counter + ' times');
    });

  }

  render() {
    return (
      < >
        <h1>Hi</h1>
        <button onClick={this.handleClick}>Submit</button>
      </>
    );
  }
}


// function App() {
// return (
// <h1>Hi</h1>
// );
// }
