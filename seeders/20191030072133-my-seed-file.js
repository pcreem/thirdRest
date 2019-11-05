'use strict';
const bcrypt = require('bcrypt-nodejs')
const faker = require('faker')

module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.bulkInsert('Users', [{
      id: 1,
      email: 'root@example.com',
      password: bcrypt.hashSync('12345678', bcrypt.genSaltSync(10), null),
      isAdmin: true,
      name: "root",
      UserId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 2,
      email: 'user1@example.com',
      password: bcrypt.hashSync('12345678', bcrypt.genSaltSync(10), null),
      isAdmin: false,
      name: "user1",
      UserId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 3,
      email: 'user2@example.com',
      password: bcrypt.hashSync('12345678', bcrypt.genSaltSync(10), null),
      isAdmin: false,
      name: "user2",
      UserId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});

    return queryInterface.bulkInsert('Restaurants', [{
      id: 1,
      name: faker.name.findName(),
      tel: faker.phone.phoneNumber(),
      address: faker.address.streetAddress(),
      opening_hours: '08:00',
      image: faker.image.imageUrl(),
      description: faker.lorem.text(),
      userid: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 2,
      name: faker.name.findName(),
      tel: faker.phone.phoneNumber(),
      address: faker.address.streetAddress(),
      opening_hours: '08:00',
      image: faker.image.imageUrl(),
      description: faker.lorem.text(),
      userid: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 3,
      name: faker.name.findName(),
      tel: faker.phone.phoneNumber(),
      address: faker.address.streetAddress(),
      opening_hours: '08:00',
      image: faker.image.imageUrl(),
      description: faker.lorem.text(),
      userid: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 4,
      name: faker.name.findName(),
      tel: faker.phone.phoneNumber(),
      address: faker.address.streetAddress(),
      opening_hours: '08:00',
      image: faker.image.imageUrl(),
      description: faker.lorem.text(),
      userid: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 5,
      name: faker.name.findName(),
      tel: faker.phone.phoneNumber(),
      address: faker.address.streetAddress(),
      opening_hours: '08:00',
      image: faker.image.imageUrl(),
      description: faker.lorem.text(),
      userid: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 6,
      name: faker.name.findName(),
      tel: faker.phone.phoneNumber(),
      address: faker.address.streetAddress(),
      opening_hours: '08:00',
      image: faker.image.imageUrl(),
      description: faker.lorem.text(),
      userid: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    queryInterface.bulkDelete('Users', null, {});
    return queryInterface.bulkDelete('Restaurants', null, {});
  }
};