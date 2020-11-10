/*
 * @Descripttion: 
 * @Author: growydp
 * @Date: 2020-11-06 17:23:00
 * @LastEditors: growydp
 * @LastEditTime: 2020-11-10 17:34:00
 */
const Service = require('egg').Service
const { SuccessResponse, ErrorResponse } = require('../utils/response')
const { encode, decode } = require('../utils/encryption')
const constant = require('../utils/constant')
const { strToNum } = require('../utils')

class UserService extends Service {
  async index({ page = 1, limit=this.app.config.Limit, ...where }) {
    const {p, l} = strToNum({
      p: page,
      l: limit
    })
    const { ctx } = this
    const tempQuery = {
      l,
      offset: p * l - l,
      where
    }
    try {
      const lists = await ctx.model.User.findAndCountAll(tempQuery)
      return new SuccessResponse({
        data: lists.rows,
        current_page: p,
        per_page: l,
        total: lists.count,
        last_page: Math.ceil(lists.count / l)
      })
    } catch (error) {
      console.log(error)
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
      return new ErrorResponse({message: error.errors[0].message})
    }
  }
  async single(form) {
    const { ctx } = this
    return await ctx.model.User.findOne({ where: { 'username': form.username } })
  }
}

module.exports = UserService