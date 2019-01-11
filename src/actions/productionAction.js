/*
 * @Author: kangning1206
 * @Date:   2019-01-10 19:08:08
 * @Last Modified by:   kangning1206
 * @Last Modified time: 2019-01-11 09:56:20
 */


/**
 * 1. 此模块响应 view 中触发的action动作,负责调用 db 数据模块；
 * 2. 对 db 数据做二次处理；
 * 3. 触发 dispatch ，分发通知
 */

import { GET_PRODUCTION_LIST } from './actionType';
import dbProduction from '../api/production';



export const getProductionList = () => dispatch => {
  dbProduction.productionList().then(data => {
    dispatch({
      type: GET_PRODUCTION_LIST,
      payload: data.list
    })
  });
  // fetch("https://easy-mock.com/mock/5bf54037d863cd5370aef547/demoshow/api/v2/product/list")
  //   .then(res => res.json())
  //   .then(data => {

  //       dispatch({
  //         type: GET_PRODUCTION_LIST,
  //         payload: data.content.list
  //       })

  //     }

  //   )
}


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
