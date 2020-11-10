/*
 * @Descripttion: 
 * @Author: growydp
 * @Date: 2020-11-06 17:23:00
 * @LastEditors: growydp
 * @LastEditTime: 2020-11-10 17:44:24
 */
/*
 * @Descripttion: 
 * @Author: growydp
 * @Date: 2020-11-06 17:23:00
 * @LastEditors: growydp
 * @LastEditTime: 2020-11-09 17:56:03
 */
const Service = require('egg').Service
const { SuccessResponse, ErrorResponse } = require('../utils/response')
const { decode } = require('../utils/encryption')
const constant = require('../utils/constant')

class AdminService extends Service {
  /**
   * @name: 用户登录
   * @msg: 用户登录
   * @param {object} form
   * @return {object}
   */
  async login(form) {
    const { ctx, app } = this
    // 1. search user
    let user = await this.single(form)
    if (user === null) {
      return new ErrorResponse({message: constant.MYSQLUSERNAME})
    }
    // 2. decrypt user
    const res = await decode(form.password, user.dataValues.password)
    if (!res) {
      return new ErrorResponse({message: constant.MYSQLPASSWORD})
    }
    const token = ctx.app.jwt.sign({id: user.id}, app.config.jwt.secret)
    return new SuccessResponse({ token })
  }

  async info() {
    const { ctx, app } = this
    const id = ctx.app.jwt.verify(ctx.request.header.authorization, app.config.jwt.secret).id
    return new SuccessResponse(await ctx.model.User.findByPk(id, { attributes: { exclude: ['password' ]} }))
  }

  async single(form) {
    const { ctx } = this
    return await ctx.model.User.findOne({ where: { 'username': form.username } })
  }
}

module.exports = AdminService