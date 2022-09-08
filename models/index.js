
// IMPORTS
const User = require('./User');
const Post = require('./Post');



// ASSOCIATIONS

User.hasMany(Post, {
    foreignKey: 'user_id',
    as: 'posts'
});

Post.belongsTo(User, {
    foreignKey: 'user_id'
});



// EXPORTS
module.exports = {User, Post};