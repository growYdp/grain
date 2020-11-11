/*
 * @Descripttion: admin api block
 * @Author: growydp
 * @Date: 2020-11-05 17:52:53
 * @LastEditors: growydp
 * @LastEditTime: 2020-11-11 16:56:58
 */
import request from 'utils/request'

// login
export function userLogin(data) {
  return request({
    url: '/login',
    method: 'post',
    data
  })
}

// info
export function userInfo() {
  return request({
    url: '/info',
    method: 'get'
  })
}