/* eslint-disable no-console */
import React, { PureComponent } from 'react';
import figlet from 'figlet';
import fonts from './fonts';

export default class App extends PureComponent {

  state = {
    counter: 0,
    text: '',
    anotherText: '',
    formattedText: '',
    font: 'Weird'
  }

  handleClick = () => {
    const { counter } = this.state;
    this.setState({ counter: counter + 1 }, () => {
      console.log('Clicked ' + this.state.counter + ' times');
    });
  }

  formatText = () => {
    const { text, font } = this.state;
    figlet.text(text, font, (error, data) => {
      if(error) return console.log(error);
      this.setState({ formattedText: data });
    });
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value }, () => {
      this.formatText();
    });
  }

  render() {
    const { text, anotherText, formattedText, font } = this.state;
    const fontOptions =  fonts.map(font => {
      return (
        <option key={font} value={font}>{font}</option>
      );
    });
    return (
      < >
        <h1>Hi</h1>
        <select name="font" onChange={this.handleChange} value={font}>
          {fontOptions}
        </select>
        {/* <input type="text" name="text" value={text} onChange={this.handleChange} /> */}
        <input type="text" name="anotherText" value={anotherText} onChange={this.handleChange} />
        <input type="text" name="text" value={text} onChange={this.handleChange} />
        {/* <h1>{text}</h1> */}
        <h1>{anotherText}</h1>
        <h1><pre>{formattedText}</pre></h1>
        <button onClick={this.handleClick}>Submit</button>
      </>
    );
  }
}
