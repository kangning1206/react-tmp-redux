/*
 * @Author: kangning1206
 * @Date:   2019-01-11 09:49:36
 * @Last Modified by:   kangning1206
 * @Last Modified time: 2019-01-11 09:50:54
 */



import fetch from './fetch';

/**
 * [dbProduction 商品列表]
 * @type {Object}
 */
const dbProduction = {
  productionList() {
    return fetch('/product/list');
  },
};

export default dbProduction;
