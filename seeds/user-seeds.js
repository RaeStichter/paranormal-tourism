const { User } = require('../models');

const userData = [
    {
        id: 'admin',
        username: 'admin',
        passhash: 'password',
        email: 'admin@mail.com',
        level: 2
    },
    {
        id: 'admin2',
        username: 'admin2',
        passhash: 'password',
        email: 'admin2@mail.com',
        level: 2
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;