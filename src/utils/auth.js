/*
 * @Descripttion: auth
 * @Author: growydp
 * @Date: 2020-11-11 15:45:31
 * @LastEditors: growydp
 * @LastEditTime: 2020-11-11 15:49:34
 */
import { setCookie, getCookie, removeCookie } from './index'
const TokenName = 'ADMIN_TOKEN'

/**
 * @name: 设置token cookie
 * @msg: 将token保存至本地
 * @param {*} value string token
 * @return {*}
 */
export function setToken(value) {
  return setCookie(TokenName, value)
}

/**
 * @name: 获取token
 * @msg: 获取 cookie 中的token
 * @param {*}
 * @return {*}
 */
export function getToken() {
  return getCookie(TokenName)
}

/**
 * @name: 移除token
 * @msg: 移除 cookie 中的token
 * @param {*}
 * @return {*}
 */
export function removeToken() {
  return removeCookie(TokenName)
}