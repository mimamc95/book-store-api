'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    return queryInterface.bulkInsert('books', [
      {
        title: 'Node JS',
        description: 'Learning Node JS for beginner',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);

  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('books', null, {});
  }
};
