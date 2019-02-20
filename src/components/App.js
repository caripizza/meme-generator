/* eslint-disable no-console */
import React, { PureComponent } from 'react';
import FigletApp from './FigletApp';
import MemeDisplay from './MemeDisplay';
import domtoimage from 'dom-to-image';
import { saveAs } from 'file-saver';
// import 'normalize.css';

export default class App extends PureComponent {
  state = {
    headerText: '',
    footerText: '',
    imageUrl: '',
    meme: ''
  }

  saveFile = () => {
    saveAs(this.state.meme);
  }

  memeToImage = (event) => {
    event.preventDefault();
    const createdMeme = document.getElementById('meme-id');
    domtoimage.toPng(createdMeme)
      .then(meme => {
        this.setState({ meme });
      });
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value }, () => {
      this.headerText, this.footerText, this.imageUrl;
    });
  }

  render() {
    const { headerText, footerText, imageUrl, meme } = this.state;
    return (
      < >
        <FigletApp />
        <MemeDisplay
          headerText={headerText}
          imageUrl={imageUrl}
          footerText={footerText}
          handleChange={this.handleChange}
          memeToImage={this.memeToImage}
          saveFile={this.saveFile}
        />
        {meme && <img src={meme}/>}
        {meme && <button onClick={this.saveFile}>Save file</button>}
      </>
    );
  }
}
