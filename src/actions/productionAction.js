/*
 * @Author: kangning1206
 * @Date:   2019-01-10 19:08:08
 * @Last Modified by:   kangning1206
 * @Last Modified time: 2019-01-13 16:32:06
 */


/**
 * 1. 此模块响应 view 中触发的action动作,负责调用 db 数据模块；
 * 2. 对 db 数据做二次处理；
 * 3. 触发 dispatch ，分发通知
 */

import { GET_PRODUCTION_LIST } from './actionType';
import dbProduction from '../api/production';

export function productionList(payload) {
  return {
    type: GET_PRODUCTION_LIST,
    payload
  }
}

export const getProductionList = (reqParam) => dispatch => {
  dbProduction.productionList(reqParam).then(data => {
    dispatch(productionList(data.list))
  });
}


/**
 * [description async await]
 * @param  {[type]} reqParam [description]
 * @return {[type]}          [description]
 */
export const getProductionList2 = (reqParam) => {

  return async dispatch => {
    const success = (result) => {
      dispatch(productionList(result.list1.list.concat(result.list2.list)));
      return result;
    }

    const fail = (err) => {
      dispatch({
        type: 'CREATE_POST_FAIL',
        err
      });
      return err;
    }

    try {
      const list1 = await dbProduction.productionList(reqParam);
      const list2 = await dbProduction.productionList2(reqParam);
      return success({ list1, list2 });
    } catch (err) {
      return fail(err);
    }
  }
}




// export const getProductionList = () => (dispatch, store) => {
//   dbProduction.productionList().then(data => {
//     dispatch({
//       type: GET_PRODUCTION_LIST,
//       payload: data.list
//     })
//   });
// }

// export const createPost = postData => dispatch => {
//   console.log("createPost");
//   fetch("https://jsonplaceholder.typicode.com/posts", {
//       method: "POST",
//       headers: {
//         "content-type": "application/json"
//       },
//       body: JSON.stringify(postData)
//     })
//     .then(res => res.json())
//     .then(post =>
//       dispatch({
//         type: NEW_POST,
//         payload: post
//       })
//     )
// }
