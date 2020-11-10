/*
 * @Descripttion: request
 * @Author: growydp
 * @Date: 2020-11-04 15:01:35
 * @LastEditors: growydp
 * @LastEditTime: 2020-11-10 16:13:20
 */
import axios from 'axios'
import { notifyEn } from './index'

const service = axios.create({
  baseURL: '',
  timeout: 60000
})

service.interceptors.response.use(
  response => {
    const res = response.data
    if (res.errno) {
      if (res.errno === 110) {
        // relogin
      }
      notifyEn({type: 'error', message: '错误', description: res.message})
      return new Error(res.message)
    } else if (res.errno === 0) {
      return res
    }
  }
)

export default service