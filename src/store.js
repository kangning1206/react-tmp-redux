/*
 * @Author: kangning1206
 * @Date:   2019-01-10 19:09:22
 * @Last Modified by:   kangning1206
 * @Last Modified time: 2019-01-12 17:44:24
 */


import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from './reducers';


const initialState = {};
// 中间件,增强dispatch
const middleware = [thunk];

// 有选择性的，开发环境加入logger 中间件，在最后
if (process.env.NODE_ENV === 'development') {
  middleware.push(logger);
}

let store;
if (process.env.NODE_ENV === 'development') {
  store = createStore(
    rootReducer,
    initialState,
    compose(applyMiddleware(...middleware), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
  );
} else {
  store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(...middleware)
  );
}

// compose(
//   applyMiddleware(...middleware),
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// )
// console.log('msg==', process.env.NODE_ENV)
export default store;
