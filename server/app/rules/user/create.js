/*
 * @Descripttion: 创建用户验证
 * @Author: growydp
 * @Date: 2020-11-07 09:41:39
 * @LastEditors: growydp
 * @LastEditTime: 2020-11-07 11:13:24
 */
'use strict'
const constant = require('../../utils/constant')
const rule = {
  username: [
    { required: true, message: constant.VALIDATEUSERNAMENULL },
  ],
  password: [
    { required: true, message: constant.VALIDATEPASSWORDNULL }
  ],
  nickname: [
    { required: true, message: constant.VALIDATENICKNAMENULL }
  ]
}

module.exports = rule