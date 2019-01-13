/*
 * @Author: kangning1206
 * @Date:   2019-01-10 19:07:19
 * @Last Modified by:   kangning1206
 * @Last Modified time: 2019-01-13 11:57:14
 */


import { GET_PRODUCTION_LIST } from '../actions/actionType';
// reducer的作用: 返回新的状态

const initialState = {
  items: [],
  page: 1,
  total: 0
}

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_PRODUCTION_LIST:
      return {
        ...state,
        page: state.page + 1,
        items: state.items.concat(action.payload)
      }
    default:
      return state;
  }
}
