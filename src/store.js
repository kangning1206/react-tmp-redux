/*
 * @Author: kangning1206
 * @Date:   2019-01-10 19:09:22
 * @Last Modified by:   kangning1206
 * @Last Modified time: 2019-01-12 20:28:08
 */


import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from './reducers';

/**
 * [description]
 * @param  {[type]} preloadedState [init状态数据]
 * @return {[type]}                [description]
 */
export default function(preloadedState = {}) {
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
      preloadedState,
      compose(applyMiddleware(...middleware), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
    );
  } else {
    store = createStore(
      rootReducer,
      preloadedState,
      applyMiddleware(...middleware)
    );
  }
  return store
};
