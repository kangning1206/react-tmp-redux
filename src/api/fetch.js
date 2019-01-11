/*
 * @Author: kangning1206
 * @Date:   2019-01-11 09:47:49
 * @Last Modified by:   kangning1206
 * @Last Modified time: 2019-01-11 09:48:52
 */



import axios from 'axios';

/**
 * [noop 空函数]
 * @return {[type]} [description]
 */
const noop = () => {};
if (process.env.NODE_ENV === 'development') {
  // axios 配置
  axios.defaults.baseURL = 'https://easy-mock.com/mock/5bf54037d863cd5370aef547/demoshow/api/v2';
  axios.defaults.timeout = 5000;
  axios.defaults.headers.common.Authorization = 'AUTH_TOKEN';
  axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
} else {
  axios.defaults.baseURL = '/api/v2';
}


// 返回状态判断
axios.interceptors.response.use((res) => {
  if (res.status >= 200 && res.status < 300) {
    if (res.data.success) {
      return res.data.content;
    }
  }
  return Promise.reject(res);
}, error => Promise.reject(error));


/**
 * [dbAll 同时执行多个任务]
 * @param  {[type]}   tasks [任务数组]
 * @param  {Function} callback    [方式1：所有任务完成后，回调函数]
 * @return {[type]}         [方式2：promise then 方式处理返回数据]
 */
export function dbAll(tasks, callback = noop) {
  return axios.all(tasks).then((arr) => {
    callback(...arr);
    return arr;
  });
}

/**
 * [fetch 数据请求]
 * @param  {[type]} url    [api接口地址，设置了base时，是相对地址]
 * @param  {[type]} params [数据参数对象 {}]
 * @param  {Object} config [axios额外配置 {}]
 * @return {[type]}        [返回promise对象]
 */
export default function fetch(url, params, config = {}) {
  // 修正传入参数
  let data = {};

  if (!config.method) {
    data = { params };
  } else if (config.method === 'post' || config.method === 'put' || config.method === 'patch') {
    data = { data: params };
  }
  return new Promise((resolve, reject) => {
    axios.request({
        url,
        ...data,
        ...config,
      })
      .then((response) => {
        resolve(response);
      }, (err) => {
        reject(err);
      })
      .catch((error) => {
        reject(error);
      });
  });
}
