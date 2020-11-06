'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, DATE, STRING } = Sequelize

    await queryInterface.createTable('users', {
      id: {
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      username: {
        type: STRING,
        allowNull: false
      },
      password: {
        type: STRING,
        allowNull: false
      },
      nickname: {
        type: STRING,
        allowNull: false
      },
      gender: {
        type: INTEGER(10),
        allowNull: false
      },
      email: {
        type: STRING,
        allowNull: false
      },
      job: {
        type: STRING,
        allowNull: false
      },
      company: {
        type: STRING,
        allowNull: false
      },
      status: {
        type: INTEGER(10),
        allowNull: false
      },
      description: {
        type: STRING,
        allowNull: false
      },
      is_admin: {
        type: INTEGER(10),
        allowNull: false
      },
      created_at: {
        type: DATE
      },
      updated_at: {
        type: DATE
      }
    })
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('users')
  }
};
