/*
 * @Descripttion: 
 * @Author: growydp
 * @Date: 2020-11-06 11:52:24
 * @LastEditors: growydp
 * @LastEditTime: 2020-11-07 11:57:25
 */
/*
 * @Descripttion: 
 * @Author: growydp
 * @Date: 2020-11-06 11:52:24
 * @LastEditors: growydp
 * @LastEditTime: 2020-11-07 09:55:23
 */
const Controller = require('egg').Controller

class UsersController extends Controller {
  async index() {
    const { ctx } = this
    const { query } = ctx.request
    ctx.body = await ctx.service.user.index(query)
  }

  async create() {
    const { ctx } = this
    const { body } = ctx.request
    const validateResult = await ctx.validate('user.create', body)
    if (!validateResult) return
    ctx.body = await ctx.service.user.create(body)
  }
  async login() {
    const { ctx } = this
    const { body } = ctx.request
    const validateResult = await ctx.validate('user.login', body)
    if (!validateResult) return
    ctx.body = await ctx.service.user.login(body)
  }
}

module.exports = UsersController