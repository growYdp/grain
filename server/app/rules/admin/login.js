/*
 * @Descripttion: 用户登录验证
 * @Author: growydp
 * @Date: 2020-11-07 11:13:05
 * @LastEditors: growydp
 * @LastEditTime: 2020-11-07 11:13:38
 */

'use strict'
const constant = require('../../utils/constant')
const rule = {
  username: [
    { required: true, message: constant.VALIDATEUSERNAMENULL },
  ],
  password: [
    { required: true, message: constant.VALIDATEPASSWORDNULL }
  ]
}

module.exports = rule