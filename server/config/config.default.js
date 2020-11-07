/*
 * @Descripttion: 
 * @Author: growydp
 * @Date: 2020-11-06 11:35:44
 * @LastEditors: growydp
 * @LastEditTime: 2020-11-07 14:55:38
 */
/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
const { ErrorResponse } = require('../app/utils/response')
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1604633739491_7472';

  // add your middleware config here
  config.middleware = [];

  config.security = {
    csrf: {
      enable: false
    }
  }
  
  config.jwt = {
    secret: "!-qsdgt518*/"//自定义 token 的加密条件字符串
  }

  config.Limit = 10

  config.validatePlus = {
    resolveError(ctx, errors) {
      if (errors.length) {
        ctx.type = 'json';
        ctx.status = 200;
        ctx.body = new ErrorResponse({message: errors})
      }
    }
  };

  config.sequelize = {
    dialect: 'mysql',
    host: '127.0.0.1',
    port: 3306,
    database: 'egg',
  };

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
