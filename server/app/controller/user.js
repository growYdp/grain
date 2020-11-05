const Controller = require('egg').Controller

class UserController extends Controller {
  login() {
    const { ctx } = this
    ctx.body = true
  }
}

module.exports = UserController