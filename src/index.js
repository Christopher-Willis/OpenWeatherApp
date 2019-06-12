import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/appContainer.js';
import * as serviceWorker from './serviceWorker';
import "typeface-roboto";
//could also import via css link, this way is, in theory, fast to load page
import { Provider } from 'react-redux'
import store from "./store"


ReactDOM.render(
<Provider store={store}>
  <App />
</Provider>
,document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
