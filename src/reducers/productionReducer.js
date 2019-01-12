/*
 * @Author: kangning1206
 * @Date:   2019-01-10 19:07:19
 * @Last Modified by:   kangning1206
 * @Last Modified time: 2019-01-12 18:11:11
 */


import { GET_PRODUCTION_LIST } from '../actions/actionType';
// reducer的作用: 返回新的状态

const initialState = {
  items: [],
  total: 0
}

export default function(state = initialState, action) {
  switch (action.type) {

    case GET_PRODUCTION_LIST:
      return {
        ...state,
        items: action.payload,
        total: action.payload.length
      }
    default:
      return state;
  }
}
