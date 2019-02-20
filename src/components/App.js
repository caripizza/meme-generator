/* eslint-disable no-console */
import React, { PureComponent } from 'react';
import AppDemo from './AppDemo';

export default class App extends PureComponent {
  state = {
    header: '',
    footer: '',
    imageUrl: '',
    meme: ''
  }

  render() {
    return (
      < >
        <AppDemo />
        <h1>App component</h1>
      </>
    );
  }
}
