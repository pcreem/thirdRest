'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Restaurants', 'UserId', {
      type: Sequelize.STRING
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Restaurants', 'UserId');
  }
};