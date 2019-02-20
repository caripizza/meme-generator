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

  handleUpload = ({ target }) => {
    const successMsg = document.getElementById('success-msg');
    this.setState({ imageUrl: window.URL.createObjectURL(target.files[0]) }, () => {
      successMsg.textContent = 'Success!';
      setTimeout(() => {
        successMsg.textContent = '';
      }, 3000);
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
        <form onSubmit={this.memeToImage}>
          <input type="file" name="file" accept="image/png, image/jpeg" onChange={this.handleUpload}/>
          <p id="success-msg"></p>
          <button>Upload</button>
        </form>
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
