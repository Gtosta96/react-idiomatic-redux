import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import throttle from 'lodash/throttle';
import todoApp from './reducers';
import App from './components/App';
import { loadState, saveState } from './localStorage';

// Não é recomendavel definir estado total da
// aplicação em um unico lugar pois dificulta testes e mudancas
const persistedState = loadState();

const store = createStore(todoApp, persistedState);
console.log(store.getState()); //  eslint-disable-line

store.subscribe(throttle(() => {
  saveState({
    todos: store.getState().todos,
  });
}, 1000));

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
