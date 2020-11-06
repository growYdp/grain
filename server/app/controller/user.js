const Controller = require('egg').Controller

class UsersController extends Controller {
  async index() {

  }

  async create() {
    this.ctx.body = await this.ctx.service.user.create(this.ctx.request.body)
  }
  login() {}
}

module.exports = UsersController