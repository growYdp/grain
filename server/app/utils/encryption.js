/*
 * @Descripttion: 
 * @Author: growydp
 * @Date: 2020-11-07 09:14:48
 * @LastEditors: growydp
 * @LastEditTime: 2020-11-07 11:32:24
 */

const bcrypt = require('bcryptjs')
const user = require('../model/user')

/**
 * @name: encryption
 * @msg: 加密
 * @param {string} password 需要加密的内容
 * @return {string}
 */
function encode(password) {
  const salt = bcrypt.genSaltSync(10)
  return bcrypt.hashSync(password, salt)
}

/**
 * @name: decrypt
 * @msg: 解密
 * @param {string} password 未加密的内容
 * @param {string} user_password 数据库中已加密的内容
 * @return {string}
 */
async function decode(password, user_password) {
  return await bcrypt.compare(password, user_password)
}

module.exports = {
  encode,
  decode
}