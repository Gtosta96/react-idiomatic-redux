import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import todoApp from './reducers';
import App from './components/App';

// Não é recomendavel definir estado total da
// aplicação em um unico lugar pois dificulta testes e mudancas
const persistedState = {
  todos: [{
    id: '0',
    text: 'Welcome back!',
    completed: false,
  }],
};

const store = createStore(todoApp, persistedState);
console.log(store.getState()); //  eslint-disable-line

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
