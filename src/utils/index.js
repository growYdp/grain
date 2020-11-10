/*
 * @Descripttion: 工具
 * @Author: growydp
 * @Date: 2020-11-05 17:49:07
 * @LastEditors: growydp
 * @LastEditTime: 2020-11-10 16:08:06
 */
import { notification } from 'antd'

export function formatRequire(message) {
  return { required: true, message }
}

export function notifyEn({ type = 'success', message = '成功', description = '操作成功' }) {
  return notification[type]({
    message,
    description
  })
}