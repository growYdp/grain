/*
 * @Descripttion: 
 * @Author: growydp
 * @Date: 2020-11-06 17:23:00
 * @LastEditors: growydp
 * @LastEditTime: 2020-11-11 11:40:46
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

    // 3. make token
    const token = ctx.app.jwt.sign({id: user.id}, app.config.jwt.secret)

    // 4. save token
    await user.update({token})

    return new SuccessResponse({ token })
  }

  /**
   * @name: 用户信息
   * @msg: 根据token获取用户信息
   * @param {*}
   * @return {*}
   */
  async info() {
    const { ctx } = this
    return new SuccessResponse(ctx.uinfo)
  }

  /**
   * @name: 单个用户
   * @msg: 获取单个用户信息
   * @param {*}
   * @return {*}
   */
  async single(form) {
    const { ctx } = this
    return await ctx.model.User.findOne({ where: { 'username': form.username } })
  }
}

module.exports = AdminService