/*
 * @Author: kangning1206
 * @Date:   2019-01-10 19:07:19
 * @Last Modified by:   kangning1206
 * @Last Modified time: 2019-01-12 20:04:00
 */


import { combineReducers } from 'redux';
import productionReducer from './productionReducer';
import fooReducer from './fooReducer';

const footerReducer = (state = {}) => state;

export default combineReducers({
  productionReducer,
  fooReducer,
  footerReducer
})
