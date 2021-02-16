// import individual sequelize models
const User = require('./User.js');
const Attraction = require('./Attraction.js');
const Category = require('./Category.js');
const Type = require('./Type.js');
const Comment = require('./Comment.js');
const Vote = require('./Vote.js');
const AttractionType = require('./AttractionType.js');

User.hasMany(Attraction, { foreignKey: 'owner' });
Attraction.belongsTo(User, { foreignKey: 'owner' });

Category.hasMany(Attraction, { foreignKey: 'category_id' });
Type.hasMany(Attraction, { foreignKey: 'type_id' });

Attraction.belongsTo(Category, { foreignKey: 'category_id' });
Attraction.belongsTo(Type, { foreignKey: 'type_id' });

Comment.belongsTo(User, { foreignKey: 'owner' });
Comment.belongsTo(Attraction, { foreignKey: 'attraction_id' });
User.hasMany(Comment, { foreignKey: 'owner' });
Attraction.hasMany(Comment, { foreignKey: 'attraction_id' });

Vote.belongsTo(User, { foreignKey: 'owner' });
Vote.belongsTo(Attraction, { foreignKey: 'attraction_id' });
User.hasMany(Vote, { foreignKey: 'owner' });
Attraction.hasMany(Vote, { foreignKey: 'attraction_id' });

Attraction.belongsToMany(Type, { through: AttractionType, as: 'attraction_types', foreignKey: 'attraction_id' });
Type.belongsToMany(Attraction, { through: AttractionType, as: 'attractions_with_type', foreignKey: 'type_id' });


// export sequelize models
module.exports = { User, Attraction, Category, Type, Comment, Vote, AttractionType };
