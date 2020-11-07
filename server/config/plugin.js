/*
 * @Descripttion: 配置
 * @Author: growydp
 * @Date: 2020-11-06 11:35:44
 * @LastEditors: growydp
 * @LastEditTime: 2020-11-07 11:38:37
 */
'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg
  // static: {
  //   enable: true,
  // }
  sequelize: {
    enable: true,
    package: 'egg-sequelize',
  },
  validatePlus: {
    enable: true,
    package: 'egg-validate-plus',
  },
  jwt: {
    enable: true,
    package: "egg-jwt"
  },
};
