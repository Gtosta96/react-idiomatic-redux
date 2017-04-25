import { createStore } from 'redux';
import throttle from 'lodash/throttle';
import todoApp from './reducers';
import { loadState, saveState } from './localStorage';

// Não é recomendavel definir estado total da
// aplicação em um unico lugar pois dificulta testes e mudancas
const persistedState = loadState();


// Exportar configureStore ao invés da store diretamente, assim
// ao criar testes, poderá ter varias instancias de stores independentes
const configureStore = () => {
  const store = createStore(todoApp, persistedState);
  console.log(store.getState()); //  eslint-disable-line

  store.subscribe(throttle(() => {
    saveState({
      todos: store.getState().todos,
    });
  }, 1000));

  return store;
};

export default configureStore;
