/*
 * @Author: kangning1206
 * @Date:   2019-01-10 19:07:19
 * @Last Modified by:   kangning1206
 * @Last Modified time: 2019-01-10 19:43:47
 */


import { combineReducers } from 'redux';
import productionReducer from './productionReducer';

export default combineReducers({
  productionList: productionReducer
})
