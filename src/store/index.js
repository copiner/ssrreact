import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducer';


export const getStore =  () => {
  const store = createStore(rootReducer, applyMiddleware(thunk))
  // console.log(store)
  return store
}

export const getClientStore =  () => {
  let defaultState = window._context ? window._context : {};
  const store = createStore(rootReducer, defaultState, applyMiddleware(thunk))
  return store
}
