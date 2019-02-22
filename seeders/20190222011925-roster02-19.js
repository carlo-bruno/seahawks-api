"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */

    return queryInterface.bulkInsert("players", [
      {
        firstName: "Russel",
        lastName: "Wilson",
        number: 3,
        position: "QB",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: "Doug",
        lastName: "Baldwin",
        number: 89,
        position: "WR",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: "Tyler",
        lastName: "Lockett",
        number: 16,
        position: "WR",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: "Bobby",
        lastName: "Wagner",
        number: 54,
        position: "LB",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete("players", null, {});
  }
};
