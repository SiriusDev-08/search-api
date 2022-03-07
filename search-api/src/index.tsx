import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import {Provider} from 'react-redux';   
import {myStore} from './_config/redux'
import { App } from './App';


ReactDOM.render(
  <Provider store={myStore}>
    <App />
  </Provider>
,document.getElementById('roots'));
