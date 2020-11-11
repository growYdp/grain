/*
 * @Descripttion: 
 * @Author: growydp
 * @Date: 2020-11-10 15:25:08
 * @LastEditors: growydp
 * @LastEditTime: 2020-11-11 17:04:15
 */
const { ErrorResponse } = require('../utils/response')

module.exports = options => {
  return async function jwt(ctx, next) {
    const token = ctx.request.header.authorization
    let decode = '';
    if (token) {
      try {
        decode = ctx.app.jwt.verify(token, options.secret)
        const user = await ctx.model.User.findByPk(decode.id, {attributes: { exclude: ['password'] },})
        if (user.token !== token) {
          throw "登录过期"
        } else {
          ctx.uinfo = user
        }
        await next()
      } catch (error) {
        console.log(error)
        ctx.body = new ErrorResponse({ errno: 110, message: error.message ? error.message : error })
      }
    } else {
      ctx.body = new ErrorResponse({ errno: 110, message: '登录过期' })
    }
  }
}