/* eslint-disable no-console */
import React, { PureComponent } from 'react';
import figlet from 'figlet';
import fonts from '../assets/fonts';
import domtoimage from 'dom-to-image';
import { saveAs } from 'file-saver';

export default class FigletApp extends PureComponent {

  state = {
    counter: 0,
    text: 'default',
    anotherText: '',
    formattedText: '',
    font: 'Weird',
    img: ''
  }

  componentDidMount() {
    this.formatText();
  }

  saveFile = () => {
    saveAs(this.state.img);
  }

  textToImage = (event) => {
    event.preventDefault();
    const image = document.getElementById('formattedText');
    domtoimage.toPng(image)
      .then(img => {
        this.setState({ img });
      });
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
    const { text, formattedText, font, img } = this.state;
    const fontOptions =  fonts.map(font => {
      return (
        <option key={font} value={font}>{font}</option>
      );
    });
    return (
      < >
        <h1>Figlet Fonts!</h1>
        <form onSubmit={this.textToImage}>
          <select name="font"
            onChange={this.handleChange}
            value={font}
          >
            {fontOptions}
          </select>
          <input type="text"
            name="text"
            value={text}
            onChange={this.handleChange}
          />
          <button>Get Image</button>
        </form>
        <h1 id="formattedText"><pre>{formattedText}</pre></h1>
        {img && <img src={img} />}
        {img && <button onClick={this.saveFile}>Save file</button>}
      </>
    );
  }
}
