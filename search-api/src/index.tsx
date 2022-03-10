import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss'; 
import {Provider} from 'react-redux';   
import {myStore} from './_config/redux'
import { App as SearchAPI } from './features/SearchAPI/App';

ReactDOM.render(
  <Provider store={myStore}>
    <SearchAPI />
  </Provider>
  ,document.getElementById('roots')
);
