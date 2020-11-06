const Service = require('egg').Service
const { SuccessResponse, ErrorResponse } = require('../utils/response')

class UserService extends Service {
  async create(form) {
    const { ctx } = this

    try {
      const res = await ctx.model.User.create(form)
      console.log(res)
      return new SuccessResponse()
    } catch (error) {
      return new ErrorResponse({message: error.name})
    }
  }
}

module.exports = UserService