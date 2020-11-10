/*
 * @Descripttion: 
 * @Author: growydp
 * @Date: 2020-11-06 11:52:24
 * @LastEditors: growydp
 * @LastEditTime: 2020-11-10 17:29:16
 */
const Controller = require('egg').Controller

class UsersController extends Controller {
  async index() {
    const { ctx } = this
    const { query } = ctx.request
    const validateResult = await ctx.validate('user.index', query)
    if (!validateResult) return
    ctx.body = await ctx.service.user.index(query)
  }

  async create() {
    const { ctx } = this
    const { body } = ctx.request
    const validateResult = await ctx.validate('user.create', body)
    if (!validateResult) return
    ctx.body = await ctx.service.user.create(body)
  }
}

module.exports = UsersController