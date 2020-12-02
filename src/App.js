import React, { Component } from 'react';

import { BrowserRouter } from 'react-router-dom'
import Routes from './routes';

export default class Root extends Component {
  render() {

    // @ts-ignore
    return (
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
    );
  }



}
