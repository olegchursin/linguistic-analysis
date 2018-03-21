import React from 'react';
import ReactDOM from 'react-dom';
import './semantic/dist/semantic.min.css';
import './css/index.css';
import App from './App';

// Redux
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from "redux-thunk";

// // Redux - Reducers
import { projectReducer } from './reducers/projectReducer' // creating/saving projects and adding lexemes, text to projects
import { dictionaryReducer } from './reducers/dictionaryReducer' // external API requests to dictionaries
import { textReducer } from './reducers/textReducer' // external API requests to text analytics tools
import { hashtagReducer } from './reducers/hashtagReducer' // external API requests to text analytics tools

const rootReducer = combineReducers({ project: projectReducer, dictionary: dictionaryReducer, text: textReducer, hashtag: hashtagReducer })
const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));
