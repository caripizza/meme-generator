/* eslint-disable no-console */
import React, { PureComponent } from 'react';
import figlet from 'figlet';

export default class App extends PureComponent {

  state = {
    counter: 0,
    text: '',
    anotherText: '',
    formattedText: ''
  }

  handleClick = () => {
    const { counter } = this.state;
    this.setState({ counter: counter + 1 }, () => {
      console.log('Clicked ' + this.state.counter + ' times');
    });
  }

  formatText = () => {
    const font = 'Weird';
    figlet.text(this.state.text, { font }, (error, data) => {
      if(error) return console.log(error);
      this.setState({ formattedText: data });
    });
  }

  handleChange = ({ target }) => {
    // console.log(target.name);
    this.setState({ [target.name]: target.value }, () => {
      this.formatText();
    });
  }

  render() {
    const { text, anotherText, formattedText } = this.state;
    return (
      < >
        <h1>Hi</h1>
        <input type="text" name="text" value={text} onChange={this.handleChange} />
        <input type="text" name="anotherText" value={anotherText} onChange={this.handleChange} />
        <input type="text" name="text" value={text} onChange={this.handleChange} />
        <h1>{text}</h1>
        <h1>{anotherText}</h1>
        <h1><pre>{formattedText}</pre></h1>
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
