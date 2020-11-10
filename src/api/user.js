/*
 * @Descripttion: 
 * @Author: growydp
 * @Date: 2020-11-05 17:52:53
 * @LastEditors: growydp
 * @LastEditTime: 2020-11-10 15:51:50
 */
import request from 'utils/request'

export function userLogin(data) {
  return request({
    url: '/login',
    method: 'post',
    data
  })
}