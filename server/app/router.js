/*
 * @Descripttion: 
 * @Author: growydp
 * @Date: 2020-11-06 11:35:44
 * @LastEditors: growydp
 * @LastEditTime: 2020-11-10 17:29:55
 */
'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  const jwt = app.middleware.jwt(app.config.jwt)

  router.get('/', controller.home.index);
  router.resources('/api/user', jwt, controller.user)
  router.post('/api/login', controller.admin.login)
  router.get('/api/info', controller.admin.info)
};
