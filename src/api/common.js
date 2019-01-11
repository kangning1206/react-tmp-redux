/*
* @Author: kangning1206
* @Date:   2019-01-11 09:57:57
* @Last Modified by:   kangning1206
* @Last Modified time: 2019-01-11 09:58:06
*/


import fetch from './fetch';

/**
 * [dbCommon 公共数据模块]
 * @type {Object}
 */
const dbCommon = {
  common1() {
    return fetch('/common/fun1');
  },
  common2() {
    return fetch('/common/fun2');
  },
};

export default dbCommon;
