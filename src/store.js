/*
 * @Author: kangning1206
 * @Date:   2019-01-10 19:09:22
 * @Last Modified by:   kangning1206
 * @Last Modified time: 2019-01-11 12:12:59
 */


import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from './reducers';


const initialState = {};
// 中间件
const middleware = [thunk];

// 开发环境加入logger
if (process.env.NODE_ENV === 'development') {
  middleware.push(logger);
}

// 应用中间件
const composeArr = [applyMiddleware(...middleware)];

// 处理 compose 参数，开发环境启用 redux devtool
if (process.env.NODE_ENV === 'development') {
  composeArr.push(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
}

const store = createStore(
  rootReducer,
  initialState,
  compose.apply(null, composeArr)
);

// compose(
//   applyMiddleware(...middleware),
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// )
// console.log('msg==', process.env.NODE_ENV)
export default store;
