// import individual sequelize models
const User = require('./User.js');
const Attraction = require('./Attraction.js');
const Category = require('./Category.js');
const Type = require('./Type.js');
const Comment = require('./Comment.js');
const Vote = require('./Vote.js');

// export sequelize models
module.exports = { User, Attraction, Category, Type, Comment, Vote };
