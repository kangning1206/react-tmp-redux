/*
 * @Author: kangning1206
 * @Date:   2019-01-11 09:49:36
 * @Last Modified by:   kangning1206
 * @Last Modified time: 2019-01-13 11:36:58
 */



import fetch from './fetch';

/**
 * [dbProduction 商品列表]
 * @type {Object}
 */
const dbProduction = {
  productionList(reqParam) {
    return fetch('/product/list', reqParam);
  },
};

export default dbProduction;
