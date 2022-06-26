import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux';
import App from './App';
import store from './store/index';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>,

);

const appHeight = () => {
  const rootDiv = document.getElementById('root');
  rootDiv.style.setProperty('min-height', `${window.innerHeight + 60}px`);
};
window.addEventListener('resize', appHeight);
appHeight();
