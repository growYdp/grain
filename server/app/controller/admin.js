/*
 * @Descripttion: 
 * @Author: growydp
 * @Date: 2020-11-10 17:28:01
 * @LastEditors: growydp
 * @LastEditTime: 2020-11-10 17:30:47
 */
const Controller = require('egg').Controller

class AdminsController extends Controller {
  async login() {
    const { ctx } = this
    const { body } = ctx.request
    const validateResult = await ctx.validate('admin.login', body)
    if (!validateResult) return
    ctx.body = await ctx.service.admin.login(body)
  }

  async info() {
    const { ctx } = this
    ctx.body = await ctx.service.admin.info()
  }
}

module.exports = AdminsController