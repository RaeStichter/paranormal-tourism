const seedAttractions = require('./attraction-seeds');
const seedCategories = require('./category-seeds');
const seedTypes = require('./type-seeds');
const seedAttractionTypes = require('./attractionType-seeds');
const seedUsers = require('./user-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');

  await seedCategories();
  console.log('\n----- CATEGORIES SEEDED -----\n');

  await seedUsers();
  console.log('\n----- USERS SEEDED -----\n')

  await seedAttractions();
  console.log('\n----- ATTRACTIONS SEEDED -----\n');

  await seedTypes();
  console.log('\n----- TYPES SEEDED -----\n');

  await seedAttractionTypes();
  console.log('\n----- ATTRACTION-TYPES SEEDED -----\n');

  process.exit(0);
};

seedAll();
