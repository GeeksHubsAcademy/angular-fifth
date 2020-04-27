'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Categories', [{
      "id": 1,
      "name": "funkos",
      "createdAt": "2020-03-27T11:48:03.000Z",
      "updatedAt": "2020-03-27T11:48:03.000Z"
    }, {
      "id": 2,
      "name": "armas",
      "createdAt": "2020-03-27T11:48:20.000Z",
      "updatedAt": "2020-03-27T11:48:20.000Z"
    }], {});
  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('categories', null, {});
  }
};