import { createStore as _createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../reducers';

export default function createStore() {
  const store = _createStore(
    rootReducer,
    applyMiddleware(thunkMiddleware)
  );

  return store;
}
