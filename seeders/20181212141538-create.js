'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Flats', [
        {
          title: 'Legénylakás',
          price: 8000000,
          floorArea: 120,
          country: 'Hungary',
          zip: 6727,
          city: 'Szeged',
          street: 'Kárász utca',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: 'Diák kéró',
          price: 9000000,
          floorArea: 100,
          country: 'Hungary',
          zip: 6724,
          city: 'Szeged',
          street: 'Bem utca',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: 'Nyugis lakás',
          price: 7500000,
          floorArea: 90,
          country: 'Hungary',
          zip: 6721,
          city: 'Szeged',
          street: 'Bánk bán utca',
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
  }
};
