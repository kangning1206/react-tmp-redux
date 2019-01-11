/*
 * @Author: kangning1206
 * @Date:   2019-01-10 19:07:19
 * @Last Modified by:   kangning1206
 * @Last Modified time: 2019-01-10 19:46:20
 */


import { GET_PRODUCTION_LIST } from '../actions/actionType';
// reducer的作用: 返回新的状态

const initialState = {
  items: [],
}

export default function(state = initialState, action) {
  switch (action.type) {

    case GET_PRODUCTION_LIST:
      return {
        ...state,
        items: action.payload
      }
    default:
      return state;
  }
}
