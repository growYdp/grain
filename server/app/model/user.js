/*
 * @Descripttion: 
 * @Author: growydp
 * @Date: 2020-11-06 17:21:07
 * @LastEditors: growydp
 * @LastEditTime: 2020-11-09 16:59:14
 */
'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const User = app.model.define('user', {
    id: {
      type: INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      comment: '用户ID'
    },
    username: {
      type: STRING,
      allowNull: false,
      comment: '用户名'
    },
    password: {
      type: STRING,
      comment: '用户密码'
    },
    nickname: {
      type: STRING,
      allowNull: false,
      comment: '用户昵称'
    },
    gender: {
      type: INTEGER(10),
      allowNull: false,
      defaultValue: 0,
      comment: '用户性别 0 男 1 女'
    },
    email: {
      type: STRING,
      comment: '用户邮箱'
    },
    job: {
      type: STRING,
      comment: '用户工作'
    },
    company: {
      type: STRING,
      comment: '用户公司'
    },
    status: {
      type: INTEGER(10),
      allowNull: false,
      defaultValue: 0,
      comment: '用户状态 0 正常 1 冻结'
    },
    description: {
      type: STRING,
      comment: '用户介绍'
    },
    is_admin: {
      type: INTEGER(10),
      allowNull: false,
      defaultValue: 0,
      comment: '用户是否是管理员 0 不是 1 是'
    },
    created_at: {
      type: DATE
    },
    updated_at: {
      type: DATE
    }
  }, {
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  });

  return User;
};