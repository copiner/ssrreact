import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
// import indexReducer from '../reducer';
//
// const reducer = combineReducers({
//   index: {}
// });
//
//
// export const getStore =  () => {
//   const store = createStore(reducer, applyMiddleware(thunk))
//   // console.log(store)
//   return store
// }
//
// export const getClientStore =  () => {
//   let defaultState = window._context ? window._context : {};
//   const store = createStore(reducer, defaultState, applyMiddleware(thunk))
//   console.log(store)
//   return store
// }
