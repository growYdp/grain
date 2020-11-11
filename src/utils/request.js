/*
 * @Descripttion: request
 * @Author: growydp
 * @Date: 2020-11-04 15:01:35
 * @LastEditors: growydp
 * @LastEditTime: 2020-11-11 17:02:34
 */
import axios from 'axios'
import { notifyEn } from './index'
import { getToken } from 'utils/auth'

const service = axios.create({
  baseURL: '',
  timeout: 60000
})

service.interceptors.request.use(
  config => {
    config.headers['Authorization'] = getToken()
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

service.interceptors.response.use(
  response => {
    const res = response.data
    if (res.errno) {
      if (res.errno === 110) {
        // relogin
      }
      notifyEn({type: 'error', message: '错误', description: res.message})
      return Promise.reject(res.message)
    } else if (res.errno === 0) {
      return res
    }
  }
)

export default service