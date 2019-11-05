'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('users', 'UserId', {
      type: Sequelize.STRING
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('users', 'UserId');
  }
};