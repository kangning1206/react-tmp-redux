/*
 * @Author: kangning1206
 * @Date:   2019-01-11 09:47:49
 * @Last Modified by:   kangning1206
 * @Last Modified time: 2019-01-13 12:01:53
 */



import { dbAll } from './fetch';

import dbProduction from './production';
import dbCommon from './common';


export {
  dbProduction,
  dbCommon,
  dbAll
};

export default {
  producton: dbProduction,
  common: dbCommon,
  all: dbAll
};
