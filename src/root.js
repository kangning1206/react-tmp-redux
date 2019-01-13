/*
 * @Author: kangning1206
 * @Date:   2019-01-12 18:36:53
 * @Last Modified by:   kangning1206
 * @Last Modified time: 2019-01-12 20:05:21
 */


import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './store';
import App from './App';

// preloadedState 设置初始的数据；当使用
// combineReducers 方式时，是针对某个key值设置，因此确保存在
const preloadedState = {
  footerReducer: { author: 'kangning1206@163.com', github: 'https://kangning1206.github.io/' }
}
const store = configureStore(preloadedState);

export default () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}
