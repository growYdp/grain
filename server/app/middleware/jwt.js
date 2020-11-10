/*
 * @Descripttion: 
 * @Author: growydp
 * @Date: 2020-11-10 15:25:08
 * @LastEditors: growydp
 * @LastEditTime: 2020-11-10 15:42:50
 */
const { ErrorResponse } = require('../utils/response')

module.exports = options => {
  return async function jwt(ctx, next) {
    const token = ctx.request.header.authorization
    let decode = '';
    if (token) {
      try {
        decode = ctx.app.jwt.verify(token, options.secret)
        await next()
      } catch (error) {
        ctx.body = new ErrorResponse({ errno: 110, message: error.message })
      }
    } else {
      ctx.body = new ErrorResponse({ errno: 110, message: '登录过期' })
    }
  }
}