/*
 * @Descripttion: 
 * @Author: growydp
 * @Date: 2020-11-09 17:19:06
 * @LastEditors: growydp
 * @LastEditTime: 2020-11-09 17:48:30
 */


'use strict'
const constant = require('../../utils/constant')
const rule = {
  username: [
    { type: 'string', message: '密码字段需要是字符串' }
  ]
}

module.exports = rule