/*
 * @Descripttion: 
 * @Author: growydp
 * @Date: 2020-11-06 17:23:00
 * @LastEditors: growydp
 * @LastEditTime: 2020-11-07 15:26:45
 */
const Service = require('egg').Service
const { SuccessResponse, ErrorResponse } = require('../utils/response')
const { encode, decode } = require('../utils/encryption')
const constant = require('../utils/constant')

class UserService extends Service {
  async index({ page = 1, limit = this.app.config.Limit, ...where }) {
    const { ctx } = this
    const tempQuery = {
      attributes: {exclude: ['password']},
      limit,
      offset: page * limit - limit,
      where
    }
    const lists = await ctx.model.User.findAndCountAll(tempQuery)
    if (lists) {
      return new SuccessResponse(lists)
    }
  }

  /**
   * @name: 新增用户
   * @msg: 新增用户
   * @param {object} form
   * @return {object}
   */
  async create(form) {
    const { ctx } = this
    try {
      form.password = encode(form.password)
      await ctx.model.User.create(form)
      return new SuccessResponse()
    } catch (error) {
      return new ErrorResponse({message: error.name})
    }
  }

  /**
   * @name: 用户登录
   * @msg: 用户登录
   * @param {object} form
   * @return {object}
   */
  async login(form) {
    const { ctx } = this
    // 1. search user
    let user = await ctx.model.User.findOne({ where: { 'username': form.username } })
    if (user === null) {
      return new ErrorResponse({message: constant.MYSQLUSERNAME})
    }
    // 2. decrypt user
    const res = await decode(form.password, user.dataValues.password)
    if (!res) {
      return new ErrorResponse({message: constant.MYSQLPASSWORD})
    }

    const token = ctx.app.jwt.sign({id: res.id}, this.app.config.jwt.secret)
    console.log(token)
  }
}

module.exports = UserService