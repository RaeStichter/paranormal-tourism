const User = require('./User');
const Attraction = require('./Attraction');
const Category = require('./Category');
const Type = require('./Type');
const Comment = require('./Comment');
const Vote = require('./Vote')

// ==== attraction foreign keys ============
Attraction.hasMany(Category, {
    foreignKey: 'attraction_id'
});

Category.belongsToMany(Attraction, {
    foreignKey: 'attraction_id'
});

Attraction.hasMany(Type, {
    foreignKey: 'attraction_id'
});

Type.belongsToMany(Attraction, {
    foreignKey: 'attraction_id'
});

Attraction.hasMany(Comment, {
    foreignKey: 'post_id'
});

Comment.belongsTo(Attraction, {
    foreignKey: 'post_id'
});

//===== user foreign keys =============
User.hasMany(Comment, {
    foreignKey: 'user_id'
});

Comment.belongsTo(User, {
    foreignKey: 'user_id'
});

User.hasMany(Vote, {
    foreignKey: 'user_id'
});

Vote.belongsTo(User, {
    foreignKey: 'user_id'
});

module.exports = { User, Attraction, Category, Type, Comment, Vote }