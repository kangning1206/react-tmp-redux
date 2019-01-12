/*
 * @Author: kangning1206
 * @Date:   2019-01-12 17:56:36
 * @Last Modified by:   kangning1206
 * @Last Modified time: 2019-01-12 17:59:01
 */


import { FOO_ACTION_TYPE } from '../actions/actionType';
// reducer的作用: 返回新的状态

const initialState = {
  name: 'foo',
  desc: '这个是拆分reducer数据'
}

export default function(state = initialState, action) {
  switch (action.type) {
    case FOO_ACTION_TYPE:
      return {
        ...state,
        payload: action.payload
      }
    default:
      return state;
  }
}
