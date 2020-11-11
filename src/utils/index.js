/*
 * @Descripttion: 工具
 * @Author: growydp
 * @Date: 2020-11-05 17:49:07
 * @LastEditors: growydp
 * @LastEditTime: 2020-11-11 15:45:22
 */
import { notification } from 'antd'
import Cookies from 'js-cookie'

/**
 * @name: validate 转化为必填对象
 * @msg: 
 * @param {*} message
 * @return {*}
 */
export function formatRequire(message) {
  return { required: true, message }
}

/**
 * @name: antd notify common
 * @msg: 
 * @param {string} type 提示类型
 * @param {string} message 提示内容
 * @param {string} description 提示描述
 * @return {*}
 */
export function notifyEn({ type = 'success', message = '成功', description = '操作成功' }) {
  return notification[type]({
    message,
    description
  })
}

/**
 * @name: js-cookie 设置cookie
 * @msg: 设置cookie
 * @param {string} name cookie name
 * @param {*} value cookie value
 * @param {object} options
 * @return {*}
 */
export function setCookie(name, value, options) {
  return options ? Cookies.set(name, value, options) : Cookies.set(name, value)
}

/**
 * @name: js-cookie 获取cookie
 * @msg: 设置cookie
 * @param {*} name cookie name
 * @return {*}
 */
export function getCookie(name) {
  return Cookies.get(name)
}

/**
 * @name: js-cookie 删除cookie
 * @msg: 删除 cookie
 * @param {*} name cookie name
 * @param {*} options
 * @return {*}
 */
export function removeCookie(name, options) {
  return options ? Cookies.remove(name, options) : Cookies.remove(name)
}